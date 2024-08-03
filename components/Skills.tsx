import React from "react";
import { Meteors } from "./ui/meteors";

const Skills = () => {
  return (
    <div className="w-full py-20" id="skills">
      <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center tracking-tight text-transparent heading mb-20 pb-5">
        My Technical <span className="text-orange">Skills</span>
      </h1>
      <div className="flex flex-row justify-between gap-5">
        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange to-red-400 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-black-400 border border-white/[0.1] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Programming Languages
            </h1>
            <ul className="text-start list-disc list-inside pt-2 pl-3">
              <li className="pb-2">Python</li>
              <li className="pb-2">JavaScript</li>
              <li className="pb-2">C#</li>
              <li className="pb-2">SQL</li>
              <li className="pb-2">Java</li>
              <li className="pb-2">TypeScript</li>
              <li className="pb-2">HTML/CSS</li>
              <li className="pb-2">C++</li>
              <li className="pb-2">R</li>
              <li className="pb-2">C</li>
              <li className="pb-2">Assembly</li>
            </ul>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>

        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange to-red-400 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-black-400 border border-white/[0.1] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Frameworks
            </h1>
            <ul className="text-start list-disc list-inside pt-2 pl-3">
              <li className="pb-2">React</li>
              <li className="pb-2">Node.js</li>
              <li className="pb-2">ASP.NET Core</li>
              <li className="pb-2">Next.js</li>
              <li className="pb-2">Express.js</li>
              <li className="pb-2">Flask</li>
              <li className="pb-2">React Native</li>
              <li className="pb-2">Expo Router</li>
              <li className="pb-2">Async Storage</li>
              <li className="pb-2">Vercel</li>
              <li className="pb-2">Clerk</li>
              <li className="pb-2">Sentry</li>
            </ul>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>

        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange to-red-400 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-black-400 border border-white/[0.1] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Tools and Platforms
            </h1>
            <ul className="text-start list-disc list-inside pt-2 pl-3">
              <li className="pb-2">Git</li>
              <li className="pb-2">Bash</li>
              <li className="pb-2">Linux</li>
              <li className="pb-2">MongoDB</li>
              <li className="pb-2">MySQL</li>
              <li className="pb-2">Firebase</li>
              <li className="pb-2">SQLite</li>
              <li className="pb-2">MSSQL</li>
              <li className="pb-2">Kubernetes</li>
              <li className="pb-2">Docker</li>
              <li className="pb-2">AWS</li>
            </ul>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>

        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange to-red-400 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-black-400 border border-white/[0.1] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Libraries
            </h1>
            <ul className="text-start list-disc list-inside pt-2 pl-3">
              <li className="pb-2">Pandas</li>
              <li className="pb-2">NumPy</li>
              <li className="pb-2">Matplotlib</li>
              <li className="pb-2">Seaborn</li>
              <li className="pb-2">Scikit-Learn</li>
              <li className="pb-2">PyTorch</li>
              <li className="pb-2">TensorFlow</li>
              <li className="pb-2">SciPy</li>
              <li className="pb-2">NLTK</li>
              <li className="pb-2">TextBlob</li>
              <li className="pb-2">Folium</li>
            </ul>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
