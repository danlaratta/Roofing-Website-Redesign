import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import AboutSection from './pages/AboutSection'
import RoofingSection from './pages/RoofingSection'
import SidingSection from './pages/SidingSection'
import ContactSection from './pages/ContactSection'

function App() {
  return (
    <div className="App">
      <Navbar />

      <HeroSection />
      <AboutSection  />
      <RoofingSection />
      <SidingSection />
      <ContactSection />
    </div>
  )
}

export default App
