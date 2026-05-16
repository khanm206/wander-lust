import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Wanderlast",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${josefin.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-480 mx-auto ">
        <section className="sticky top-0 z-50">
          <NavBar />
        </section>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
