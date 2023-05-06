import Image from "next/image"
import Link from "next/link"

export default function Footer() {

  const actualYear = new Date().getFullYear()

  return (
    <footer>
        <header>
          <h4>Have a cool project?</h4>

          <button className="contact-me-button">
            <span>
              Contact me 
              <svg width="22" height="22" viewBox="0 0 24 24" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </span>
          </button>
        </header>

        <span className="divisor"/>

        <div>
          <figure>
            <Image 
              title="Nahuel Santillan" 
              alt="Nahuel Santillan" 
              src="/profile-photo.webp"
              width={170}
              height={170}  
            />
            <figcaption>A web developer and teacher based in Argentina</figcaption>
          </figure>

          <nav>
            <ul>
              <h5>Navigation</h5>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Expertise</Link></li>
              <li><Link href="/work">Work</Link></li>
            </ul>

            <ul>
              <h5>Services</h5>
              <li><Link href="/branding">Branding</Link></li>
              <li><Link href="/development">Development</Link></li>
              <li><Link href="/assesments">Assesments</Link></li>
              <li><Link href="/lessons">Lessons</Link></li>
            </ul>

            <ul>
              <h5>Social Media</h5>
              <li><a href="">Github</a></li>
              <li><a href="">Linkedin</a></li>
              <li><a href="">Youtube</a></li>
              <li><a href="">Twitter</a></li>
            </ul>
          </nav>
        </div>

        <span className="divisor"/>

        <p><span>{actualYear}</span> | Nahuel Santillan</p>
      </footer>
  )
}