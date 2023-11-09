"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

import InputItem from "@/components/UI/CustomElements/InputItem";
import SelectItem from "@/components/UI/CustomElements/SelectItem";
import CreateItemFormButtons from "@/components/UI/CreateItem-Buttons/CreateItemFormButtons";

const currencySelectOptions = ["Item 1", "Item 2", "Item 3", "Item 4"];

function CreateFileForm() {
  const { theme } = useTheme();
  const [showCurrencySelectOptions, setShowCurrencySelectOptions] =
    useState(false);
  const [selectedCurrencyOption, setSelectedCurrencyOption] =
    useState("Currency");

  function selectCurrencyOptionHandler(option) {
    setSelectedCurrencyOption(option);
    setShowCurrencySelectOptions(false);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="mb-6 flex flex-col gap-6 border-y border-custom-gray-300 py-6 dark:border-custom-black-300">
        <InputItem id="title" title="Title" type="text" placeholder="Title" />
        <InputItem
          id="descriptions"
          title="Descriptions"
          type="text"
          placeholder="Descriptions"
        />
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <label htmlFor="images" className="text-sm lg:pt-6">
            Images
          </label>
          <input
            type="file"
            multiple
            id="images"
            className="w-full rounded-lg border border-custom-gray-500 bg-white px-5 py-3 placeholder:text-base dark:border-custom-gray-700 dark:bg-custom-black-500 lg:w-[492px]"
          />
        </div>
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <label htmlFor="images" className="text-sm lg:pt-6">
            Files
          </label>
          <input
            type="file"
            multiple
            id="images"
            className="w-full rounded-lg border border-custom-gray-500 bg-white px-5 py-3 placeholder:text-base dark:border-custom-gray-700 dark:bg-custom-black-500 lg:w-[492px]"
          />
        </div>
        <SelectItem title="File type" placeholder="File type" />
        <SelectItem title="Tools" placeholder="Tools" />
        <SelectItem title="Categories" placeholder="Categories" />
        <InputItem id="link" title="Link" type="text" placeholder="Link" />
        <SelectItem title="Tags" placeholder="Add tags" />
        <SelectItem title="Price" placeholder="Premium" />
        <div className="-mt-2 ml-auto flex w-full rounded-lg lg:mt-0 lg:w-[492px]">
          <input
            type="number"
            placeholder="0.00"
            min={0}
            className="input-type flex-1 self-start"
          />
          <div className="flex flex-[3] flex-col gap-1">
            <button
              role="combobox"
              aria-label="select button"
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-controls="select-dropdown"
              className="select-heading-button-type"
              onClick={() =>
                setShowCurrencySelectOptions((prevState) => !prevState)
              }
            >
              <span className="text-base text-custom-gray-700">
                {selectedCurrencyOption}
              </span>
              <span className="inline-block h-6 w-6">
                <Image
                  src={
                    showCurrencySelectOptions
                      ? theme === "dark"
                        ? "/arrow_close-dark.svg"
                        : "/arrow_close-light.svg"
                      : theme === "dark"
                      ? "/arrow_open-dark.svg"
                      : "/arrow_open-light.svg"
                  }
                  alt="Arrow Icon"
                  width={50}
                  height={50}
                />
              </span>
            </button>
            {showCurrencySelectOptions && (
              <ul
                className="select-options-card-type"
                role="listbox"
                id="select-dropdown"
              >
                {currencySelectOptions.map((option) => (
                  <li
                    key={option}
                    className="select-option-item-type"
                    onClick={() => selectCurrencyOptionHandler(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <CreateItemFormButtons />
    </form>
  );
}

export default CreateFileForm;
