import Image from "next/image"
import './style.css'

export default function ProjectSlider() {
  return (
    <section className="section" id="projects">
      <section className="projects-gallery rounded">
        <header>
          <Image 
            src="/logo.webp" 
            alt="Nahuel Santillan"
            height={64} 
            width={64} 
          />

          <h3>What i{`'`}m actually doing?</h3>

          <div className="controls">
            <button className="left-slide">
              <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="11" y2="18" />
                <line x1="5" y1="12" x2="11" y2="6" />
              </svg>                  
            </button>
            <button className="right-slide">
              <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </header>

        <main>
          <iframe src="" className="projects-frame"></iframe>
          <a href="" className="go-to-project" id="go-to-project">
            <svg width="36" height="36" viewBox="0 0 24 24" stroke-width="3" stroke="#f5af19" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="13" y1="18" x2="19" y2="12" />
              <line x1="13" y1="6" x2="19" y2="12" />
            </svg>
          </a>
        </main>
      </section>
    </section>
  )
}