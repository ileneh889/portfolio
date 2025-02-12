import Link from "next/link"
import { Button } from "./ui/Button"
// components
import Nav from "./Nav"

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white " >
      <div className="container mx-auto flex justify-between items-center" >
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ilene<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hure me btn*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <button>Hire me</button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          mobile nav
        </div>
      </div>
    </header>
  )
}
