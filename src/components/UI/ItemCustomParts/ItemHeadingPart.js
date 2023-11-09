import Image from "next/image";

import { formatDate } from "@/utils/formatDate";
import PostItemMenuBlock from "UI/PostItemMenu-Block/PostItemMenuBlock";
import FileItemMenuBlock from "../FileItemMenu-Block/FileItemMenuBlock";
import ModelItemMenuBlock from "../ModelItemMenu-Block/ModelItemMenuBlock";

function ItemHeadingPart({ theme, avatar, author, date, time, itemType }) {
  const formattedDate = formatDate(date);

  return (
    <div className="flex items-center gap-3 whitespace-nowrap text-sm">
      <span className="inline-block h-6 w-6">
        <Image src={avatar} alt="User Avatar" width={250} height={250} />
      </span>
      <div className="mr-auto lg:flex lg:items-center lg:gap-2">
        <p>{author}</p>
        {date && time && (
          <p className="text-custom-gray-700">
            {formattedDate} {time}
          </p>
        )}
      </div>
      {itemType === "post" ? (
        <PostItemMenuBlock theme={theme} />
      ) : itemType === "file" ? (
        <FileItemMenuBlock theme={theme} />
      ) : itemType === "model" ? (
        <ModelItemMenuBlock theme={theme} />
      ) : (
        ""
      )}
    </div>
  );
}

export default ItemHeadingPart;
