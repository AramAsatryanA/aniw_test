"use client";

import { useTheme } from "next-themes";

import ItemHeadingPart from "@/components/UI/ItemCustomParts/ItemHeadingPart";
import ItemLikesPart from "@/components/UI/ItemCustomParts/ItemLikesPart";
import ItemSharePart from "@/components/UI/ItemCustomParts/ItemSharePart";

function RepliesListItem({ replyItem }) {
  const { theme } = useTheme();

  const { avatar, author, date, time, reply, likesNumber } = replyItem;

  return (
    <div className="flex flex-col gap-3 border-t border-custom-gray-300 pt-6 dark:border-custom-black-300">
      <ItemHeadingPart
        theme={theme}
        avatar={avatar}
        author={author}
        date={date}
        time={time}
      />
      <p className="mb-1 text-sm">{reply}</p>
      <div className="flex items-center gap-3">
        <ItemLikesPart theme={theme} likesNumber={likesNumber} />
        <ItemSharePart />
      </div>
    </div>
  );
}

export default RepliesListItem;
