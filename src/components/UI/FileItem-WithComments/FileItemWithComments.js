"use client";

import { useSelector } from "react-redux";

import FileItemContent from "./FileItemContent";
import ItemComments from "@/components/UI/ItemComments/ItemComments";

function FileItemWithComments({ fileId }) {
  const files = useSelector((state) => state.files);
  const fileItem = files.filter((file) => file.id === fileId)[0];

  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <FileItemContent fileItem={fileItem} />
      <ItemComments commentsList={fileItem.commentsList} itemType="file" />
    </div>
  );
}

export default FileItemWithComments;
