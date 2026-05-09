import { useEffect, useRef } from 'react'

// Put your screenshot files inside src/assets/ then import them here
import estoreImg from '../assets/estore.png'
import burgerImg from '../assets/Burger.png'
import zeliaImg from '../assets/project1.png'
import jotnoteImg from '../assets/note.png'
import lynxImg from '../assets/woo.png'
import weatherImg from '../assets/weather.png'
import fernistore from '../assets/fernistore.png'
import decore from '../assets/decore.png'
import perfume from '../assets/perfume.png'
import lomp from '../assets/lomp.png'
import medi from '../assets/medi.png'
import wear from '../assets/wear.png'
import cafe from '../assets/cafe.png'
import mid from '../assets/mid.png'




const projects = [
   {
    title: 'Aura Cosmetics & Perfumes', featured: true,
    img: perfume,
    desc: 'Aura is a high-end eCommerce web application designed for a luxury perfume and cosmetics brand. It delivers a seamless, premium shopping experience through fluid animations, a responsive modern aesthetic, and a real-time database-driven product catalog.',
    tech: [['Vite ','tc-yellow'],['React ','tc-cyan'],['Tailwind CSS ','tc-green'],['Typescript ','bg-blue']],
    github: 'https://github.com/mahmoudrabea321/perfume-',
    live: 'https://perfume-dk2.pages.dev/',
  },
  {
    title: 'Lumina Lux', featured: true,
    img: lomp,
    desc: 'A premium e-commerce frontend showcase designed for high-end architectural lighting. The application features a bespoke, minimalist design language characterized by elegant serif typography, a high-contrast dark theme with curated gold accents, and fluid micro-interactions. Key highlights include a dynamic, automated lighting effect in the hero section built with Framer Motion, fully responsive product grids, and a seamless, modern user experience.',
    tech: [['Vite ','tc-yellow'],['React ','tc-cyan'],['Tailwind CSS ','tc-green'],['Typescript ','bg-blue']],
    github: 'https://github.com/mahmoudrabea321/lighting-store',
    live: 'https://lighting-store.pages.dev/',
  },{
    title: 'Cafe Shop', featured: true,
    img: cafe,
    desc: 'A high-converting, fully responsive web application for a boutique coffee shop. Designed to maximize walk-ins and online orders, it features a dynamic categorized menu, an interactive shopping cart, behavioral marketing triggers (like an exit-intent discount modal), and an integrated admin dashboard for managing product inventory via local storage.',
    tech: [['Typescript ','bg-blue'],['Vite ','tc-yellow'],['React','tc-cyan'],['Tailwind CSS ','tc-green']],
    github: 'https://github.com/mahmoudrabea321/cafe',
    live: 'https://cafe-and-drink.pages.dev/',
  },{
    title: 'MidResturant', featured: true,
    img: mid,
    desc: 'A premium, modern, mobile-first high-converting restaurant website designed specifically for Egyptian and Arabic customers. It features a luxurious aesthetic, fast performance, and an elegant dark theme.',
    tech: [['Typescript ','bg-blue'],['Vite ','tc-yellow'],['React','tc-cyan'],['Tailwind CSS ','tc-green']],
    github: 'https://github.com/mahmoudrabea321/resturant-middle',
    live: 'https://resturant-middle.pages.dev/',
  },
  {
    title: 'FurniStore', featured: true,
    img: fernistore,
    desc: 'High-performance Single Page Application (SPA) for a premium modern furniture store. Designed with an elegant, responsive UI and developed entirely from scratch using clean, modular Vanilla JavaScript.',
    tech: [['Firebase ','tc-green'],['Vite ','tc-yellow'],['HTML-CSS-JavaScript','tc-cyan'],['Tailwind CSS ','tc-green']],
    github: 'https://github.com/mahmoudrabea321/almadena',
    live: 'https://almadena-en.pages.dev/',
  },
   {
    title: 'Aura Minimal Chic', featured: true,
    img: wear,
    desc: 'Aura Minimal Chic is a modern, high-performance web application tailored for a premium online e-commerce experience. It features an elegant minimal UI design with seamless transitions, interactive shopping cart capabilities, and a fully responsive layout that provides a premium shopping experience across all devices.',
    tech: [['Firebase ','tc-green'],['Vite ','tc-yellow'],['React','tc-cyan'],['Tailwind CSS ','tc-green'],['Typescript ','bg-blue']],
    github: 'https://github.com/mahmoudrabea321/women-s-aura',
    live: 'https://women-s-aura.pages.dev/',
  },
  {
    title: 'MedCare', featured: true,
    img: medi,
    desc: 'MedCare is a modern, fully responsive web application built for a medical clinic. It provides a seamless and intuitive user experience for patients to explore available medical services, access clinic contact information, and securely book appointments online. The application features a dynamic, multi-step appointment booking system that integrates directly with a real-time NoSQL database, ensuring patient data is stored securely using robust security rules',
    tech: [['Firebase ','tc-green'],['Vite ','tc-yellow'],['React','tc-cyan'],['Tailwind CSS ','tc-green'],['Typescript ','bg-blue']],
    github: 'https://github.com/mahmoudrabea321/medicare',
    live: 'https://medicare.pages.dev/',
  },
  {
    title: 'E-Store', featured: true,
    img: estoreImg,
    desc: 'Full-stack MERN e-commerce with product management, shopping cart, and order system.',
    tech: [['MongoDB','tc-green'],['Express','tc-yellow'],['React','tc-cyan'],['Node.js','tc-green']],
    github: 'https://github.com/mahmoudrabea321/clothesStore',
    live: 'https://clothesstore-gpmk.onrender.com',
  },
  {
    title: 'Burger Builder', featured: true,
    img: burgerImg,
    desc: 'A full-stack, mobile-first e-commerce web application inspired by premium fast-food brands. It features a high-conversion, modern UI with a dynamic shopping cart system and an integrated admin dashboard for real-time order management. Built to deliver a seamless food ordering experience with fluid animations and responsive design.',
    tech: [['React 18','tc-gray'],['TypeScript','tc-cyan'],['Vite','tc-green'],['Tailwind CSS','tc-green'],['Node.js','tc-green'],['Express','tc-yellow']],
    github: 'https://github.com/mahmoudrabea321/Burger-',
    live: 'https://flame-grilled.pages.dev/',
  },
  {
    title: 'Aura Home', featured: true,
    img: decore,
    desc: 'A modern, high-conversion e-commerce web application built for a luxury home decor brand. Fully localized in Arabic (RTL), the platform focuses on user experience and Conversion Rate Optimization (CRO). It features smooth page transitions, a dynamic shopping cart with a free-shipping motivator, and an intuitively designed admin dashboard with full CRUD operations for product management right from the browser.',
    tech: [['Vite ','tc-yellow'],['React ','tc-cyan'],['Tailwind CSS ','tc-green'],['Typescript ','bg-blue']],
    github: 'https://github.com/mahmoudrabea321/home-decore',
    live: 'https://home-decore.pages.dev/',
  },
  {
    title: 'Zelia', featured: false,
    img: zeliaImg,
    desc: 'E-commerce app with auth, product management, shopping cart, and PayPal payments.',
    tech: [['React','tc-cyan'],['Node.js','tc-green'],['Express','tc-yellow'],['MongoDB','tc-green']],
    github: 'https://github.com/mahmoudrabea321/e-commerce-app-frontend',
    live: 'https://zelia.pages.dev/',
  },
  {
    title: 'JotNote', featured: false,
    img: jotnoteImg,
    desc: 'Full-stack note-taking app to create, edit, and manage personal notes with a clean UI.',
    tech: [['React','tc-cyan'],['Node.js','tc-green'],['MongoDB','tc-green'],['Tailwind','tc-cyan']],
    github: 'https://github.com/mahmoudrabea321/Note-Book-frontend',
    live: 'https://jotnote.pages.dev/',
  },
  {
    title: 'LYNX', featured: false,
    img: lynxImg,
    desc: 'Full WooCommerce store with product listings, cart, checkout, and payment integration.',
    tech: [['WordPress','tc-purple'],['WooCommerce','tc-purple'],['PHP','tc-gray']],
    github: null,
    live: null,
  },
  {
    title: 'Weather App', featured: false,
    img: weatherImg,
    desc: 'Real-time weather app showing temperature and conditions for any city worldwide.',
    tech: [['JavaScript','tc-yellow'],['HTML','tc-gray'],['CSS','tc-gray'],['API','tc-cyan']],
    github: 'https://github.com/mahmoudrabea321/Tempature-app',
    live: 'https://tempature-app.vercel.app/',
  },
]

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="projects-wrap" id="projects" ref={ref}>
      <div className="section">
        <div className="section-label reveal">
          <span className="section-label-text">04. Projects</span>
          <div className="section-label-line" />
        </div>
        <h2 className="section-h2 reveal" style={{ transitionDelay: '0.1s' }}>Things I've Built</h2>
        <p className="section-sub reveal" style={{ transitionDelay: '0.15s' }}>
          A selection of projects across full-stack development, e-commerce, and WordPress solutions.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="project-card reveal"
              style={{ transitionDelay: `${0.05 * i}s` }}
            >
              {/* IMAGE THUMBNAIL */}
              <div className="project-thumb">
                <img src={p.img} alt={p.title} className="project-thumb-img" />
                <div className="project-thumb-overlay" />
                {p.featured && <div className="project-featured">Featured</div>}
                <div className="project-hover-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-btn gh">GitHub</a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="proj-btn live">Live ↗</a>
                  )}
                </div>
              </div>

              {/* CARD BODY */}
              <div className="project-body">
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-techs">
                  {p.tech.map(([name, cls]) => (
                    <span key={name} className={`tech ${cls}`}>{name}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta reveal">
          <a
            href="https://github.com/mahmoudrabea321?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="projects-more-btn"
          >
            See all repositories on GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}
