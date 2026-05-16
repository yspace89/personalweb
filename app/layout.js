import "./globals.css";

export const metadata = {
  title: "Yahya Ubaidillah — Senior Product Manager AI Native",
  description:
    "Senior Product Manager dengan pengalaman 4+ tahun di B2B & B2C. Spesialis Sales Tools, ERP, CRM, dan Internal Business Systems. Tersedia untuk freelance, remote full-time, dan co-build partnership. AI-native: N8N automation, vibe coding, dan modern AI tools.",
  keywords:
    "Senior Product Manager, AI Native PM, Head of Product, Freelance PM, Business Strategy, N8N Automation, Vibe Coding, Sales Tools, ERP, CRM, Yahya Ubaidillah, Remote Product Manager",
  authors: [{ name: "Yahya Ubaidillah" }],
  openGraph: {
    title: "Yahya Ubaidillah — Senior Product Manager AI Native",
    description:
      "I turn business problems into working products — faster, with AI. Available for freelance consulting, co-build partnerships, and remote full-time opportunities.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
