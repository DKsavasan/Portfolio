import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/flip-words";
import { ShootingStars } from "./ui/shooting-stars";
import { socialMedia } from "@/data";

const Hero = () => {
  const words = ["Student", "Full Stack Developer", "Computer Enthusiast"];
  return (
    <div className="pb-20 pt-36">
      <ShootingStars
        starColor="#FF7315"
        trailColor="#F4F4F4"
        starWidth={20}
        starHeight={2}
        className="h-screen"
      />

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="orange" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Doruk Savasan"
            className="text-center text-[40px] md:text-6xl lg:text-6xl"
          />

          <div className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text tracking-tight text-transparent  text-center text-[20px] md:text-3xl lg:text-3xl">
            Hi! I am Doruk, a
            <FlipWords words={words} />
            based in Boston, MA.
          </div>

          <a
            className="pt-5"
            href="https://drive.google.com/file/d/1HyaOxIpaIe1j6k3byWX1LnpnHdVgfsoC/view?usp=sharing"
            target="_blank"
          >
            <MagicButton
              title="Check Out My Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-10"
              >
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <img src={info.img} alt="icons" width={20} height={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
