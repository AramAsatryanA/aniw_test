import HeaderAuthentication from "@/components/UI/Header-Authentication/HeaderAuthentication";

function AuthenticationPagesLayout({ children }) {
  return (
    <>
      <HeaderAuthentication />
      <main className="flex justify-center bg-custom-gray-100 dark:bg-custom-black-500">
        <section className="mt-6 px-1 lg:mt-[60px] lg:px-0">{children}</section>
      </main>
    </>
  );
}

export default AuthenticationPagesLayout;
