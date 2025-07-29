import HeroImage from "@/assets/background/hero_bg.jpg";

export default function Hero() {
  return (
    <div
      className="min-h-screen bg-cover relative w-full z-0 bg-center flex items-center justify-center mb-12"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
      }}
    >
      {/* You can put content here */}
      <h1 className="text-white text-4xl font-bold">
        Welcome to Di9at Al Wa9t
      </h1>
      <div className="absolute inset-0 bg-gradient-to-t  from-black/65 to-black/45 -z-10 " />
    </div>
  );
}
