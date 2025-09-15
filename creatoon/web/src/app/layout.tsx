import "@/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Info } from "@/components/info"
import { Providers } from "@/components/providers"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://creatoon.vercel.app"),
  title: "Creatoon",
  creator: "Sandipan",
  keywords: ["creatoon", "sandipan"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Providers>
          <Header />
          {children}
        </Providers>
        <div className="fixed bottom-1 right-2 z-50 sm:bottom-2 sm:right-4">
          <Info />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
