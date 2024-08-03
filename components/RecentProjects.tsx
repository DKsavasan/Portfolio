import React from "react";
import { Card, Carousel } from "./ui/apple-cards-carousel";
import Image from "next/image";

const RecentProjects = () => {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <section id="projects">
      <div className="w-full h-full py-20">
        <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center tracking-tight text-transparent heading mb-10 pb-5">
          My <span className="text-orange">Projects</span>
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default RecentProjects;

const DummyContent = () => {
  return (
    <>
      {/* {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })} */}
    </>
  );
};

const data = [
  {
    category: "Mobile App",
    title: "Connections",
    content: <DummyContent />,
    gitlink: "",
  },
  {
    category: "Web Application",
    title: "Real-time Docs",
    content: <DummyContent />,
    gitlink: "",
  },
  {
    category: "Website",
    title: "Boston University Anatomy & Neurobiology",
    content: <DummyContent />,
    gitlink: "https://www.bumc.bu.edu/anatneuro/",
  },
  {
    category: "Data Analysis",
    title: "Air Quality Analysis for The City of Boston",
    content: <DummyContent />,
    gitlink: "https://github.com/DKsavasan/Boston_Air_Quality_Project",
  },
  {
    category: "Machine Learning",
    title: "Amazon Movie Rating Prediction",
    content: <DummyContent />,
    gitlink: "https://github.com/DKsavasan/AmazonMovieRatingPrediction",
  },
  {
    category: "Web Application",
    title: "Concerts Near Me",
    content: <DummyContent />,
    gitlink: "https://github.com/DKsavasan/ConcertsNearMe",
  },
];
