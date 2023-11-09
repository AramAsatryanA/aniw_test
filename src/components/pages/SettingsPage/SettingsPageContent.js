"use client";

import { useState } from "react";

import InputItem from "@/components/UI/CustomElements/InputItem";

const gendersToChoose = [
  { title: "Female", isActive: false },
  { title: "Male", isActive: false },
];

function SettingsPageContent() {
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
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-col gap-6 border-t border-custom-gray-300 pt-6 dark:border-custom-black-300">
        <InputItem
          id="full-name"
          title="Fullname"
          type="text"
          placeholder="Lucas Pacheco"
        />
        <InputItem id="birthday" title="Birthday" type="date" placeholder="" />
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <label className="text-sm" htmlFor="gender">
            Gender
          </label>
          <div className="flex items-center gap-3 lg:w-[492px]">
            {genders.map((gender) => (
              <input
                key={gender.title}
                id="gender"
                type="button"
                defaultValue={gender.title}
                onClick={() => selectActiveGenderHandler(gender.title)}
                className={`w-full cursor-pointer rounded-lg border bg-custom-gray-100 py-3 text-center text-base transition-all dark:bg-custom-black-500 ${
                  gender.isActive
                    ? "border-black text-black dark:border-white dark:text-white"
                    : "border-transparent text-custom-gray-700 hover:bg-custom-gray-300 dark:hover:bg-custom-black-300"
                }`}
              />
            ))}
          </div>
        </div>
        <InputItem
          id="signature"
          title="Signature"
          type="text"
          placeholder="Signature"
        />
      </div>
    </form>
  );
}

export default SettingsPageContent;
