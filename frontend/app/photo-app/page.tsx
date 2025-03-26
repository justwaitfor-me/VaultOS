import { Grid, ImageIcon, LayoutGrid, Plus, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AppLayout } from "@/components/app-layout"

export default function PhotoAppPage() {
  return (
    <AppLayout title="Photo App">
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
            <Input type="search" placeholder="Search photos..." className="pl-9 bg-white dark:bg-zinc-800" />
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
        </div>

        {/* Albums */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Albums</h3>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {["Vacation 2024", "Family", "Nature", "Work Events", "Pets"].map((album) => (
              <Card key={album} className="group cursor-pointer overflow-hidden">
                <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-zinc-400" />
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-sm font-medium truncate">{album}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Recent Photos */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Recent Photos</h3>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="group cursor-pointer overflow-hidden">
                <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 relative">
                  <img
                    src={`/placeholder.svg?height=200&width=200&text=Photo ${i + 1}`}
                    alt={`Photo ${i + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <Card className="bg-white dark:bg-zinc-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Photo Stats</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Total Photos</p>
                <p className="text-2xl font-medium">1,248</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Albums</p>
                <p className="text-2xl font-medium">12</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Storage Used</p>
                <p className="text-2xl font-medium">4.2 GB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

