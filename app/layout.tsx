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
      <body className="bg-[#0b0e14] text-gray-100 antialiased">
        <div className="max-w-5xl mx-auto px-4 py-10">{children}</div>
      </body>
    </html>
  );
}
