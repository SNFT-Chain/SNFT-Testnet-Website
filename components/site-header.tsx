import Link from "next/link"
import { ExternalLink, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">SNFT Testnet</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-8">
          <nav className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="transition-colors hover:text-foreground/80">
                Home
              </Link>
              <Link href="/tutorials" className="transition-colors hover:text-foreground/80">
                Tutorials
              </Link>
              <Link href="/network" className="transition-colors hover:text-foreground/80">
                Network Info
              </Link>
              <Link
                href="https://texplorer.snft.in"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground/80"
              >
                Explorer
              </Link>
            </div>
            <Link href="https://app.snft.in/" target="_blank" rel="noopener noreferrer">
              <Button className="hidden md:flex">
                Launch App
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  <Link href="/" className="hover:text-foreground/80">
                    Home
                  </Link>
                  <Link href="/tutorials" className="hover:text-foreground/80">
                    Tutorials
                  </Link>
                  <Link href="/network" className="hover:text-foreground/80">
                    Network Info
                  </Link>
                  <Link
                    href="https://texplorer.snft.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground/80"
                  >
                    Explorer
                  </Link>
                  <Link
                    href="https://app.snft.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground/80"
                  >
                    Launch App
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
