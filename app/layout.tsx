import './globals.css'

export const metadata = {
  title: 'Personal Website',
  description: 'Product Leader Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F14] text-white">
        {children}
      </body>
    </html>
  )
}
