"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Image from "next/image"
import { Bell, FileText, Home, ImageIcon, MessageSquare, Search, Settings, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { PixelButton } from "@/components/ui/pixel-button"

export function AppLayout({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-vault-gray-100 text-vault-black dark:bg-vault-gray-900 dark:text-vault-white transition-colors duration-200 flex font-mono">
      {/* Sidebar */}
      <AppSidebar currentPath={pathname} />

      <div className="flex-1 w-full">
        {/* Header */}
        <header className="sticky top-0 z-10 backdrop-blur-md bg-vault-white/80 dark:bg-vault-gray-900/80 border-b-2 border-vault-black dark:border-vault-white">
          <div className="w-full px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="h-9 w-9" />
              <div className="flex items-center">
                <h1 className="text-xl font-mono font-bold tracking-wide uppercase">
                  VaultOS <span className="text-vault-gray-500 dark:text-vault-gray-400">{title}</span>
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-none">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-none">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-none">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8 rounded-none">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="rounded-none border-2 border-vault-black dark:border-vault-white">
                  US
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full px-4 py-6">{children}</main>
      </div>
    </div>
  )
}

// Sidebar Component
function AppSidebar({ currentPath }: { currentPath: string }) {
  const { theme, setTheme } = useTheme()

  // App features for the sidebar
  const features = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "File Server", icon: FileText, path: "/file-server" },
    { name: "Photo App", icon: ImageIcon, path: "/photo-app" },
    { name: "Solar Manager", icon: Zap, path: "/solar-manager" },
    { name: "Chat App", icon: MessageSquare, path: "/chat-app" },
  ]

  return (
    <Sidebar
      variant="sidebar"
      collapsible="offcanvas"
      className="border-r-2 border-vault-black dark:border-vault-white bg-vault-white dark:bg-vault-gray-800"
    >
      <SidebarHeader className="p-4 border-b-2 border-vault-black dark:border-vault-white">
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-12 w-full flex items-center justify-center">
            {theme === "dark" ? (
              <Image
                src="/images/logo-grayscale-inverted.svg"
                alt="VaultOS Logo"
                width={140}
                height={40}
                className="pixelated"
              />
            ) : (
              <Image
                src="/images/logo-grayscale.svg"
                alt="VaultOS Logo"
                width={140}
                height={40}
                className="pixelated"
              />
            )}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {features.map((feature) => (
            <SidebarMenuItem key={feature.name}>
              <SidebarMenuButton
                asChild
                isActive={currentPath === feature.path}
                tooltip={feature.name}
                className="font-mono font-bold uppercase tracking-wide rounded-none"
              >
                <Link href={feature.path}>
                  <feature.icon className="h-5 w-5" />
                  <span>{feature.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t-2 border-vault-black dark:border-vault-white">
        <div className="flex flex-col gap-4">
          <PixelButton
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="justify-start w-full"
          >
            {theme === "dark" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </PixelButton>

          <div className="text-xs text-vault-gray-500 dark:text-vault-gray-400 font-mono font-bold">
            <p>VaultOS v1.2.4</p>
            <p>© 2025 VaultOS</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

