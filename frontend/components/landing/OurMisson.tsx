import Image from "next/image";
import { Button } from "../ui/button";
import Left_Image from "../../assets/images/our_mission/left_misson_image.png";
import Right_Image from "../../assets/images/our_mission/right_mission_image.png";
export default function OurMission() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-8  w-full mx-auto md:px-0 gap-12 ">
      {/* left images  */}
      <div className="flex flex-col justify-center items-center w-2/3 mx-auto md:w-full ">
        <Image src={Left_Image} alt="left_image" width={280} height={330} />
      </div>
      {/* middle text */}
      <div className="flex flex-col justify-center items-center gap-8 my-12 md:my-0">
        <h1
          className={`font-bold text-4xl md:text-5xl text-primary-dark text-center`}
        >
          Our Misson
        </h1>
        <h2 className="font-normal text-base md:text-lg text-primary-dark  text-center  ">
          Providing safe and reliable transportation services within the Kingdom
          of Saudi Arabia, with a modern fleet and 24-hour availability, with
          special care for the comfort of pilgrims and visitors in Makkah,
          Madinah, and Jeddah.
        </h2>
        <Button className="bg-secondary text-center text-base px-16 py-5 hover:bg-secondary-dark  cursor-pointer">
          See More
        </Button>
      </div>
      <div className="hidden md:flex flex-col  justify-center items-center w-2/3 mx-auto  md:w-full ">
        <Image src={Right_Image} alt="right_image" width={280} height={330} />
      </div>
    </section>
  );
}
