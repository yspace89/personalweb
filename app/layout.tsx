import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Yahya",
  description:
    "Data-led • Business-oriented • Technology-enabled — building impactful digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0e14] text-gray-100 antialiased selection:bg-cyan-300/30 selection:text-white">
        <div className="min-h-screen max-w-6xl mx-auto px-5 md:px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
