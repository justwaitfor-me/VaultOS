import * as React from "react"
import { cn } from "@/lib/utils"

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "terminal"
  size?: "default" | "sm" | "lg" | "icon"
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-mono font-bold uppercase tracking-wide",
          {
            "pixel-button": variant === "default",
            "bg-transparent border-2 border-vault-black dark:border-vault-white text-vault-black dark:text-vault-white hover:bg-vault-gray-100 dark:hover:bg-vault-gray-800":
              variant === "outline",
            "bg-transparent text-vault-black dark:text-vault-white hover:bg-vault-gray-100 dark:hover:bg-vault-gray-800":
              variant === "ghost",
            "bg-vault-black text-vault-green-bright font-mono border-2 border-vault-green-bright":
              variant === "terminal",
            "px-4 py-2": size === "default",
            "px-3 py-1 text-sm": size === "sm",
            "px-6 py-3 text-lg": size === "lg",
            "w-10 h-10 p-0": size === "icon",
          },
          className,
        )}
        {...props}
      />
    )
  },
)
PixelButton.displayName = "PixelButton"

export { PixelButton }

