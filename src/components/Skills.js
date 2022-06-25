import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-center text-black sm:text-4xl font-bold pt-4">
        Tech That I Use
      </p>

      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 text-center">
          <FaReact color="#2196f3" className="mx-auto text-8xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            React
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 justify-center">
          <SiTailwindcss color="#2196f3" className="mx-auto text-8xl" />
          <p className="mt-6 text-xl text-center sm:text-2xl mx-auto font-semibold">
            TailwindCSS
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#f7df1e" className="mx-auto text-8xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold sm:text-center">
            Javascript
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiHtml5 color="#F16529" className="mx-auto text-8xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            HTML5
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCss3 color="#2196f3" className="mx-auto text-8xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            CSS3
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
