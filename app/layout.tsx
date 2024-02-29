import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/top-bar/TopBar";
import Navigation from "@/components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "350px 1fr",
            gridTemplateRows: "65px 1fr",
            height: "100vh",
            gap: "1em",
          }}
        >
          <Navigation />
          <TopBar />
          <div style={{ gridColumn: "2/-2", padding: "1em" }}> {children}</div>
        </div>
      </body>
    </html>
  );
}
