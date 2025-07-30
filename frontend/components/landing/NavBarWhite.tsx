"use client";

import Image from "next/image";
import WhiteLogo from "@/assets/logos/white_logo.png";
import { FaPhone } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBarWhite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex text-white absolute top-0 w-full justify-between items-center py-4 px-8 z-50">
        <div className="flex items-center gap-3">
          <Image src={WhiteLogo} alt="white logo" width={36} />
          <h1 className="font-semibold text-lg">Dikat Al Waqt</h1>
        </div>

        <ul className="flex gap-12 text-[15px] font-medium">
          <Link href="/">Home</Link>
          <Link href="/">Cars</Link>
          <Link href="/">Trips</Link>
          <Link href="/">Contact Us</Link>
        </ul>

        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center">
            <FaPhone className="text-[#7A7B78]" size={18} />
          </div>
          <div className="text-sm">
            <p>Do you have a problem?</p>
            <p className="font-medium">+213 07-48-11-06-47</p>
          </div>
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        title="menu"
        className="md:hidden absolute top-5 right-6 text-white z-50"
        onClick={() => setIsMenuOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-primary-dark/95 text-white flex flex-col items-start px-6 py-8 gap-6 z-50 md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 left-4"
            title="Close Menu"
          >
            <IoMdClose size={26} />
          </button>

          <div className="flex items-center gap-3 mt-8">
            <Image src={WhiteLogo} alt="white logo" width={36} />
            <h1 className="font-semibold text-lg">Dikat Al Waqt</h1>
          </div>

          <ul className="flex flex-col gap-12 mt-6 text-base font-medium items-center w-full">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/">Cars</Link>
            <Link href="/">Trips</Link>
            <Link href="/">Contact Us</Link>
          </ul>

          <div className="mt-auto flex items-center gap-3 pt-12">
            <div className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center">
              <FaPhone className="text-primary-dark/85" size={18} />
            </div>
            <div className="text-sm">
              <p>Need Help?</p>
              <p className="font-medium">+213 07-48-11-06-47</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
