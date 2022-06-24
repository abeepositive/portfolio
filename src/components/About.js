import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hallo! 👋
      </p>

      <p className="text-base sm:text-xl font-bold text-center text-gray-600 leading-relaxed mt-4">
        I am a burger. I am a burger. I am a burger. I am a burger. I am a
        burger. I am a burger. I am a burger. I am a burger. I am a burger. I am
        a burger. I am a burger. I am a burger. I am a burger. I am a burger.
      </p>

      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500 cursor-pointer"></FaChevronDown>
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
