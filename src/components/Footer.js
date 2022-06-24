import React from "react";
import { FaGithub, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
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

      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="" role="link" aria-label="heart">
            💙
          </span>{" "}
          by{" "}
          <a className="text-blue-500 hover:underline" href="">
            <span className="text-bold">meeeeeeee!</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
