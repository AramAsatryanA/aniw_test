import Header from "@/components/UI/Header/Header";
import PageNavigation from "@/components/UI/Page-Navigation/PageNavigation";

export const metadata = {
  title: "Aniw App",
  description: "Aniw App",
  keywords: [],
};

const pageNavigationItems = [
  {
    defaultPath: "/settings",
    path: "/settings/profile",
    title: "Profile",
  },
  { path: "/settings/location", title: "Location" },
  { path: "/settings/security", title: "Security" },
  { path: "/settings/notifications", title: "Notifications" },
];

function SettingsPageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="border-t border-custom-gray-300 bg-white dark:border-custom-black-300 dark:bg-custom-black-100">
        <div className="container px-5 pb-10 pt-6 lg:px-0">
          <section className="m-auto flex w-full max-w-[712px] flex-col gap-6">
            <h1 className="text-2xl font-semibold">Settings</h1>
            <PageNavigation
              navigationItems={pageNavigationItems}
              flexWrap={true}
            />
            {children}
          </section>
        </div>
      </main>
    </>
  );
}

export default SettingsPageLayout;
