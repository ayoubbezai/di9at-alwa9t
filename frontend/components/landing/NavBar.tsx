"use client";

import Image from "next/image";
import WhiteLogo from "@/assets/logos/white_logo.png";
import DarkBlueLogo from "@/assets/logos/dark_blue_logo.png";
import { FaPhone } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function NavBar({
  isWhite = false,
  t,
}: {
  isWhite?: boolean;
  t: (key: string) => string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const currentLocale = params?.locale?.toString() || "en";
  const otherLocale = currentLocale === "en" ? "ar" : "en";
  const isRtl = currentLocale === "ar";

  const handleLanguageSwitch = async () => {
    const segments = pathname.split("/");
    segments[1] = otherLocale;
    router.push(segments.join("/") || `/${otherLocale}`);

  };

  useEffect(() => {
    const handleScroll = () => isMenuOpen && setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/cars", label: t("nav.cars") },
    { href: "/trips", label: t("nav.trips") },
    { href: "/contact-us", label: t("nav.contact") },
  ];

  const isActive = (href: string) => pathname === `/${currentLocale}${href}`;

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex ${isRtl && "flex-row-reverse"} ${
          isWhite
            ? "text-white absolute"
            : "text-primary-dark relative h-18 bg-[#F6F6F6] shadow-md"
        } top-0 w-full justify-between items-center py-4 px-8 z-50`}
      >
        <div className="flex items-center gap-3">
          <Image
            src={isWhite ? WhiteLogo : DarkBlueLogo}
            alt="Company Logo"
            width={36}
          />
          <h1 className="font-semibold text-lg">{t("companyName")}</h1>
        </div>

        <ul
          className={`flex flex-row ${
            isRtl && "flex-row-reverse mr-6"
          }  gap-12 text-[15px] font-medium`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={`/${currentLocale}${link.href}`}
                className={`transition-colors hover:text-primary ${
                  isActive(link.href) ? "font-semibold" : "font-medium"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`flex flex-row ${
            isRtl && "flex-row-reverse"
          }  items-center gap-4`}
        >
          <button
            onClick={handleLanguageSwitch}
            className={`border px-3 py-1 text-sm rounded-md transition-colors ${
              isWhite
                ? "border-white text-white hover:bg-white hover:text-primary-dark"
                : "border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
            }`}
          >
            {otherLocale.toUpperCase()}
          </button>

          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              isWhite ? "bg-white" : "bg-primary-dark"
            }`}
          >
            <FaPhone
              className={
                isWhite
                  ? isRtl
                    ? "text-[#3A5978]/90"
                    : "text-[#7A7B78]"
                  : "text-white"
              }
              size={18}
            />
          </div>
          <div className="text-sm">
            <p className={`${isRtl && "text-end"} `}>{t("help.question")}</p>
            <p className="font-medium">{t("help.phone")}</p>
          </div>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <button
        aria-label="Open menu"
        className="md:hidden absolute top-5 right-6 text-white z-50"
        onClick={() => setIsMenuOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-primary-dark/95 text-white flex flex-col px-6 py-8 gap-6">
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 left-4"
            >
              <IoMdClose size={26} />
            </button>

            <div className="flex items-center gap-3 mt-8">
              <Image src={WhiteLogo} alt="Company Logo" width={36} />
              <h1 className="font-semibold text-lg">{t("companyName")}</h1>
            </div>

            <ul className="flex flex-col  items-center gap-6 mt-6 text-base w-full">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${currentLocale}${link.href}`}
                    className={`block py-2 ${
                      isActive(link.href)
                        ? "font-semibold text-white"
                        : "font-medium text-white/80"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={handleLanguageSwitch}
              className="mt-auto border px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white hover:text-primary-dark transition-colors"
            >
              {otherLocale.toUpperCase()}
            </button>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <FaPhone className="text-primary-dark/85" size={18} />
              </div>
              <div className="text-sm">
                <p>{t("help.question")}</p>
                <p className="font-medium">{t("help.phone")}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
