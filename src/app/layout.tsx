import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Priyanka Pillai — Portfolio",
  description: "Software Engineer • Next.js • TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          
          </ThemeProvider>
      </body>
    </html>
  );
}
