import type { Metadata } from "next";
import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut
} from '@clerk/nextjs'
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "InterVue - The Smarter Way to Interview.",
  description: "InterVue: A modern video interview platform offering seamless scheduling, HD calls, and AI insights to simplify hiring and connect top talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

            <SignedIn>
        <div className="min-h-screen">
          <Navbar />
          <main className="px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
        </SignedIn>

        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
    </ConvexClerkProvider>
  );
}
