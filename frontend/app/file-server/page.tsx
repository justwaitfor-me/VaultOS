import { FileText, Folder, FolderOpen, HardDrive, MoreHorizontal, Plus, Search, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AppLayout } from "@/components/app-layout"
import { PixelCard, PixelCardHeader, PixelCardContent } from "@/components/ui/pixel-card"
import { PixelButton } from "@/components/ui/pixel-button"

export default function FileServerPage() {
  return (
    <AppLayout title="File Server">
      <div className="space-y-6 w-full">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-vault-gray-500 dark:text-vault-gray-400" />
            <Input
              type="search"
              placeholder="Search vault files..."
              className="pl-9 bg-vault-white dark:bg-vault-gray-800 rounded-none border-2 border-vault-black dark:border-vault-white font-mono"
            />
          </div>
          <div className="flex items-center gap-2">
            <PixelButton variant="outline" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </PixelButton>
            <PixelButton size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Vault
            </PixelButton>
          </div>
        </div>

        {/* Storage Overview */}
        <PixelCard className="w-full">
          <PixelCardHeader>VaultOS Storage Overview</PixelCardHeader>
          <PixelCardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Main Vault</span>
                  <span className="text-sm font-mono">750GB / 1TB</span>
                </div>
                <div className="h-2 w-full bg-vault-gray-200 dark:bg-vault-gray-700 overflow-hidden">
                  <div className="h-full w-[75%] bg-vault-black dark:bg-vault-white"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Media Vault</span>
                  <span className="text-sm font-mono">2TB / 5TB</span>
                </div>
                <div className="h-2 w-full bg-vault-gray-200 dark:bg-vault-gray-700 overflow-hidden">
                  <div className="h-full w-[40%] bg-vault-black dark:bg-vault-white"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">Backup Vault</span>
                  <span className="text-sm font-mono">1TB / 4TB</span>
                </div>
                <div className="h-2 w-full bg-vault-gray-200 dark:bg-vault-gray-700 overflow-hidden">
                  <div className="h-full w-[25%] bg-vault-black dark:bg-vault-white"></div>
                </div>
              </div>
            </div>
          </PixelCardContent>
        </PixelCard>

        {/* File Browser */}
        <PixelCard className="w-full">
          <PixelCardHeader className="flex items-center justify-between">
            <h3 className="font-mono font-bold uppercase">Vault Files</h3>
            <div className="flex items-center gap-2 text-sm text-vault-gray-500 dark:text-vault-gray-400 font-mono">
              <span>Sort by:</span>
              <select className="bg-transparent border-none outline-none font-mono">
                <option>Name</option>
                <option>Date</option>
                <option>Size</option>
                <option>Type</option>
              </select>
            </div>
          </PixelCardHeader>
          <PixelCardContent className="p-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 text-sm mb-4 font-mono">
              <Button variant="ghost" size="sm" className="h-7 px-2 rounded-none">
                Home
              </Button>
              <span>/</span>
              <Button variant="ghost" size="sm" className="h-7 px-2 rounded-none">
                Documents
              </Button>
            </div>

            <Separator className="mb-4 border-t-2 border-vault-gray-200 dark:border-vault-gray-700" />

            {/* Folders */}
            <div className="space-y-1 mb-4 w-full">
              <div className="flex items-center justify-between p-2 hover:bg-vault-gray-100 dark:hover:bg-vault-gray-700">
                <div className="flex items-center gap-3">
                  <FolderOpen className="h-5 w-5 text-vault-gray-500 dark:text-vault-gray-400" />
                  <span className="font-mono">Projects</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-vault-gray-100 dark:hover:bg-vault-gray-700">
                <div className="flex items-center gap-3">
                  <Folder className="h-5 w-5 text-vault-gray-500 dark:text-vault-gray-400" />
                  <span className="font-mono">Personal</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-vault-gray-100 dark:hover:bg-vault-gray-700">
                <div className="flex items-center gap-3">
                  <Folder className="h-5 w-5 text-vault-gray-500 dark:text-vault-gray-400" />
                  <span className="font-mono">Work</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Files */}
            <div className="space-y-1 w-full">
              <div className="flex items-center justify-between p-2 hover:bg-vault-gray-100 dark:hover:bg-vault-gray-700">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-vault-gray-500 dark:text-vault-gray-400" />
                  <span className="font-mono">Annual Report.pdf</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-vault-gray-100 dark:hover:bg-vault-gray-700">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-vault-gray-500 dark:text-vault-gray-400" />
                  <span className="font-mono">Budget 2025.xlsx</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-vault-gray-100 dark:hover:bg-vault-gray-700">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-vault-gray-500 dark:text-vault-gray-400" />
                  <span className="font-mono">Meeting Notes.docx</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </PixelCardContent>
        </PixelCard>

        {/* Recent Activity */}
        <PixelCard variant="terminal" className="w-full">
          <PixelCardHeader>VaultOS Activity Log</PixelCardHeader>
          <PixelCardContent className="p-6">
            <div className="space-y-4 w-full font-mono">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 flex items-center justify-center">
                  <Upload className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-mono">[2025-03-26 14:22:15] User uploaded Budget 2025.xlsx</p>
                  <p className="text-xs text-vault-gray-500 dark:text-vault-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 flex items-center justify-center">
                  <FolderOpen className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-mono">[2025-03-25 09:15:32] User created vault Projects</p>
                  <p className="text-xs text-vault-gray-500 dark:text-vault-gray-400">Yesterday</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 flex items-center justify-center">
                  <HardDrive className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-mono">[2025-03-24 23:00:00] System backup completed</p>
                  <p className="text-xs text-vault-gray-500 dark:text-vault-gray-400">2 days ago</p>
                </div>
              </div>
            </div>
          </PixelCardContent>
        </PixelCard>
      </div>
    </AppLayout>
  )
}

