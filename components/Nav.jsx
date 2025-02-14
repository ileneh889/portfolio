"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LINKS } from "@/lib/utils"


export default function Nav() {
  const pathName = usePathname()

  return (
    <nav className="flex gap-8">
      {
        LINKS.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${link.path === pathName && "text-accent border-b-2 border-accent"} font-mediam hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          )
        }
        )
      }
    </nav>
  )
}
