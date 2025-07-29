import Image from "next/image";

export default function NavBar() {
  const linkStyling = ``;
  return (
    <nav className=" flex flex-row justify-between text-center align-center py-4 px-8 ">
      <h1>dikat al wakt</h1>
      <ul className="flex flex-row justify-between gap-6">
        <li>home</li>
        <li>cars</li>
        <li>trips</li>
        <li>contact_us</li>
      </ul>
      <div>
        <p>Do u have problem ?</p>
        <p>+213 07-48-11-06-47</p>
      </div>
    </nav>
  );
}
