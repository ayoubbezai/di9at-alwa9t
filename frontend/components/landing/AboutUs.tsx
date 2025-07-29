import Image from "next/image";
import AboutUsImage from "../../assets/images/about_us.png";
import "../../style/about.css";

type LabelProps = {
  title: string;
  number: string;
};

const AboutUsData = [
  { title: "Years of Experience", number: "20+" },
  { title: "Cities Served", number: "10+" },
  { title: "Fleet Size", number: "100+" },
  { title: "Happy Customers", number: "100K+" },
];

const Label = ({ title, number }: LabelProps) => (
  <div className="flex flex-col items-center justify-center gap-2 ">
    <span className="font-bold text-xl md:text-[28px] text-primary text-center">
      {number}
    </span>
    <span className="text-sm text-primary-dark/80 text-center">{title}</span>
  </div>
);
export default function AboutUs() {
  return (
    <section className="flex  flex-col-reverse md:flex-row items-center justify-between my-20  px-6 py-8 w-full mx-6 lg:mx-10 md:px-0 gap-12">
      {/*  text */}
      <div className="flex flex-col justify-center items-start w-full mx-auto ">
        <h3 className="font-medium text-lg md:text-xl text-primary-dark/90 text-left mb-2">
          About Us
        </h3>
        <h1 className="font-bold text-xl md:text-3xl text-primary-dark text-left">
          Professional transportation with local expertise and trusted quality.
        </h1>
        <p className="font-normal text-base md:text-lg text-primary-dark/80 text-left mt-4">
          At Diqat Al Waqt, we provide safe and flexible transportation services
          for individuals and visitors within and between cities across the
          Kingdom. With over 20 years of experience, we offer a comfortable
          travel experience for pilgrims, visitors, and residents—featuring a
          modern fleet, professional drivers, and 24/7 service availability.
        </p>
        <div className="grid custom-grid  grid-cols-4 gap-6 md:gap-14 mt-8 items-start justify-start w-full md:w-5/6 ">
          {AboutUsData.map((data, index) => (
            <Label key={index} title={data.title} number={data.number} />
          ))}
        </div>
      </div>
      {/*  image */}
      <div className="flex flex-col justify-center items-center w-2/3 mx-auto md:w-full">
        <Image src={AboutUsImage} alt="About Us" width={360} height={330} />
      </div>
    </section>
  );
}
