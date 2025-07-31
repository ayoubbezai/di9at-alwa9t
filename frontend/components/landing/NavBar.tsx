"use client";

import Image from "next/image";
import WhiteLogo from "@/assets/logos/white_logo.png";
import DarkBlueLogo from "@/assets/logos/dark_blue_logo.png";
import { FaPhone } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({ isWhite = false }: { isWhite?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => isMenuOpen && setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Navigation links data
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/cars", label: "Cars" },
    { href: "/trips", label: "Trips" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  // Check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex ${
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
          <h1 className="font-semibold text-lg">Dikat Al Waqt</h1>
        </div>

        <ul className="flex gap-12 text-[15px] font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  isActive(link.href) ? "font-semibold" : "font-medium"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              isWhite ? "bg-white" : "bg-primary-dark"
            }`}
          >
            <FaPhone
              className={isWhite ? "text-[#7A7B78]" : "text-white"}
              size={18}
            />
          </div>
          <div className="text-sm">
            <p>Do you have a problem?</p>
            <p className="font-medium">+213 07-48-11-06-47</p>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <button
        aria-label="Open menu"
        className="md:hidden absolute top-5 right-6 text-white z-50"
        onClick={() => setIsMenuOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      {/* Mobile Menu Overlay */}
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
              <h1 className="font-semibold text-lg">Dikat Al Waqt</h1>
            </div>

            <ul className="flex flex-col gap-6 mt-6 text-base w-full">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
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

            <div className="mt-auto flex items-center gap-3 pt-12">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                <FaPhone className="text-primary-dark/85" size={18} />
              </div>
              <div className="text-sm">
                <p>Need Help?</p>
                <p className="font-medium">+213 07-48-11-06-47</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
