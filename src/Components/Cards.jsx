import React from "react";
import { GiDualityMask } from "react-icons/gi";

function Cards() {
  return (
    <>
      <div
        style={{ zIndex: 1000, position: "relative" , }}
        className="w-full text-center mb-[20rem] mt-[9rem] mini:text-sm"
      >
        <h1 className="w-full flex items justify-center text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white z-[50]">
          Path to Glory!
        </h1>

        <h1 className="mt-20 w-full flex items justify-center text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white z-[50]">
          Level 1
        </h1>

        <div className="flex flex-wrap justify-center mt-10 z-[60]">
          {/* Easy Cards  */}
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-black-800 bg-opacity-70 bg-teal-400 hover:transform hover:scale-105 transition-transform p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <GiDualityMask />
                </div>
                <h2 className="text-white dark:text-white text-lg font-medium">
                  Array of Characters
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                I march in line, one after the other,
                telling tales and whispering of another.
                I can be written, typed, or drawn with care,
                but speak no words, though secrets I can share.
                </p>
                <a
                  href="https://google.com"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-black-800 bg-opacity-70 bg-teal-400 hover:transform hover:scale-105 transition-transform p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <GiDualityMask />
                </div>
                <h2 className="text-white dark:text-white text-lg font-medium">
                  Fix Me
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  Run the python program while ensuring that the encrypted file is also in the same directory.
                </p>
                <a
                  href="#"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-black-800 bg-opacity-70 bg-teal-400 hover:transform hover:scale-105 transition-transform p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <GiDualityMask />
                </div>
                <h2 className="text-white dark:text-white text-lg font-medium">
                  Investigate
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                Leave No Stones Unturned. Elementary My Dear Friends.
                </p>
                <a
                  href="#"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 className="mt-20 w-full flex items justify-center text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white z-[50]">
          Level 2
        </h1>

        <div className="flex flex-wrap justify-center mt-10 z-[60]">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-black-800 bg-opacity-70 bg-teal-400 hover:transform hover:scale-105 transition-transform p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <GiDualityMask />
                </div>
                <h2 className="text-white dark:text-white text-lg font-medium">
                  Repeatations 
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  The name speaks for itself.
                </p>
                <a
                  href="#"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-black-800 bg-opacity-70 bg-teal-400 hover:transform hover:scale-105 transition-transform p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <GiDualityMask />
                </div>
                <h2 className="text-white dark:text-white text-lg font-medium">
                  It Hurts
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                "In the kingdom of databases, where queries speak a cryptic tongue, find the key to unravel secrets hidden in the vault of tables. Forge the syntax wisely, and the gates shall open, revealing the shadows of data waiting to be unmasked. What am I?"

                </p>
                <a
                  href="#"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-black-800 bg-opacity-70 bg-teal-400 hover:transform hover:scale-105 transition-transform p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <GiDualityMask />
                </div>
                <h2 className="text-white dark:text-white text-lg font-medium">
                  LET ME IN.....
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  FBI Open Up. Name the Org.
                </p>
                <a
                  href="#"
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
