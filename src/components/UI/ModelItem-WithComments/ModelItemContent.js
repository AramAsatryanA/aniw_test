"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import ItemHeadingPart from "@/components/UI/ItemCustomParts/ItemHeadingPart";
import ItemAdditionalPartWithButton from "@/components/UI/ItemCustomParts/ItemAdditionalPartWithButton";
import ItemCategoriesPart from "@/components/UI/ItemCustomParts/ItemCategoriesPart";
import ItemLikesPart from "@/components/UI/ItemCustomParts/ItemLikesPart";
import ItemDownloadsPart from "UI/ItemCustomParts/ItemDownloadsPart";
import ItemCommentsPart from "@/components/UI/ItemCustomParts/ItemCommentsPart";
import ItemSharePart from "@/components/UI/ItemCustomParts/ItemSharePart";

function ModelItemContent({ modelItem }) {
  const { theme } = useTheme();

  const {
    avatar,
    author,
    date,
    time,
    title,
    image,
    text,
    tools,
    fileType,
    size,
    categories,
    likesNumber,
    downloadsNumber,
    commentsNumber,
  } = modelItem;

  return (
    <div className="item-card-type flex flex-col gap-3">
      <ItemHeadingPart
        theme={theme}
        avatar={avatar}
        author={author}
        date={date}
        time={time}
        itemType="model"
      />
      {image && (
        <div className="inline-block w-full">
          <Image
            src={image}
            alt="Post Image"
            width={1500}
            height={900}
            className="rounded-lg"
          />
        </div>
      )}
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mb-1 text-sm">{text}</p>
      <div className="my-3">
        <ItemAdditionalPartWithButton
          tools={tools}
          fileType={fileType}
          size={size}
          btnText="Buy $45"
        />
      </div>
      <div className="mb-2">
        <ItemCategoriesPart categories={categories} />
      </div>
      <div className="flex items-center gap-3">
        <ItemLikesPart theme={theme} likesNumber={likesNumber} />
        <ItemDownloadsPart theme={theme} downloadsNumber={downloadsNumber} />
        <ItemCommentsPart theme={theme} commentsNumber={commentsNumber} />
        <ItemSharePart />
      </div>
    </div>
  );
}

export default ModelItemContent;
