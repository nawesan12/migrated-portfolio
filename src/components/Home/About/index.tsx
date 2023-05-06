import Image from "next/image"
import './style.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="profile-image">
        <Image 
          src="/profile-photo.webp" 
          alt="Nahuel Santillan"
          title="Nahuel Santillan Web Developer"
          height={340}
          width={340}  
        />
      </div>

      <div className="description">
        <h2 title="About Nahuel Santillan">About Me</h2>
        <p>I{`'`}m a 20yo SSR fullstack developer and teacher based in Argentina. Always trying to improve my knowledge and creating better solutions for the world. I also love to teach programming for the future world{`'`}s talent. I{`'`}m very self taught.</p>
      </div>
    </section>
  )
}