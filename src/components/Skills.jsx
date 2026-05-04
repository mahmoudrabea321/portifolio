import { useEffect, useRef } from 'react'

const groups = [
  {
    icon: '🎨', title: 'Frontend',
    skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    icon: '⚙️', title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT Auth'],
  },
  {
    icon: '🛠️', title: 'CMS & Tools',
    skills: ['WordPress', 'WooCommerce', 'Git', 'GitHub', 'Postman', 'VS Code'],
  },
]

export default function Skills() {
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
    <div className="skills-wrap" id="skills" ref={ref}>
      <div className="section">
        <div className="section-label reveal">
          <span className="section-label-text">03. Skills</span>
          <div className="section-label-line" />
        </div>
        <h2 className="section-h2 reveal" style={{ transitionDelay: '0.1s' }}>My Tech Stack</h2>
        <p className="section-sub reveal" style={{ transitionDelay: '0.15s' }}>
          Tools and technologies I use to bring ideas to life — from design to deployment.
        </p>

        <div className="skills-grid">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="skill-card reveal"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="skill-card-head">
                <span className="skill-icon">{g.icon}</span>
                <h3>{g.title}</h3>
              </div>
              <div className="chips">
                {g.skills.map(s => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
