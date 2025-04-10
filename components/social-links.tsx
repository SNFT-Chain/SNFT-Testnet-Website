import Link from "next/link"
import { DiscIcon as Discord, ExternalLink, Github, Linkedin, Twitter } from "lucide-react"

export function SocialLinks({ className = "" }: { className?: string }) {
  const socialLinks = [
    {
      name: "Launch App",
      href: "https://app.snft.in/",
      icon: <ExternalLink className="h-5 w-5" />,
      label: "Launch App",
      showLabel: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/snft/",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      showLabel: false,
    },
    {
      name: "Twitter X",
      href: "https://x.com/snftchain",
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter X",
      showLabel: false,
    },
    {
      name: "Discord",
      href: "https://discord.gg/VvN6GE2w",
      icon: <Discord className="h-5 w-5" />,
      label: "Discord",
      showLabel: false,
    },
    {
      name: "GitHub",
      href: "https://github.com/SNFT-Chain",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      showLabel: false,
    },
  ]

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          aria-label={link.label}
        >
          {link.icon}
          {link.showLabel && <span className="text-sm">{link.label}</span>}
        </Link>
      ))}
    </div>
  )
}
