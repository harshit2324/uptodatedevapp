import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Toaster } from "@/components/ui/toaster";

const workSans = localFont({
  src: [
    {
      path: '/fonts/worksans-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '/fonts/worksans-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '/fonts/worksans-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '/fonts/worksans-semibold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '/fonts/worksans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '/fonts/worksans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '/fonts/worksans-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '/fonts/worksans-Thin.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '/fonts/worksans-ExtraLight.ttf',
      weight: '100',
      style: 'normal'
    },
    
  ],
  variable: '--font-work-sans'
})

export const metadata: Metadata = {
  title: "Uptodatedevs",
  description: "Drop a thing what happened in Devloop World today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workSans.variable}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
