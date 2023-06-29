'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
const inter = Roboto({ weight: ["300","400", "500", "900"], subsets: ["latin"] });

export const metadata = {
  title: "Lama dev",
  description: "made by pouriyams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <div className="container-m ">
          <Navbar />
          {children}
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
