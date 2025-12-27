export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0F14] text-white antialiased">
        <div className="max-w-5xl mx-auto px-6">{children}</div>
      </body>
    </html>
  );
}
