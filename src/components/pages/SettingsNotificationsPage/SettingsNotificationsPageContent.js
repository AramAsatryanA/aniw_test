"use client";

import SettingsNotificationsPageItem from "./SettingsNotificationsPageItem";

const messagesNotificationsSettingsItems = [
  { id: "email", title: "Email", defaultChecked: false },
  { id: "push", title: "Push", defaultChecked: true },
];

const activityNotificationsSettingsItems = [
  { id: "community-alerts", title: "Community alerts", defaultChecked: true },
  {
    id: "comments-on-your-posts",
    title: "Comments on your posts",
    defaultChecked: true,
  },
  {
    id: "upvotes-on-your-posts",
    title: "Upvotes on your posts",
    defaultChecked: false,
  },
  {
    id: "upvotes-on-your-comments",
    title: "Upvotes on your comments",
    defaultChecked: false,
  },
  {
    id: "replies-on-your-comments",
    title: "Replies on your comments",
    defaultChecked: false,
  },
  {
    id: "downloads-on-your-products",
    title: "Downloads on your products",
    defaultChecked: true,
  },
  {
    id: "purchase-on-your-products",
    title: "Purchase on your products",
    defaultChecked: false,
  },
];

function SettingsNotificationsPageContent() {
  return (
    <div className="flex w-full flex-col gap-6 border-t border-custom-gray-300 pt-6 dark:border-custom-black-300">
      <div className="mb-4">
        <h3 className="mb-8 text-base font-semibold">Messages</h3>
        <div className="flex max-w-[270px] flex-col gap-10">
          {messagesNotificationsSettingsItems.map((item) => (
            <SettingsNotificationsPageItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-custom-gray-300 dark:bg-custom-black-300" />
      <div>
        <div>
          <h3 className="mb-8 text-base font-semibold">Activity</h3>
          <div className="flex max-w-[270px] flex-col gap-10">
            {activityNotificationsSettingsItems.map((item) => (
              <SettingsNotificationsPageItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsNotificationsPageContent;
