import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = [
    "Student",
    "Software Engineer",
    "Full Stack Developer",
  ];
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Doruk Savasan"
            className="text-center text-[40px] md:text-6xl lg:text-6xl"
          />

          <div className="text-center text-[20px] md:text-3xl lg:text-3xl">
            Hi! I am Doruk, a
            <FlipWords words={words} />
            based in Boston, MA.
          </div>

          <a
            className="pt-5"
            href="https://drive.google.com/file/d/1826Yh21lmbz8qBDI_kFMMdibwYMp29f_/view?usp=drive_link"
            target="_blank"
          >
            <MagicButton
              title="Check Out My Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
