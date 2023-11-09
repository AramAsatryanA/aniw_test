"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

import ItemHeadingPart from "@/components/UI/ItemCustomParts/ItemHeadingPart";
import ItemLikesPart from "@/components/UI/ItemCustomParts/ItemLikesPart";
import ItemCommentsPart from "@/components/UI/ItemCustomParts/ItemCommentsPart";
import ItemReplyPart from "../ItemCustomParts/ItemReplyPart";
import ItemSharePart from "@/components/UI/ItemCustomParts/ItemSharePart";
import CommentItemReplies from "./CommentItemReplies/CommentItemReplies";

function CommentsListItem({ commentItem, itemType }) {
  const { theme } = useTheme();
  const [showCommentReplies, setShowCommentReplies] = useState(false);

  const {
    avatar,
    author,
    date,
    time,
    comment,
    likesNumber,
    repliesNumber,
    replies,
  } = commentItem;

  return (
    <div className="flex flex-col gap-6 border-t border-custom-gray-300 pt-6 dark:border-custom-black-300">
      <div className="flex flex-col gap-3">
        <ItemHeadingPart
          theme={theme}
          avatar={avatar}
          author={author}
          date={date}
          time={time}
          itemType={itemType}
        />
        <p className="mb-1 text-sm">{comment}</p>
        <div className="flex items-center gap-3">
          <ItemLikesPart theme={theme} likesNumber={likesNumber} />
          <ItemCommentsPart theme={theme} commentsNumber={repliesNumber} />
          <ItemReplyPart
            onToggleCommentRepliesVisibility={() =>
              setShowCommentReplies((prevState) => !prevState)
            }
          />
          <ItemSharePart />
        </div>
      </div>
      {showCommentReplies && (
        <CommentItemReplies
          repliesList={replies}
          onCloseCommentReplies={() =>
            setShowCommentReplies((prevState) => !prevState)
          }
        />
      )}
    </div>
  );
}

export default CommentsListItem;
