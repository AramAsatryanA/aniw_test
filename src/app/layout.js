import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/theme/ThemeProvider";
import StoreProvider from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aniw App",
  description: "Aniw App",
  keywords: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <StoreProvider>
            <div className="wrapper">{children}</div>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
