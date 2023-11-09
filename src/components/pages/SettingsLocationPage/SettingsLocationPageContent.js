"use client";

import SelectItem from "@/components/UI/CustomElements/SelectItem";

function SettingsLocationPageContent() {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-col gap-6 border-t border-custom-gray-300 pt-6 dark:border-custom-black-300">
        <SelectItem title="Language" placeholder="English" />
        <SelectItem title="Country" placeholder="Russia" />
        <SelectItem title="State" placeholder="Moscow" />
        <SelectItem title="City" placeholder="Moscow" />
      </div>
    </form>
  );
}

export default SettingsLocationPageContent;
