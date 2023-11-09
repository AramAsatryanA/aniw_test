"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

import ItemHeadingPart from "@/components/UI/ItemCustomParts/ItemHeadingPart";
import ItemCategoriesPart from "@/components/UI/ItemCustomParts/ItemCategoriesPart";
import ItemLikesPart from "@/components/UI/ItemCustomParts/ItemLikesPart";
import ItemViewsPart from "@/components/UI/ItemCustomParts/ItemViewsPart";
import CommentItemLink from "UI/CommentItem-Link/CommentItemLink";
import ItemSharePart from "@/components/UI/ItemCustomParts/ItemSharePart";

function PostsListItem({ postItem }) {
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
      <Link
        href={`/posts/${id}`}
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
            priority
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
        <CommentItemLink
          theme={theme}
          commentsNumber={commentsNumber}
          pathName={`/posts/${id}#addComment`}
        />
        <ItemSharePart />
      </div>
    </div>
  );
}

export default PostsListItem;
