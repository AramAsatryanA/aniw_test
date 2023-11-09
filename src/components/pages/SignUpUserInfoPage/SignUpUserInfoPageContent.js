"use client";

import { useState } from "react";
import Link from "next/link";

const gendersToChoose = [
  { title: "Female", isActive: false },
  { title: "Male", isActive: false },
];

function SignUpUserInfoPageContent() {
  const [genders, setGenders] = useState(gendersToChoose);

  function selectActiveGenderHandler(title) {
    setGenders((prevState) =>
      prevState.map((item) =>
        item.title === title
          ? { ...item, isActive: true }
          : { ...item, isActive: false },
      ),
    );
  }

  return (
    <div className="authentication-card-type">
      <h1 className="text-center text-2xl font-semibold">Welcome to Aniw</h1>
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="full-name">
          Full name
        </label>
        <input
          placeholder="Full name"
          type="text"
          id="full-name"
          className="input-type"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="birthday">
          Birthday
        </label>
        <input
          placeholder=""
          type="date"
          id="birthday"
          className="input-type"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="gender">
          Gender
        </label>
        <div className="flex items-center gap-3">
          {genders.map((gender) => (
            <input
              key={gender.title}
              id="gender"
              type="button"
              defaultValue={gender.title}
              onClick={() => selectActiveGenderHandler(gender.title)}
              className={`w-full cursor-pointer rounded-[4px] border bg-custom-gray-100 py-3 text-center text-base transition-all dark:bg-custom-black-500 ${
                gender.isActive
                  ? "border-black text-black dark:border-white dark:text-white"
                  : "border-transparent text-custom-gray-700 hover:bg-custom-gray-300 dark:hover:bg-custom-black-300"
              }`}
            />
          ))}
        </div>
      </div>
      <Link href="/login" className="button-blue-type">
        Create account
      </Link>
    </div>
  );
}

export default SignUpUserInfoPageContent;
