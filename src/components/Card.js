import React from "react";
import profile from "../images/profile_photo.jpeg";
import { FaGithub, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto drop-shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="my face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">Abraham Mendoza</p>

          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Front-End Web Developer
          </p>
        </div>

        <div className="flex align-center justify-center mt-4">
          {/* Github icon and link*/}
          <a
            href="https://github.com/abeepositive"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaGithub />
            <span class="sr-only">Github</span>
          </a>

          {/* Youtube icon and link*/}
          <a
            href="https://github.com/abeepositive"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaYoutube />
            <span class="sr-only">Youtube</span>
          </a>

          {/* Twitter icon and link*/}
          <a
            href="https://github.com/abeepositive"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaTwitter />
            <span class="sr-only">Twitter</span>
          </a>

          {/* Envelope icon and link*/}
          <a
            href="https://github.com/abeepositive"
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-yellow-500 hover:bg-yellow-400 rounded-full hover:text-white transition-colors duration-300"
          >
            <FaEnvelope />
            <span class="sr-only">Envelope</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
