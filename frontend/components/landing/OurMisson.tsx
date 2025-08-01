import Image from "next/image";
import { Button } from "../ui/button";
import Left_Image from "../../assets/images/our_mission/left_misson_image.png";
import Right_Image from "../../assets/images/our_mission/right_mission_image.png";

export default function OurMission({
  t,
  isRtl,
}: {
  t: (key: string) => string;
  isRtl: boolean;
}) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 pt-8 md:pb-8 w-full mx-auto md:px-0 md:mt-8 gap-12">
      {/* Left image */}
      <div className="flex flex-col justify-center items-center w-2/3 mx-auto md:w-full">
        <Image src={Left_Image} alt="left_image" width={280} height={330} />
      </div>

      {/* Middle text */}
      <div className="flex flex-col justify-center items-center gap-10 mt-12 md:my-4  text-center">
        <h1
          className={`font-bold text-primary-dark  ${
            isRtl ? "text-[32px] md:text-5xl" : "text-[26px] md:text-4xl"
          }`}
        >
          {t("our_mission.title")}
        </h1>
        <h2
          className={`font-normal text-primary-dark ${
            isRtl
              ? "text-lg md:text-[19px] leading-loose"
              : "text-base md:text-lg"
          }`}
        >
          {t("our_mission.description")}
        </h2>
        <Button className="bg-secondary text-base px-16 py-5 hover:bg-secondary-dark cursor-pointer">
          {t("our_mission.cta")}
        </Button>
      </div>

      {/* Right image (only on desktop) */}
      <div className="hidden md:flex flex-col justify-center items-center w-2/3 mx-auto md:w-full">
        <Image src={Right_Image} alt="right_image" width={280} height={330} />
      </div>
    </section>
  );
}
