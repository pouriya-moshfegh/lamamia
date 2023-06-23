import "./globals.css";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Roboto({ weight: ["400", "500", "900"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container-m ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
