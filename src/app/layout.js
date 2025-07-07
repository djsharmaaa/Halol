// app/layout.js
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import { Analytics } from '@vercel/analytics/react'


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientLayout>{children}
            <Analytics />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}