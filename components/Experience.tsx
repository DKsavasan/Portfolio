import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const Experience = () => {
  return (
    <div className="pt-20 w-full" id="experience">
      <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center  tracking-tight text-transparent heading mb-20 pb-5">
        My <span className="text-orange">Work Experiences</span>
      </h1>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-orange"></div>

        <div className="space-y-10">
          {workExperience.map((card) => (
            <div
              key={card.id}
              className={`flex ${
                card.id % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              <div className={`w-5/12`}>
                <Button
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  borderRadius="1.75rem"
                  style={{
                    background: "#161618",
                    backgroundImage:
                      "linear-gradient(90deg, #161618 0%, #161618 100%)",
                    borderRadius: `calc(1.75rem * 0.96)`,
                  }}
                  className="w-full text-black dark:text-white border-neutral-200 dark:border-white/[0.2]"
                >
                  <div className="flex flex-col p-6 gap-4">
                    <div className="flex flex-row items-center">
                      <img
                        src={card.thumbnail}
                        alt={card.thumbnail}
                        className="w-16 h-16 object-contain"
                      />
                      <h1 className="text-xl font-bold pl-5">
                        {card.companyName}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-start text-xl font-bold">
                        {card.title}
                      </h1>
                      {Array.isArray(card.desc) ? (
                        <ul className="text-start list-disc list-inside text-white-100 pt-2 pl-3">
                          {card.desc.map((item, index) => (
                            <li className="pb-2" key={index}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-start text-white-100 mt-2">
                          {card.desc}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-row items-center ">
                        <IoLocationSharp />
                        <h1 className="pl-1">{card.location}</h1>
                      </div>
                      <div className="flex flex-row items-center ">
                        <MdDateRange />
                        <h1 className="pl-1">{card.date}</h1>
                      </div>
                    </div>
                  </div>
                </Button>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange rounded-full mt-6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
