"use client";

import { useSelector } from "react-redux";

import PostItemContent from "./PostItemContent";
import ItemComments from "@/components/UI/ItemComments/ItemComments";

function PostItemWithComments({ postId }) {
  const posts = useSelector((state) => state.posts);
  const postItem = posts.filter((post) => post.id === postId)[0];

  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <PostItemContent postItem={postItem} />
      <ItemComments commentsList={postItem.commentsList} itemType="post" />
    </div>
  );
}

export default PostItemWithComments;
