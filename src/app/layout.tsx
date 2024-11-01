import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Eventure",
  description: "all about events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Product Sans, sans-serif', fontWeight: 400 }}
      >
         <SidebarProvider> {/* Wrap the entire layout */}
          {children}
        </SidebarProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
