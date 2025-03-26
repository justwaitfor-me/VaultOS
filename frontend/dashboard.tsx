"use client"

import { useState } from "react"
import {
  Bell,
  ChevronRight,
  FileText,
  Home,
  Image,
  MessageSquare,
  Moon,
  Search,
  Settings,
  Sun,
  User,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className={`min-h-screen bg-zinc-50 text-zinc-900 ${darkMode ? "dark" : ""}`}>
        <div className="dark:bg-zinc-900 dark:text-zinc-100 min-h-screen transition-colors duration-200 flex">
          {/* Sidebar */}
          <AppSidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <div className="flex-1">
            {/* Header */}
            <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
              <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="h-9 w-9" />
                  <h1 className="text-xl font-medium tracking-tight">Home Server</h1>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Bell className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Settings className="h-5 w-5" />
                  </Button>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6">
              {/* Welcome Section */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-medium">Welcome back, User</h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Last updated: Just now</p>
                </div>
                <Card className="bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border-none overflow-hidden">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">System Status</p>
                        <p className="text-2xl font-medium">Operational</p>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <p className="text-sm">All systems normal</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">CPU Usage</p>
                        <p className="text-2xl font-medium">12%</p>
                        <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full w-[12%] bg-zinc-900 dark:bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Memory Usage</p>
                        <p className="text-2xl font-medium">3.2 GB / 16 GB</p>
                        <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full w-[20%] bg-zinc-900 dark:bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Widgets Grid */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-medium">Widgets</h2>
                  <Button variant="ghost" size="sm" className="text-sm">
                    Customize
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Storage Widget */}
                  <Card className="backdrop-blur-sm bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Storage</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Main Drive</span>
                            <span>75% (750GB / 1TB)</span>
                          </div>
                          <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                            <div className="h-full w-[75%] bg-zinc-900 dark:bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Media Drive</span>
                            <span>40% (2TB / 5TB)</span>
                          </div>
                          <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                            <div className="h-full w-[40%] bg-zinc-900 dark:bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Backup Drive</span>
                            <span>25% (1TB / 4TB)</span>
                          </div>
                          <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                            <div className="h-full w-[25%] bg-zinc-900 dark:bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Network Widget */}
                  <Card className="backdrop-blur-sm bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Network</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">Download</p>
                            <p className="text-xl font-medium">12.5 MB/s</p>
                          </div>
                          <div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">Upload</p>
                            <p className="text-xl font-medium">3.2 MB/s</p>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Connected Devices</p>
                          <p className="text-xl font-medium">12</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Services Widget */}
                  <Card className="backdrop-blur-sm bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Services</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span>Media Server</span>
                          </div>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span>File Sharing</span>
                          </div>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                            <span>VPN Server</span>
                          </div>
                          <Switch checked={false} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span>Backup Service</span>
                          </div>
                          <Switch checked={true} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Weather Widget */}
                  <Card className="backdrop-blur-sm bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Weather</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-3xl font-medium">22°C</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Partly Cloudy</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">New York</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <p className="text-sm font-medium">Mon</p>
                            <p className="text-sm">24°</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Tue</p>
                            <p className="text-sm">26°</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Wed</p>
                            <p className="text-sm">23°</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Calendar Widget */}
                  <Card className="backdrop-blur-sm bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Calendar</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Today's Events</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            <span className="text-sm">9:00 AM - Team Meeting</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                            <span className="text-sm">1:00 PM - Lunch with Alex</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm">4:30 PM - Gym Session</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Notes Widget */}
                  <Card className="backdrop-blur-sm bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Quick Notes</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">Remember to update the backup schedule for the media server.</p>
                        <p className="text-sm">Check network settings for the new IoT devices.</p>
                        <p className="text-sm">Research new storage solutions for expanding capacity.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Feature Tiles */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-medium">Features</h2>
                  <Button variant="ghost" size="sm" className="text-sm">
                    View All
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Feature Tile 1 */}
                  <Card className="backdrop-blur-sm bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 transition-colors group cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-40">
                      <div className="mb-2 p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-600 transition-colors">
                        <User className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium">User Management</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Manage access and permissions</p>
                    </CardContent>
                  </Card>

                  {/* Feature Tile 2 */}
                  <Card className="backdrop-blur-sm bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 transition-colors group cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-40">
                      <div className="mb-2 p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-600 transition-colors">
                        <Settings className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium">System Settings</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Configure server preferences</p>
                    </CardContent>
                  </Card>

                  {/* Feature Tile 3 */}
                  <Card className="backdrop-blur-sm bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 transition-colors group cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-40">
                      <div className="mb-2 p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-600 transition-colors">
                        <Bell className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium">Notifications</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Manage alerts and messages</p>
                    </CardContent>
                  </Card>

                  {/* Feature Tile 4 */}
                  <Card className="backdrop-blur-sm bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-300 transition-colors group cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-40">
                      <div className="mb-2 p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-600 transition-colors">
                        <Search className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium">Search</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Find files and services</p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

// Sidebar Component
function AppSidebar({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  const { state } = useSidebar()

  // App features for the sidebar
  const features = [
    { name: "Dashboard", icon: Home, active: true },
    { name: "File Server", icon: FileText },
    { name: "Photo App", icon: Image },
    { name: "Solar Manager", icon: Zap },
    { name: "Chat App", icon: MessageSquare },
  ]

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r border-zinc-200 dark:border-zinc-800">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-zinc-900 dark:bg-white flex items-center justify-center">
            <span className="text-white dark:text-zinc-900 font-semibold">HS</span>
          </div>
          <span className="font-medium">HomeServer</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {features.map((feature) => (
            <SidebarMenuItem key={feature.name}>
              <SidebarMenuButton asChild isActive={feature.active} tooltip={feature.name}>
                <a href="#">
                  <feature.icon className="h-5 w-5" />
                  <span>{feature.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex flex-col gap-4">
          <Button variant="outline" size="sm" onClick={toggleDarkMode} className="justify-start">
            {darkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>

          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            <p>HomeServer v1.2.4</p>
            <p>© 2025 HomeServer</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

