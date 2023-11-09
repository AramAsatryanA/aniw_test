"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./MobileMenu";
import NotificationsBlock from "./Notifications-Block/NotificationsBlock";
import UserBlock from "./User-Block/UserBlock";

function Header() {
  const { theme } = useTheme();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  return (
    <header className="h-[72px] bg-white dark:bg-custom-black-100">
      <div className="container px-5 py-4 lg:px-10 lg:py-3">
        <nav className="flex items-center justify-between gap-3 lg:gap-11">
          <div className="flex items-center gap-3 lg:w-[200px] xl:w-[280px]">
            <button
              className="h-6 w-6 lg:hidden"
              onClick={() => setShowMobileMenu(true)}
            >
              <Image
                src={theme === "dark" ? "/menu-dark.svg" : "/menu-light.svg"}
                alt="Menu Icon"
                width={50}
                height={50}
              />
            </button>
            <Link href="/" className="inline-block h-10 w-10">
              <Image src="/logo.png" alt="Page Logo" width={300} height={300} />
            </Link>
            <Link
              href="/"
              className="hidden text-base font-medium lg:inline-block"
            >
              Aniw
            </Link>
          </div>
          <div className="relative hidden flex-1 lg:block">
            <span className="absolute left-4 top-3 inline-block h-6 w-6">
              <Image
                src={
                  theme === "dark" ? "/search-dark.svg" : "/search-light.svg"
                }
                alt="Search Icon"
                width={50}
                height={50}
              />
            </span>
            <input
              type="search"
              placeholder="Search"
              className="search-input-type bg-custom-gray-100 dark:bg-custom-black-500 dark:focus:bg-custom-black-500"
            />
          </div>
          <div className="flex items-center justify-end gap-3 lg:w-[200px] lg:gap-4 xl:w-[280px]">
            <button className="button-card-type h-10 w-10 rounded-full p-2 lg:hidden">
              <Image
                src={
                  theme === "dark" ? "/search-dark.svg" : "/search-light.svg"
                }
                alt="Search Icon"
                width={50}
                height={50}
              />
            </button>
            <NotificationsBlock
              theme={theme}
              showNotificationsModal={showNotificationsModal}
              onCloseNotificationsModal={() => setShowNotificationsModal(false)}
              onToggleNotificationsModalVisibility={() => {
                setShowNotificationsModal((prevState) => !prevState);
                setShowUserModal(false);
              }}
            />
            <UserBlock
              theme={theme}
              showUserModal={showUserModal}
              onCloseUserModal={() => setShowUserModal(false)}
              onToggleUserModalVisibility={() => {
                setShowUserModal((prevState) => !prevState);
                setShowNotificationsModal(false);
              }}
            />
          </div>
        </nav>
        {showMobileMenu && (
          <MobileMenu
            theme={theme}
            onCloseMobileMenu={() => setShowMobileMenu(false)}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
