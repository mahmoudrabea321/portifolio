import { useEffect, useRef } from 'react'
import me from '../assets/me.jpeg'
export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="about-wrap" id="about" ref={ref}>
      <div className="section">
        <div className="section-label reveal">
          <span className="section-label-text">02. About Me</span>
          <div className="section-label-line" />
        </div>

        <div className="about-grid">
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="about-img-frame">
              <div className="about-img-deco2" />
              <div className="about-img-deco1" />
              <div className="about-img-shadow" />
              <div className="about-avatar">
               <img src={me} alt="Mahmoud Rabea" className="about-avatar-img" />
              </div>
            </div>
          </div>

          <div className="about-text reveal" style={{ transitionDelay: '0.2s' }}>
            <h2>
              Building the web,<br />
              <span>one project at a time.</span>
            </h2>
            <p>
              I'm <strong>Mahmoud Rabea</strong>, a Full-Stack Web Developer from Egypt
              with a background in Biotechnology. I transitioned into tech through
              self-learning and haven't looked back since.
            </p>
            <p>
              I specialize in building complete web products — smooth React frontends
              to robust Node.js/Express backends with MongoDB. I also build professional
              e-commerce solutions using <strong>WordPress & WooCommerce</strong>.
            </p>
            <p>
              My background in teaching and customer service shaped how I communicate —
              clearly, with a focus on what the client actually needs. I treat every
              project as a long-term partnership.
            </p>

            <div className="about-stats">
              <div>
                <div className="about-stat-val">3+</div>
                <div className="about-stat-lbl">Years Experience</div>
              </div>
              <div>
                <div className="about-stat-val">10+</div>
                <div className="about-stat-lbl">Projects Built</div>
              </div>
              <div>
                <div className="about-stat-val">5+</div>
                <div className="about-stat-lbl">Happy Clients</div>
              </div>
            </div>

            <a
              href="https://github.com/mahmoudrabea321"
              target="_blank"
              rel="noreferrer"
              className="about-cta"
            >
              ↗ View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
