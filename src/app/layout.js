import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { Figtree } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const FigtreeFont = Figtree({
  subsets: ["latin"],
});

const siteUrl = "https://promptaiapp.vercel.app";

const siteDescription =
  "PromptAI is a curated library of production-ready AI prompts for ChatGPT, Claude, Midjourney and other tools. Explore, copy and share prompts, or publish your own as a creator.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PromptAI — Curated AI Prompt Library",
    template: "%s | PromptAI",
  },
  description: siteDescription,
  applicationName: "PromptAI",
  keywords: [
    "AI prompts",
    "prompt library",
    "ChatGPT prompts",
    "Claude prompts",
    "Midjourney prompts",
    "prompt engineering",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "PromptAI",
    url: siteUrl,
    title: "PromptAI — Curated AI Prompt Library",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptAI — Curated AI Prompt Library",
    description: siteDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${FigtreeFont.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
            <Toaster />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}