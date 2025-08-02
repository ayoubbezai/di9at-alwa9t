"use client";

import Image from "next/image";
import BgImage from "@/assets/background/footer_bg.webp";
import { Button } from "../ui/button";
import WhiteLogo from "@/assets/logos/white_logo.png";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function SocialIcon({
  Icon,
  href,
  label,
}: {
  Icon: React.ElementType;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-white hover:text-white/70 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-2 rounded-full border border-white">
        <Icon size={16} />
      </div>
    </a>
  );
}

const socialLinks = [
  {
    Icon: FaFacebook,
    href: "javascript:void(0)",
    label: "footer.social.facebook",
  },
  {
    Icon: FaTwitter,
    href: "javascript:void(0)",
    label: "footer.social.twitter",
  },
  {
    Icon: FaInstagram,
    href: "javascript:void(0)",
    label: "footer.social.instagram",
  },
  {
    Icon: FaLinkedin,
    href: "javascript:void(0)",
    label: "footer.social.linkedin",
  },
];

const otherLinks = [
  { name: "footer.privacy_policy", href: "/" },
  { name: "footer.terms_conditions", href: "/" },
  { name: "footer.contact_us", href: "/" },
];

function OtherLinks({ t }: { t: (key: string) => string }) {
  return (
    <nav
      aria-label="Footer links"
      className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-white text-sm"
    >
      {otherLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="hover:text-white/70 transition-colors px-2 py-1"
        >
          {t(link.name)}
        </Link>
      ))}
    </nav>
  );
}

export default function Footer({
  t,
  isRtl,
}: {
  t: (key: string, options?: any) => string;
  isRtl: boolean;
}) {
  return (
    <footer className="relative w-full overflow-hidden h-auto min-h-[70vh] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src={BgImage}
          alt="Footer background"
          placeholder="blur"
          loading="lazy"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          sizes="40vw"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col h-full justify-between pt-8 pb-6 md:pt-12">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center text-center gap-3 sm:gap-4 w-full px-4 lg:w-2/3 mx-auto">
          <h3 className="text-xs sm:text-sm font-normal text-white/85">
            {t("footer.slogan")}
          </h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {t("footer.title")}
          </h1>
          <p className="text-sm lg:text-base font-normal text-white/85 leading-5 sm:leading-6 w-full sm:w-5/6 md:w-2/3 mx-auto">
            {t("footer.description")}
          </p>
          <Button className="text-primary-dark mt-3 sm:mt-4 mb-4 sm:mb-6 bg-white px-4 sm:px-6 py-4 sm:py-5 hover:bg-gray-100 hover:scale-[102%] transition-colors cursor-pointer text-xs sm:text-sm shadow-sm font-medium">
            {t("footer.contact_button")}
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 w-11/12 mx-auto mt-4 sm:mt-0">
          <hr className="h-[1px] w-full sm:w-2/3 mx-auto bg-white/30" />

          <div
            className={`flex flex-col items-center space-y-4 sm:space-y-0 ${
              isRtl ? "lg:flex-row-reverse " : "lg:flex-row "
            } justify-between w-full px-4 sm:px-6 py-4 gap-6`}
          >
            {/* Logo */}
            <div
              className={`flex ${
                isRtl ? "flex-row-reverse " : "flex-row "
              } items-center gap-2 order-1 sm:order-none`}
            >
              <Image
                alt="White logo"
                src={WhiteLogo}
                width={36}
                height={36}
                loading="lazy"
                placeholder="blur"
                className="w-8 h-8 sm:w-9 sm:h-9"
              />
              <p className="text-white font-medium text-sm sm:text-base">
                {t("footer.brand")}
              </p>
            </div>

            {/* Links */}
            <div
              className={`order-3 ${
                isRtl ? "lg:mr-20" : "lg:ml-20"
              }  sm:order-none w-full sm:w-auto`}
            >
              <OtherLinks t={t} />
            </div>

            {/* Social Media Icons */}
            <nav
              aria-label="Social media"
              className="flex items-center gap-3 sm:gap-4 order-2 sm:order-none"
            >
              {socialLinks.map((link, index) => (
                <SocialIcon
                  key={index}
                  Icon={link.Icon}
                  href={link.href}
                  label={t(link.label)}
                />
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <p className="text-xs font-normal text-white/85 text-center pb-2 sm:pb-0">
            {t("footer.rights_reserved", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
