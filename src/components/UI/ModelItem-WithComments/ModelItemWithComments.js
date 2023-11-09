"use client";

import { useSelector } from "react-redux";

import ModelItemContent from "./ModelItemContent";
import ItemComments from "@/components/UI/ItemComments/ItemComments";

function ModelItemWithComments({ modelId }) {
  const { models } = useSelector((state) => state.models);
  const modelItem = models.filter((model) => model.id === modelId)[0];

  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <ModelItemContent modelItem={modelItem} />
      <ItemComments commentsList={modelItem.commentsList} itemType="model" />
    </div>
  );
}

export default ModelItemWithComments;
