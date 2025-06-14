import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image'
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import NotificationsLayer from "@/Components/Notifications";

export const metadata: Metadata = {
  title: { default: 'Elevon Studios', template: '%s | Elevon Studios' },
  description: "Elevating the next generation of Metaverse experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon favicon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="canonical" href="https://www.elevon.gg" />
      </head>
      <body
        className="antialiased bg-gradient-to-br from-[#0a0a23] to-[#161636] dark:bg-gradient-to-br dark:from-[#0a0a23] dark:to-[#161636]"
      >
        <Analytics />
        <NotificationsLayer />
        <nav className="w-[calc(100%-1rem)] py-2 border border-t-0 rounded-xl border-white/5 bg-faint dark:bg-faint shadow-xl flex mx-2 fixed top-2 left-0 backdrop-blur-3xl">
          <Link href={"/"} className="flex items-center">
            <Image src={"/elevon.svg"} width={100} height={100} quality={100} alt="elevon logo" className="size-8 my-auto ml-2" />
            <span className="text-xl my-auto ml-2 select-none">Elevon</span>
          </Link>
          <div className="ml-auto my-auto mr-2 flex gap-2 items-center">
            <Link href={"#contact"} className="button">Partner With Us</Link>
          </div>
        </nav>
        {children}
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-between bg-gray-950 dark:bg-gray-950 p-4">
          <span className="text-gray-500">© 2025 Elevon. All rights reserved.</span>
          <div className="flex items-center gap-4">

          </div>
        </footer>
      </body>
    </html>
  );
}
