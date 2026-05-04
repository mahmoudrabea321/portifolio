export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-blobs">
        <div className="blob blob1" />
        <div className="blob blob2" />
      </div>
      <div className="hero-dots" />

      <div className="hero-content">
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          Available for Freelance Work
        </div>

        <h1 className="hero-name">
          Mahmoud <span className="grad">Rabea</span>
        </h1>

        <div className="hero-divider">
          <div className="hero-divider-line l" />
          <p className="hero-role">
            Full-Stack Developer <span>·</span> MERN Stack
          </p>
          <div className="hero-divider-line r" />
        </div>

        <p className="hero-desc">
          I build fast, scalable, and beautiful web applications — from
          pixel-perfect frontends to powerful backends.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-ghost">Get In Touch</a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/mahmoudrabea321" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mahmoud-rabea-456547259/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="bodamomo2010@email.com" target="_blank" rel="noreferrer">Email</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
