"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

function CreateItemLanguageButtons() {
  const { theme } = useTheme();

  const [languageIsEnglish, setLanguageIsEnglish] = useState(true);
  const [russianLanguageIsAdded, setRussianLanguageIsAdded] = useState(false);

  return (
    <div className="flex items-center gap-6">
      <button
        className={`rounded-lg border border-transparent px-2 py-1 text-base font-medium transition-all ${
          languageIsEnglish
            ? "bg-black text-white dark:bg-white dark:text-black dark:hover:border-black"
            : "text-black hover:border-custom-gray-900 dark:text-white "
        }`}
        onClick={() => {
          setLanguageIsEnglish(true);
        }}
      >
        English
      </button>
      {languageIsEnglish ? (
        !russianLanguageIsAdded ? (
          <button
            className="rounded-lg border border-transparent px-2 py-1 text-base text-custom-gray-700 transition-all hover:border-custom-gray-900  dark:hover:border-custom-gray-700"
            onClick={() => {
              setLanguageIsEnglish(false);
              setRussianLanguageIsAdded(true);
            }}
          >
            + Add Russian
          </button>
        ) : (
          <div className="group flex items-center gap-1 rounded-lg border border-transparent px-2 py-1 text-base font-medium text-black transition-all hover:border-black  dark:text-white dark:hover:border-white dark:hover:bg-custom-black-300">
            <button
              onClick={() => {
                setLanguageIsEnglish(false);
                setRussianLanguageIsAdded(true);
              }}
            >
              Russian
            </button>
            <button
              className="hidden h-6 w-6 p-[2px] transition-all hover:p-0 group-hover:inline-block"
              onClick={() => {
                setLanguageIsEnglish(true);
                setRussianLanguageIsAdded(false);
              }}
            >
              <Image
                src={theme === "dark" ? "/close-dark.svg" : "/close-light.svg"}
                alt="Close Icon"
                width={50}
                height={50}
              />
            </button>
          </div>
        )
      ) : (
        <div className="group flex items-center gap-1 rounded-lg bg-black px-2 py-1 text-base font-medium text-white transition-all dark:bg-white dark:text-black">
          <button
            onClick={() => {
              setLanguageIsEnglish(false);
            }}
          >
            Russian
          </button>
          <button
            className="hidden h-6 w-6 p-[2px] transition-all hover:p-0 group-hover:inline-block"
            onClick={() => {
              setLanguageIsEnglish(true);
              setRussianLanguageIsAdded(false);
            }}
          >
            <Image
              src={theme === "dark" ? "/close-light.svg" : "/close-dark.svg"}
              alt="Close Icon"
              width={50}
              height={50}
            />
          </button>
        </div>
      )}
      <div className="border-y border-custom-gray-300"></div>
    </div>
  );
}

export default CreateItemLanguageButtons;
