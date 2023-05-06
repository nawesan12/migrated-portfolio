import Image from "next/image"
import './style.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="profile-image">
        <Image 
          src="/profile-photo.webp" 
          alt="Nahuel Santillan"
          height={340}
          width={340}  
        />
      </div>

      <div className="description">
        <h2>About Me</h2>
        <p>I{`'`}m a 20yo SSR fullstack developer and teacher based in Argentina. Always trying to improve my knowledge and creating better solutions for the world</p>
      </div>
    </section>
  )
}