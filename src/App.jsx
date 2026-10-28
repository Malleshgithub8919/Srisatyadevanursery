import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import Plants from './pages/Plants.jsx'
import PlantDetails from './pages/PlantDetails.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import OrderForm from './components/OrderForm.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}
function OrderPage() {
  return <><section className="page-hero page-hero-order"><div className="container"><span className="eyebrow">LET'S MAKE A PLANT LIST</span><h1>Your green journey<br/><em>starts here.</em></h1><p>Share your details and the plants you're looking for. We'll prepare an enquiry message for WhatsApp.</p></div></section><section className="section-pad order-page"><div className="container order-layout"><div className="order-aside"><span className="eyebrow">PLANT ORDER ENQUIRY</span><h2>Tell us what you <em>need.</em></h2><p>From a few plants for home to a larger planting plan, list your requirements below.</p><div className="order-aside-photo"><img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85" alt="Green potted plants" loading="lazy"/></div><div className="order-aside-note"><span>01</span><p><strong>Share your details</strong><br/>Add your contact and delivery information.</p></div><div className="order-aside-note"><span>02</span><p><strong>List your plants</strong><br/>Choose categories, plant names and quantities.</p></div><div className="order-aside-note"><span>03</span><p><strong>Send your enquiry</strong><br/>Review the message in WhatsApp and press Send.</p></div></div><div className="order-form-wrap"><OrderForm/></div></div></section></>
}
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return <><ScrollToTop/><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/plants" element={<Plants/>}/><Route path="/plants/:id" element={<PlantDetails/>}/><Route path="/services" element={<Services/>}/><Route path="/about" element={<About/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/contact" element={<Contact/>}/><Route path="/order" element={<OrderPage/>}/><Route path="*" element={<Home/>}/></Routes></main><Footer/><WhatsAppButton/><button className="back-to-top" aria-label="Back to top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><ArrowUp size={17}/></button></>
}