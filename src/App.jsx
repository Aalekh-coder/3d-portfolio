import Testimonials from './sections/Testimonials'
import About from './sections/About'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'
import Contact from "./sections/Contact.jsx"
import HeroExperience from "./components/HeroExperience.jsx"


const App = () => {
  return (
    <div className=''>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App