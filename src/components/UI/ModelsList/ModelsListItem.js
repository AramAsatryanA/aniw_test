"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

import ItemHeadingPart from "@/components/UI/ItemCustomParts/ItemHeadingPart";
import ItemCategoriesPart from "@/components/UI/ItemCustomParts/ItemCategoriesPart";
import ItemLikesPart from "@/components/UI/ItemCustomParts/ItemLikesPart";
import ItemDownloadsPart from "@/components/UI/ItemCustomParts/ItemDownloadsPart";
import CommentItemLink from "UI/CommentItem-Link/CommentItemLink";
import ItemSharePart from "@/components/UI/ItemCustomParts/ItemSharePart";

function ModelsListItem({ modelItem }) {
  const { theme } = useTheme();

  const {
    id,
    avatar,
    author,
    image,
    isPremium,
    title,
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
        itemType="model"
      />
      <div className="relative inline-block w-full">
        <Image
          src={image}
          alt="File Image"
          width={1500}
          height={900}
          className="rounded-lg"
        />
        {isPremium && (
          <div className="absolute right-3 top-3 inline-block rounded-lg bg-custom-gold px-2 py-1 text-sm text-white">
            Premium
          </div>
        )}
      </div>
      <Link
        href={`/3d-models/${id}`}
        className="mb-1 block text-base font-semibold transition-all hover:opacity-90"
      >
        {title}
      </Link>
      <div className="mb-2">
        <ItemCategoriesPart categories={categories} />
      </div>
      <div className="flex items-center gap-3">
        <ItemLikesPart theme={theme} likesNumber={likesNumber} />
        <ItemDownloadsPart theme={theme} downloadsNumber={downloadsNumber} />
        <CommentItemLink
          theme={theme}
          commentsNumber={commentsNumber}
          pathName={`/3d-models/${id}#addComment`}
        />
        <ItemSharePart />
      </div>
    </div>
  );
}

export default ModelsListItem;
