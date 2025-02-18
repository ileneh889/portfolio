import Link from "next/link"
import { Button } from "./ui/button"
// components
import Nav from "./Nav"
import MobileNav from "./MobileNav"


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
          <Link href="mailto:ileneh8899@gmail.com?subject=We would like to work with you!&body=I'd love to have a conversation with you about a potential opportunity to join our team!">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
