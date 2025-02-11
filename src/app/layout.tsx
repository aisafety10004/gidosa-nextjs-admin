import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "안전지도사 관리자 페이지",
  description: "Modern admin dashboard template",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen w-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Topbar />
              <main className="flex-1 overflow-auto bg-slate-50 p-4">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}