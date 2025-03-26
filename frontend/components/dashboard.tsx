"use client"
import { Bell, ChevronRight, Settings, Shield, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { AppLayout } from "@/components/app-layout"
import { PixelCard, PixelCardHeader, PixelCardContent } from "@/components/ui/pixel-card"
import { PixelButton } from "@/components/ui/pixel-button"

export default function Dashboard() {
  return (
    <AppLayout title="Dashboard">
      {/* Welcome Section */}
      <section className="mb-8 w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-mono uppercase tracking-wide font-bold">Welcome to VaultOS</h2>
            <div className="px-2 py-1 bg-vault-black dark:bg-vault-white text-vault-white dark:text-vault-black rounded-none text-xs font-pixel uppercase">
              SECURE
            </div>
          </div>
          <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Last updated: Just now</p>
        </div>
        <PixelCard className="w-full overflow-hidden">
          <PixelCardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="space-y-2">
                <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">System Status</p>
                <p className="text-2xl font-mono uppercase font-bold">Operational</p>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500"></div>
                  <p className="text-sm font-mono">All systems secure</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">CPU Usage</p>
                <p className="text-2xl font-mono uppercase font-bold">12%</p>
                <div className="h-2 w-full bg-vault-gray-200 dark:bg-vault-gray-700 overflow-hidden">
                  <div className="h-full w-[12%] bg-vault-black dark:bg-vault-white"></div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Memory Usage</p>
                <p className="text-2xl font-mono uppercase font-bold">3.2 GB / 16 GB</p>
                <div className="h-2 w-full bg-vault-gray-200 dark:bg-vault-gray-700 overflow-hidden">
                  <div className="h-full w-[20%] bg-vault-black dark:bg-vault-white"></div>
                </div>
              </div>
            </div>
          </PixelCardContent>
        </PixelCard>
      </section>

      {/* Widgets Grid */}
      <section className="mb-8 w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-mono uppercase tracking-wide font-bold">VaultOS Widgets</h2>
          <PixelButton variant="outline" size="sm" className="text-sm">
            Customize
            <ChevronRight className="ml-1 h-4 w-4" />
          </PixelButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {/* Storage Widget */}
          <PixelCard>
            <PixelCardHeader className="flex items-center justify-between">
              <h3 className="font-mono uppercase font-bold">Vault Storage</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PixelCardHeader>
            <PixelCardContent>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm font-mono">
                    <span>Main Vault</span>
                    <span>75% (750GB / 1TB)</span>
                  </div>
                  <div className="h-2 w-full bg-vault-gray-200 dark:bg-vault-gray-700 overflow-hidden">
                    <div className="h-full w-[75%] bg-vault-black dark:bg-vault-white"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm font-mono">
                    <span>Media Vault</span>
                    <span>40% (2TB / 5TB)</span>
                  </div>
                  <div className="h-2 w-full bg-vault-gray-200 dark:bg-vault-gray-700 overflow-hidden">
                    <div className="h-full w-[40%] bg-vault-black dark:bg-vault-white"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm font-mono">
                    <span>Backup Vault</span>
                    <span>25% (1TB / 4TB)</span>
                  </div>
                  <div className="h-2 w-full bg-vault-gray-200 dark:bg-vault-gray-700 overflow-hidden">
                    <div className="h-full w-[25%] bg-vault-black dark:bg-vault-white"></div>
                  </div>
                </div>
              </div>
            </PixelCardContent>
          </PixelCard>

          {/* Network Widget */}
          <PixelCard>
            <PixelCardHeader className="flex items-center justify-between">
              <h3 className="font-mono uppercase font-bold">Network Security</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PixelCardHeader>
            <PixelCardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Download</p>
                    <p className="text-xl font-mono uppercase font-bold">12.5 MB/s</p>
                  </div>
                  <div>
                    <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Upload</p>
                    <p className="text-xl font-mono uppercase font-bold">3.2 MB/s</p>
                  </div>
                </div>
                <Separator className="border-t-2 border-vault-gray-200 dark:border-vault-gray-700" />
                <div>
                  <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Connected Devices</p>
                  <p className="text-xl font-mono uppercase font-bold">12</p>
                </div>
              </div>
            </PixelCardContent>
          </PixelCard>

          {/* Services Widget */}
          <PixelCard>
            <PixelCardHeader className="flex items-center justify-between">
              <h3 className="font-mono uppercase font-bold">VaultOS Services</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PixelCardHeader>
            <PixelCardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500"></div>
                    <span className="font-mono">Media Server</span>
                  </div>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500"></div>
                    <span className="font-mono">File Sharing</span>
                  </div>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-red-500"></div>
                    <span className="font-mono">VPN Server</span>
                  </div>
                  <Switch checked={false} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500"></div>
                    <span className="font-mono">Backup Service</span>
                  </div>
                  <Switch checked={true} />
                </div>
              </div>
            </PixelCardContent>
          </PixelCard>

          {/* Weather Widget */}
          <PixelCard>
            <PixelCardHeader className="flex items-center justify-between">
              <h3 className="font-mono uppercase font-bold">Weather</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PixelCardHeader>
            <PixelCardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-mono uppercase font-bold">22°C</p>
                  <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Partly Cloudy</p>
                  <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">New York</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-sm font-pixel uppercase">Mon</p>
                    <p className="text-sm font-mono">24°</p>
                  </div>
                  <div>
                    <p className="text-sm font-pixel uppercase">Tue</p>
                    <p className="text-sm font-mono">26°</p>
                  </div>
                  <div>
                    <p className="text-sm font-pixel uppercase">Wed</p>
                    <p className="text-sm font-mono">23°</p>
                  </div>
                </div>
              </div>
            </PixelCardContent>
          </PixelCard>

          {/* Calendar Widget */}
          <PixelCard>
            <PixelCardHeader className="flex items-center justify-between">
              <h3 className="font-mono uppercase font-bold">VaultOS Calendar</h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PixelCardHeader>
            <PixelCardContent>
              <div className="space-y-2">
                <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Today's Events</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-blue-500"></div>
                    <span className="text-sm font-mono">9:00 AM - Team Meeting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-purple-500"></div>
                    <span className="text-sm font-mono">1:00 PM - Lunch with Alex</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500"></div>
                    <span className="text-sm font-mono">4:30 PM - Gym Session</span>
                  </div>
                </div>
              </div>
            </PixelCardContent>
          </PixelCard>

          {/* Notes Widget */}
          <PixelCard variant="terminal">
            <PixelCardHeader className="flex items-center justify-between">
              <h3 className="font-mono uppercase font-bold">VaultOS Terminal</h3>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none text-vault-white dark:text-vault-gray-300"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PixelCardHeader>
            <PixelCardContent>
              <div className="space-y-2">
                <p className="text-sm terminal-text">$ system status</p>
                <p className="text-sm terminal-text">All systems operational.</p>
                <p className="text-sm terminal-text">$ check security</p>
                <p className="text-sm terminal-text">No vulnerabilities detected.</p>
                <p className="text-sm terminal-text">
                  $ _<span className="terminal-prompt"></span>
                </p>
              </div>
            </PixelCardContent>
          </PixelCard>
        </div>
      </section>

      {/* Feature Tiles */}
      <section className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-mono uppercase tracking-wide font-bold">VaultOS Features</h2>
          <PixelButton variant="outline" size="sm" className="text-sm">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </PixelButton>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {/* Feature Tile 1 */}
          <PixelCard className="group cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100">
            <PixelCardContent className="p-4 flex flex-col items-center justify-center text-center h-40">
              <div className="mb-2 p-2 bg-vault-gray-100 dark:bg-vault-gray-700 group-hover:bg-vault-gray-200 dark:group-hover:bg-vault-gray-600 transition-colors">
                <User className="h-6 w-6" />
              </div>
              <h3 className="font-mono uppercase font-bold">User Access</h3>
              <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Manage vault permissions</p>
            </PixelCardContent>
          </PixelCard>

          {/* Feature Tile 2 */}
          <PixelCard className="group cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100">
            <PixelCardContent className="p-4 flex flex-col items-center justify-center text-center h-40">
              <div className="mb-2 p-2 bg-vault-gray-100 dark:bg-vault-gray-700 group-hover:bg-vault-gray-200 dark:group-hover:bg-vault-gray-600 transition-colors">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="font-mono uppercase font-bold">System Settings</h3>
              <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Configure VaultOS</p>
            </PixelCardContent>
          </PixelCard>

          {/* Feature Tile 3 */}
          <PixelCard className="group cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100">
            <PixelCardContent className="p-4 flex flex-col items-center justify-center text-center h-40">
              <div className="mb-2 p-2 bg-vault-gray-100 dark:bg-vault-gray-700 group-hover:bg-vault-gray-200 dark:group-hover:bg-vault-gray-600 transition-colors">
                <Bell className="h-6 w-6" />
              </div>
              <h3 className="font-mono uppercase font-bold">Notifications</h3>
              <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Manage security alerts</p>
            </PixelCardContent>
          </PixelCard>

          {/* Feature Tile 4 */}
          <PixelCard className="group cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-100">
            <PixelCardContent className="p-4 flex flex-col items-center justify-center text-center h-40">
              <div className="mb-2 p-2 bg-vault-gray-100 dark:bg-vault-gray-700 group-hover:bg-vault-gray-200 dark:group-hover:bg-vault-gray-600 transition-colors">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-mono uppercase font-bold">Security</h3>
              <p className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Protect your data</p>
            </PixelCardContent>
          </PixelCard>
        </div>
      </section>
    </AppLayout>
  )
}

