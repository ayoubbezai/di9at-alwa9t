"use client";

import Image from "next/image";
import WhiteLogo from "@/assets/logos/white_logo.png";
import DarkBlueLogo from "@/assets/logos/dark_blue_logo.png";
import { FaPhone } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar({ isWhite = false }: { isWhite?: boolean }) {
  // Determine styles based on isWhite prop

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
      <nav
        className={`hidden md:flex  ${
          isWhite
            ? "text-white  absolute"
            : "text-primary-dark relative h-18 bg-[#F6F6F6] shadow-md"
        }text-white absolute top-0 w-full justify-between items-center py-4 px-8 z-50`}
      >
        <div className="flex items-center gap-3">
          {isWhite ? (
            <Image src={WhiteLogo} alt="white logo" width={36} />
          ) : (
            <Image src={DarkBlueLogo} alt="dark blue logo" width={36} />
          )}
          <h1 className="font-semibold text-lg">Dikat Al Waqt</h1>
        </div>

        <ul className="flex gap-12 text-[15px] font-medium">
          <Link href="/">Home</Link>
          <Link href="/cars">Cars</Link>
          <Link href="/trips">Trips</Link>
          <Link href="/contact-us">Contact Us</Link>
        </ul>

        <div className="flex items-center gap-3">
          <div
            className={`relative w-9 h-9 rounded-full ${
              isWhite ? "bg-white " : "bg-primary-dark"
            } flex items-center justify-center`}
          >
            <FaPhone
              className={` ${isWhite ? "text-[#7A7B78]" : "text-white"}`}
              size={18}
            />
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
            <Link href="/cars">Cars</Link>
            <Link href="/trips">Trips</Link>
            <Link href="/contact-us">Contact Us</Link>
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
