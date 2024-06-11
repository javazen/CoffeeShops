import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Coffee and more",
  description: "A useful resource for coffee enthusiasts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
