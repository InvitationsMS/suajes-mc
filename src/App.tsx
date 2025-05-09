import './App.css'

import NavBar from './components/organisms/NavBar'
import Hero from './components/organisms/Hero'
import Gallery from './components/organisms/Gallery'
import Services from './components/organisms/Services'
import Information from './components/organisms/Information'
import Location from './components/organisms/Location'
import ContactUs from './components/organisms/ContactUs'
import Whatsapp from './components/molecules/Whatsapp'
import AboutUs from './components/organisms/AboutUs'

function App() {

  return (
    <>
      <Whatsapp />
      <NavBar />
      <Hero />
      <Gallery />
      <Services />
      <Information />
      <Location />
      <AboutUs />
      <ContactUs />
    </>
  )
}

export default App
