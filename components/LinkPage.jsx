"use client"
import { FileEdit, Github } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "./ui/button"

const LinkPage = () => {
  const { category } = useParams()
  return (
    <>
      <Button asChild>
        {category ? (
          <Link
            href={`https://github.com/iam-MustakAhmedKhan/dev-canvas/blob/main/data/${category}.json`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileEdit width={20} height={20} />
            <span className="ml-2">Edit This Page</span>
          </Link>
        ) : (
          <Link
            href="https://github.com/iam-MustakAhmedKhan/dev-canvas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <span className="ml-2">Contribute</span>
          </Link>
        )}
      </Button>
    </>
  )
}

export default LinkPage
