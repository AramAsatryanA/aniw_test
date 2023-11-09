import Header from "@/components/UI/Header/Header";
import PageNavigation from "@/components/UI/Page-Navigation/PageNavigation";

export const metadata = {
  title: "Aniw App",
  description: "Aniw App",
  keywords: [],
};

const pageNavigationItems = [
  {
    defaultPath: "/notifications",
    path: "/notifications/activity",
    title: "Activity",
  },
  { path: "/notifications/messages", title: "Messages" },
];

function NotificationsPageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-custom-gray-100 dark:bg-custom-black-500">
        <div className="container px-1 pb-10 pt-6 lg:px-0">
          <section className="m-auto flex w-full max-w-[712px] flex-col gap-6">
            <h1 className="text-2xl font-semibold">Notifications</h1>
            <PageNavigation navigationItems={pageNavigationItems} />
            {children}
          </section>
        </div>
      </main>
    </>
  );
}

export default NotificationsPageLayout;
