import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nightcodelabs.com"), // Change when your final domain is ready

  title: {
    default: "NightCode Labs",
    template: "%s | NightCode Labs",
  },

  description:
    "NightCode Labs engineers intelligent software that helps people build extraordinary things.",

  applicationName: "NightCode Labs",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NightCode Labs",
    description:
      "NightCode Labs engineers intelligent software that helps people build extraordinary things.",
    url: "https://nightcodelabs.com",
    siteName: "NightCode Labs",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NightCode Labs",
    description:
      "NightCode Labs engineers intelligent software that helps people build extraordinary things.",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
