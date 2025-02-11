"use client"

import { cn } from "@/libs/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  ComponentIcon as Components,
  Settings,
  FileText,
  BarChart3,
  Table,
  Rocket,
} from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    isActive: true,
  },
  {
    title: "Components",
    icon: Components,
    href: "/components",
  },
  {
    title: "Utilities",
    icon: Settings,
    href: "/utilities",
  },
  {
    header: "ADDONS",
    items: [
      {
        title: "Pages",
        icon: FileText,
        href: "/pages",
      },
      {
        title: "Charts",
        icon: BarChart3,
        href: "/charts",
      },
      {
        title: "Tables",
        icon: Table,
        href: "/tables",
      },
    ],
  },
]

export function Sidebar() {
  return (
    <SidebarComponent className="border-r bg-[#4E73DF]">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2 px-2">
          <div className="rounded-full bg-white p-1">
            <div className="h-6 w-6 rounded-full bg-[#4E73DF]" />
          </div>
          <span className="text-xl font-bold">안전지도사 관리</span>
          {/* <sup className="text-xs">2</sup> */}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item, index) =>
            item.header ? (
              <div key={index} className="px-6 py-3 text-xs font-bold text-white/60">
                {item.header}
              </div>
            ) : (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className={cn("hover:bg-white/10", item.isActive && "bg-white/10")}>
                  <a href={item.href}>
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ),
          )}
        </SidebarMenu>
      </SidebarContent>
    </SidebarComponent>
  )
}

