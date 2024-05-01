import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/top-bar/TopBar";
import Navigation from "@/components/navigation/Navigation";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "FitSuivi - Tableau de bord",
  description: "Tableau de bord de FitSuivi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <div id="fullContainer">
          <Navigation />
          <TopBar />
          <div
            className=" max-[983px]:block"
            style={{ gridColumn: "2/-2", padding: "1em" }}
          >
            {" "}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
