"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="refrences" className="pt-20 pb-10">
      <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center  tracking-tight text-transparent heading pb-5">
        Kind words from
        <span className="text-orange"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
