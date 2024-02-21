import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Loading } from "@/components/auth/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Miro",
    template: "%s | Miro",
  },
  description:
    "Discover miro clone, a powerful collaborative platform for visual brainstorming, ideation, and project management. Seamlessly create, organize, and collaborate on virtual boards with an intuitive interface. Foster creativity, streamline workflows, and drive productivity with robust features including real-time collaboration, customizable templates, and extensive integrations. Empower your team to unleash their creativity and bring ideas to life with miro clone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fbf7ee]`}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
