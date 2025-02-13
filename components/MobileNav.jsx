
"use client"

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"
import { LINKS } from "@/lib/utils"
import { GoArrowDownRight } from "react-icons/go";

export default function MobileNav() {
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col" >
        <SheetTitle className="hidden">Menu</SheetTitle>
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ilene<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {
            LINKS.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`${link.path === pathName && "text-accent"} text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.path === pathName && <GoArrowDownRight className="inline-flex mr-1" />}
                  {link.name}
                </Link>
              )
            })
          }
        </nav>
      </SheetContent>
    </Sheet>
  )
}
