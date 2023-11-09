import Image from "next/image";

function ItemLikesPart({ theme, likesNumber }) {
  return (
    <div className="flex items-center gap-1 rounded-3xl bg-custom-gray-100 dark:bg-custom-black-300">
      <button className="button-card-type h-8 w-8 rounded-full border border-transparent p-1 active:border-black dark:active:border-white">
        <Image
          src={theme === "dark" ? "/arrow_up-dark.svg" : "/arrow_up-light.svg"}
          alt="Arrow Up Icon"
          width={50}
          height={50}
        />
      </button>
      <span className="text-sm">{likesNumber}</span>
      <button className="button-card-type h-8 w-8 rounded-full border border-transparent p-1 active:border-black dark:active:border-white">
        <Image
          src={
            theme === "dark" ? "/arrow_down-dark.svg" : "/arrow_down-light.svg"
          }
          alt="Arrow Down Icon"
          width={50}
          height={50}
        />
      </button>
    </div>
  );
}

export default ItemLikesPart;
