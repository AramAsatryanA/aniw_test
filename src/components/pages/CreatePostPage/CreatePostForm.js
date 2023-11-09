"use client";

import InputItem from "@/components/UI/CustomElements/InputItem";
import SelectItem from "@/components/UI/CustomElements/SelectItem";
import CreateItemFormButtons from "@/components/UI/CreateItem-Buttons/CreateItemFormButtons";

function CreatePostForm() {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="mb-6 flex flex-col gap-6 border-y border-custom-gray-300 py-6 dark:border-custom-black-300">
        <InputItem id="title" title="Title" type="text" placeholder="Title" />
        <InputItem
          id="descriptions"
          title="Descriptions"
          type="text"
          placeholder="Descriptions"
        />
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          <label htmlFor="images" className="text-sm lg:pt-6">
            Images
          </label>
          <input
            type="file"
            multiple
            id="images"
            className="w-full rounded-lg border border-custom-gray-500 bg-white px-5 py-3 placeholder:text-base dark:border-custom-gray-700 dark:bg-custom-black-500 lg:w-[492px]"
          />
        </div>
        <SelectItem title="Categories" placeholder="Categories" />
        <SelectItem title="Tags" placeholder="Add tags" />
        <InputItem
          id="redirect"
          title="Redirect"
          type="text"
          placeholder="Redirect"
        />
      </div>
      <CreateItemFormButtons />
    </form>
  );
}

export default CreatePostForm;
