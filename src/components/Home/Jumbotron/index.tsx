import './style.css'

export default function Jumbotron() {
  return (
    <section className="rounded section" id="home">
          <header>
            <h1>Nahuel Santillan</h1>
            <h2>Web Developer based in Argentina</h2>
            <p>Soy un desarrollador fullstack y docente ubicado en Argentina</p>

            
          </header>
          <main>
            <article className="rounded">
              <h3>Gorosito Studio Co.</h3>
              <button>
                See details
                <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
            </article>
            <article className="rounded">
              <h3>Hifu - My own IDE</h3>
              <button>
                See details
                <svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
            </article>
          </main>
        </section>
  )
}