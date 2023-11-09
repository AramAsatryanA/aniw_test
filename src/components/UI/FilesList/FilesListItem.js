"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

import ItemHeadingPart from "UI/ItemCustomParts/ItemHeadingPart";
import ItemCategoriesPart from "UI/ItemCustomParts/ItemCategoriesPart";
import ItemLikesPart from "UI/ItemCustomParts/ItemLikesPart";
import ItemDownloadsPart from "UI/ItemCustomParts/ItemDownloadsPart";
import CommentItemLink from "UI/CommentItem-Link/CommentItemLink";
import ItemSharePart from "UI/ItemCustomParts/ItemSharePart";

function FilesListItem({ fileItem }) {
  const { theme } = useTheme();

  const {
    id,
    avatar,
    author,
    date,
    time,
    isPremium,
    title,
    image,
    text,
    categories,
    likesNumber,
    downloadsNumber,
    commentsNumber,
  } = fileItem;

  return (
    <div className="item-card-type flex flex-col gap-3">
      <ItemHeadingPart
        theme={theme}
        avatar={avatar}
        author={author}
        date={date}
        time={time}
        itemType="file"
      />
      {isPremium && (
        <div className="inline-block self-start rounded-lg bg-custom-gold px-2 py-1 text-sm text-white">
          Premium
        </div>
      )}
      <Link
        href={`/files/${id}`}
        className="block text-base font-semibold transition-all hover:opacity-90"
      >
        {title}
      </Link>
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
      <p className="mb-1 text-sm">{text}</p>
      <div className="mb-2">
        <ItemCategoriesPart categories={categories} />
      </div>
      <div className="flex items-center gap-3">
        <ItemLikesPart theme={theme} likesNumber={likesNumber} />
        <ItemDownloadsPart theme={theme} downloadsNumber={downloadsNumber} />
        <CommentItemLink
          theme={theme}
          commentsNumber={commentsNumber}
          pathName={`/files/${id}#addComment`}
        />
        <ItemSharePart />
      </div>
    </div>
  );
}

export default FilesListItem;
