import { Battery, Calendar, ChevronDown, CloudSun, Download, LineChart, Sun, Upload, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AppLayout } from "@/components/app-layout"

export default function SolarManagerPage() {
  return (
    <AppLayout title="Solar Manager">
      <div className="space-y-6 w-full">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <Card className="bg-white dark:bg-zinc-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">VaultOS Energy</h3>
                <Sun className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-3xl font-medium">4.2 kW</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                <span className="text-green-500">+12%</span> from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-zinc-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Today's Energy</h3>
                <Zap className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-3xl font-medium">28.5 kWh</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                <span className="text-green-500">+8%</span> from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-zinc-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Battery Status</h3>
                <Battery className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-3xl font-medium">85%</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Estimated 12 hours remaining</p>
            </CardContent>
          </Card>
        </div>

        {/* Energy Flow */}
        <Card className="bg-white dark:bg-zinc-800 w-full">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">VaultOS Energy Flow</h3>
              <div className="flex items-center gap-2">
                <CloudSun className="h-5 w-5 text-zinc-500" />
                <span>Partly Cloudy</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full">
              <div className="flex flex-col items-center text-center">
                <Sun className="h-12 w-12 text-yellow-500 mb-2" />
                <p className="font-medium">Solar Panels</p>
                <p className="text-2xl font-medium">4.2 kW</p>
                <div className="flex items-center text-green-500 text-sm">
                  <Upload className="h-4 w-4 mr-1" />
                  <span>Producing</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <Battery className="h-12 w-12 text-green-500 mb-2" />
                <p className="font-medium">Battery</p>
                <p className="text-2xl font-medium">2.1 kW</p>
                <div className="flex items-center text-green-500 text-sm">
                  <Download className="h-4 w-4 mr-1" />
                  <span>Charging</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-blue-500 mb-2" />
                <p className="font-medium">VaultOS Usage</p>
                <p className="text-2xl font-medium">2.1 kW</p>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm">
                  <span>From Solar</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Production Chart */}
        <Card className="bg-white dark:bg-zinc-800 w-full">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">VaultOS Energy History</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Daily
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="mr-1 h-4 w-4" />
                  May 2025
                </Button>
              </div>
            </div>

            <div className="h-64 flex items-center justify-center border border-dashed border-zinc-300 dark:border-zinc-700 rounded-md w-full">
              <div className="flex flex-col items-center text-center text-zinc-500 dark:text-zinc-400">
                <LineChart className="h-8 w-8 mb-2" />
                <p>Production Chart</p>
                <p className="text-xs">(Visualization would appear here)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="bg-white dark:bg-zinc-800 w-full">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">VaultOS System Status</h3>
            <div className="space-y-4 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Solar Panels</span>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Operating normally</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Battery System</span>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Charging</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Inverter</span>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Operating normally</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Grid Connection</span>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">Connected</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Energy Savings */}
        <Card className="bg-white dark:bg-zinc-800 w-full">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">VaultOS Energy Savings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="space-y-1">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Monthly Savings</p>
                <p className="text-2xl font-medium">$128.45</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">CO₂ Reduction</p>
                <p className="text-2xl font-medium">1.2 tons</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Energy Independence</p>
                <p className="text-2xl font-medium">87%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

