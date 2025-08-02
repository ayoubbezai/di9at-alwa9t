import Image from "next/image";
import AboutUsImage from "../../assets/images/about_us/about_us.png";
import "../../style/about.css";

type LabelProps = {
  title: string;
  number: string;
};

export default function AboutUs({
  t,
  isRtl,
}: {
  t: (key: string) => string;
  isRtl: boolean;
}) {
  const AboutUsData = [
    { title: t("about_us.years_of_experience"), number: "20+" },
    { title: t("about_us.cities_served"), number: "10+" },
    { title: t("about_us.fleet_size"), number: "100+" },
    { title: t("about_us.happy_customers"), number: "100K+" },
  ];

  const Label = ({ title, number }: LabelProps) => (
    <div className="flex flex-col items-center justify-center gap-2">
      <span className="font-bold text-xl md:text-[28px] text-primary text-center">
        {number}
      </span>
      <span className="text-sm text-primary-dark/80 text-center">{title}</span>
    </div>
  );

  return (
    <section
      className={`flex flex-col-reverse  ${
        isRtl ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between my-8 px-6 py-8 w-full max-w-7xl md:mx-6 lg:mx-auto   md:px-0 gap-36`}
    >
      {/* Text Section */}
      <div
        className={`flex flex-col justify-center ${
          isRtl ? "items-end" : "items-start"
        } w-full mx-auto`}
      >
        <h3 className="font-medium text-lg md:text-xl text-primary-dark/90 text-left mb-2">
          {t("about_us.subtitle")}
        </h3>
        <h1 className="font-bold text-xl md:text-3xl text-primary-dark text-left">
          {t("about_us.title")}
        </h1>
        <p
          className={`font-normal text-base md:text-lg text-primary-dark/80 ${
            isRtl ? "text-right" : " text-left"
          } mt-4`}
        >
          {t("about_us.description")}
        </p>
        <div className="grid custom-grid grid-cols-4 gap-6 md:gap-14 mt-8 items-start justify-start w-full md:w-5/6">
          {AboutUsData.map((data, index) => (
            <Label key={index} title={data.title} number={data.number} />
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-col justify-center items-center w-2/3 mx-auto md:w-full">
        <Image
          src={AboutUsImage}
          alt={t("about_us.image_alt")}
          width={360}
          height={330}
        />
      </div>
    </section>
  );
}
