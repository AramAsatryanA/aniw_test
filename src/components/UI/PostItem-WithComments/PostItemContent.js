"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import ItemHeadingPart from "UI/ItemCustomParts/ItemHeadingPart";
import ItemCategoriesPart from "UI/ItemCustomParts/ItemCategoriesPart";
import ItemLikesPart from "UI/ItemCustomParts/ItemLikesPart";
import ItemViewsPart from "UI/ItemCustomParts/ItemViewsPart";
import ItemCommentsPart from "UI/ItemCustomParts/ItemCommentsPart";
import ItemSharePart from "UI/ItemCustomParts/ItemSharePart";

function PostItemContent({ postItem }) {
  const { theme } = useTheme();

  const {
    id,
    avatar,
    author,
    date,
    time,
    title,
    image,
    text,
    categories,
    likesNumber,
    viewsNumber,
    commentsNumber,
  } = postItem;

  return (
    <div className="item-card-type flex flex-col gap-3">
      <ItemHeadingPart
        theme={theme}
        avatar={avatar}
        author={author}
        date={date}
        time={time}
        itemType="post"
      />
      <h3 className="text-base font-semibold">{title}</h3>
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
        <ItemViewsPart theme={theme} viewsNumber={viewsNumber} />
        <ItemCommentsPart theme={theme} commentsNumber={commentsNumber} />
        <ItemSharePart />
      </div>
    </div>
  );
}

export default PostItemContent;
