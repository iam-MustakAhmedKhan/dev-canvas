"use client"

import { Logo } from "../components/common/Logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "../components/common/ThemeToggle"
import LinkPage from "../components/LinkPage"
import { Star } from "lucide-react"

const Header = () => {
  return (
    <nav className="flex items-center justify-between py-5 sticky top-0 bg-[#ffffff] dark:bg-[#020817] z-50">
      <Logo />
      <div className="flex items-center gap-4">
        <LinkPage />

        <Button asChild variant="ghost">
          <Link
            href="https://github.com/iam-MustakAhmedKhan/dev-canvas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Star />
            <span className="ml-2">Give a star</span>
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  )
}

export { Header }
