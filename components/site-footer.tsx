import Link from "next/link"
import { DiscIcon as Discord, ExternalLink, Github, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} SNFT Testnet Network. All rights reserved.
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Link
            href="https://app.snft.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ExternalLink className="h-5 w-5" />
            <span className="text-sm">Launch App</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/company/snft/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/snftchain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Twitter X"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://discord.gg/VvN6GE2w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Discord"
            >
              <Discord className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/SNFT-Chain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
