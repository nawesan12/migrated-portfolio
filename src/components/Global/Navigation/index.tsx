import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <header>
        <nav>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>

            <li>
              <Image 
                src="/logo.webp" 
                alt="Nahuel Santillan Logo" 
                title="Nahuel Santillan - Web Developer" 
                width={32}
                height={32}
              />
            </li>

            <li>
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>

  )
}