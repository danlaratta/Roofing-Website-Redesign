import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import AboutSection from './pages/AboutSection'
import RoofingSection from './pages/RoofingSection'
import SidingSection from './pages/SidingSection'
import ContactSection from './pages/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />

      <HeroSection />
      <AboutSection  />
      <RoofingSection />
      <SidingSection />
      <ContactSection />

      <Footer />
    </div>
  )
}

export default App
