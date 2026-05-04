import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>Built by <span>Mahmoud Rabea</span> · {new Date().getFullYear()}</p>
        <small>React · Vite · Pure CSS</small>
      </footer>
    </>
  )
}

export default App
