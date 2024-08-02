import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "2d9b331d-fac0-45f2-80f7-c46c8ddd63e5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <footer className="w-full mt-60" id="contact">
      <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Contact Me!
      </h1>
      <LampContainer>
        <div></div>
      </LampContainer>
      <div className="flex flex-col items-center mb-20">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-xl space-y-6 text-center px-4 sm:px-0"
        >
          <div>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-6 py-3 bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 cursor-text"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-6 py-3 bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 cursor-text"
            />
          </div>
          <div>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={4}
              className="w-full px-6 py-3 bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 resize-none cursor-text"
            ></textarea>
          </div>
          <div>
            <MagicButton
              title="Submit"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </form>
        {result && <p className="mt-6 text-center text-white-200">{result}</p>}
      </div>

      <div className="flex mt-40 md:flex-row flex-col justify-between items-center pb-20">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Doruk Savasan
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
