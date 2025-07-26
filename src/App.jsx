import Testimonials from './sections/Testimonials'
import About from './sections/About'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'

const App = () => {
  return (
    <div className=''>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonials />
    </div>
  )
}

export default App