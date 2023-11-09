"use client";

import InputItem from "@/components/UI/CustomElements/InputItem";

function SettingsSecurityPageContent() {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="flex flex-col gap-6 border-t border-custom-gray-300 pt-6 dark:border-custom-black-300">
        <InputItem
          id="phone"
          title="Phone"
          type="tel"
          placeholder="+7 999 888 77 66"
        />
        <InputItem
          id="email"
          title="Email"
          type="email"
          placeholder="test@gmail.com"
        />
        <InputItem
          id="username"
          title="Username"
          type="text"
          placeholder="Username"
        />
        <InputItem
          id="password"
          title="Password"
          type="password"
          placeholder="*********"
        />
      </div>
    </form>
  );
}

export default SettingsSecurityPageContent;
