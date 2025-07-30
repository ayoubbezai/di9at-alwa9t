import Image from "next/image";
import WhiteLogo from "@/assets/logos/white_logo.png";
import { FaPhone } from "react-icons/fa";

export default function NavBarWhite() {
  return (
    <nav className=" flex text-white absolute top-0 w-full flex-row justify-between items-center text-center align-center py-4 px-8 ">
      <div className="flex items-center justify-between gap-3">
        <Image src={WhiteLogo} alt="whote logo" width={36} />

        <h1>dikat al wakt</h1>
      </div>
      <ul className="flex flex-row justify-between gap-12  text-[15px]">
        <li className="">home</li>
        <li>cars</li>
        <li>trips</li>
        <li>contact_us</li>
      </ul>
      <div className="flex items-center justify-between gap-3">
        <div className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden">
          <FaPhone className="absolute text-[#7A7B78] bg-clip-text" size={18} />
        </div>
        <div>
          <p className="text-sm">Do u have problem ?</p>
          <p className=" font-medium text-sm">+213 07-48-11-06-47</p>
        </div>
      </div>
    </nav>
  );
}
