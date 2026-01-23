import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Persona - Talk With the Minds Who Shaped History",
  description: "Talk With the Minds Who Shaped History Your Persona uses cutting-edge AI to bring famous figures to life, allowing for conversations and insights like never before.",
  keywords: [
    "Your Persona",
    "AI website",
    "AI powered persona",
    "chat with elon musk",
    "persona website",
    "OpenSource AI website",
    "Your Persona - chat with",
    
  ],
  openGraph: {
    title: "Your Persona– Talk With the Minds Who Shaped History",
    description:
      "Talk With the Minds Who Shaped History Your Persona uses cutting-edge AI to bring famous figures to life, allowing for conversations and insights like never before",
    
    siteName: "Your Persona",
   
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Persona – Talk With the Minds Who Shaped History",
    description:
      "Talk With the Minds Who Shaped History Your Persona uses cutting-edge AI to bring famous figures to life, allowing for conversations and insights like never before",
    
  },
  
};
  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
