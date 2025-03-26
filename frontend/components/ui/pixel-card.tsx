import * as React from "react"
import { cn } from "@/lib/utils"

interface PixelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "terminal"
}

const PixelCard = React.forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-none animate-pixelate",
          {
            "bg-vault-white dark:bg-vault-gray-800 pixel-borders": variant === "default",
            "bg-transparent border-2 border-vault-black dark:border-vault-white": variant === "outline",
            "bg-vault-black dark:bg-vault-gray-900 text-vault-white dark:text-vault-gray-300 font-mono border-2 border-vault-gray-500":
              variant === "terminal",
          },
          className,
        )}
        {...props}
      />
    )
  },
)
PixelCard.displayName = "PixelCard"

interface PixelCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const PixelCardHeader = React.forwardRef<HTMLDivElement, PixelCardHeaderProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("px-4 py-3 font-mono font-bold uppercase tracking-wide", className)} {...props} />
})
PixelCardHeader.displayName = "PixelCardHeader"

interface PixelCardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const PixelCardContent = React.forwardRef<HTMLDivElement, PixelCardContentProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("p-4", className)} {...props} />
})
PixelCardContent.displayName = "PixelCardContent"

interface PixelCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const PixelCardFooter = React.forwardRef<HTMLDivElement, PixelCardFooterProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("px-4 py-3 border-t-2 border-vault-gray-200 dark:border-vault-gray-700", className)}
      {...props}
    />
  )
})
PixelCardFooter.displayName = "PixelCardFooter"

export { PixelCard, PixelCardHeader, PixelCardContent, PixelCardFooter }

