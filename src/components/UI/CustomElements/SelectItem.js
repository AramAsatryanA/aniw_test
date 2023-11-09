import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

const selectOptions = ["Item 1", "Item 2", "Item 3", "Item 4"];

function SelectItem({ title, placeholder }) {
  const { theme } = useTheme();

  const [showSelectOptions, setShowSelectOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  function selectOptionHandler(option) {
    setSelectedOption(option);
    setShowSelectOptions(false);
  }

  return (
    <div className="flex flex-col justify-between gap-2 lg:flex-row">
      <div className="text-sm lg:pt-3">{title}</div>
      <div className="flex flex-col gap-1">
        <button
          role="combobox"
          aria-label="select button"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-controls="select-dropdown"
          className="select-heading-button-type lg:w-[492px]"
          onClick={() => setShowSelectOptions((prevState) => !prevState)}
        >
          <span className="text-base text-custom-gray-700">
            {selectedOption}
          </span>
          <span className="inline-block h-6 w-6">
            <Image
              src={
                showSelectOptions
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
        {showSelectOptions && (
          <ul
            className="select-options-card-type"
            role="listbox"
            id="select-dropdown"
          >
            {selectOptions.map((option) => (
              <li
                key={option}
                className="select-option-item-type"
                onClick={() => selectOptionHandler(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SelectItem;
