import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, ChevronLeft, ChevronRight, Sprout, Truck, HeartHandshake, Leaf, MoveUpRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { plants } from '../data/plants'
import { business, getWhatsAppUrl } from '../config/business'
import PlantCard from '../components/PlantCard'
import '../styles/home-gallery.css'

const heroSlides = [
  { src: '/images/nursery-kadiyam-aerial.jpg', label: 'Aerial view of the nursery office' },
  { src: '/images/nursery-aerial-wide.jpg', label: 'A wide aerial view of Kadiyam nursery gardens' },
  { src: '/images/nursery-aerial-overhead.jpg', label: 'Overhead view of the nursery plant rows' },
  { src: '/images/nursery-entrance-opening.jpg', label: 'Sri Satyadeva Nursery entrance' },
  { src: '/images/nursery-aerial-overview.jpg', label: 'Aerial view of Sri Satyadeva Nursery' },
  { src: '/images/sri-satyadeva-nursery-aerial.png', label: 'Sri Satyadeva Nursery from above' },
  { src: '/images/flower-beds.png', label: 'Flowering plants growing in rows' },
  { src: '/images/nursery-landscape.png', label: 'Sri Satyadeva Nursery grounds' },
  { src: '/images/nursery-floral-display.png', label: 'Colourful display at the nursery' },
  { src: '/images/aerial-nursery-overview.png', label: 'Aerial nursery overview' },
  { src: '/images/colorful-shrubs.png', label: 'Rows of colourful nursery shrubs' },
  { src: '/images/landscape-flowerbed.png', label: 'Colourful landscape flowerbed' },
  { src: '/images/aerial-nursery-plant-rows.png', label: 'Aerial view of nursery plant rows' },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHeroPaused, setIsHeroPaused] = useState(false)
  const whatsappUrl = getWhatsAppUrl(`Hello ${business.name}, I would like to enquire about your plants.`)

  useEffect(() => {
    if (isHeroPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => {
      setActiveSlide(current => (current + 1) % heroSlides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [isHeroPaused])

  const showPreviousSlide = () => setActiveSlide(current => (current - 1 + heroSlides.length) % heroSlides.length)
  const showNextSlide = () => setActiveSlide(current => (current + 1) % heroSlides.length)

  return <>
    <section className="hero" aria-label="Sri Satyadeva Nursery photo slideshow" onMouseEnter={() => setIsHeroPaused(true)} onMouseLeave={() => setIsHeroPaused(false)} onFocusCapture={() => setIsHeroPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setIsHeroPaused(false) }}>
      <div className="hero-slides" aria-hidden="true">{heroSlides.map((slide, index) => <img className={`hero-slide${index === activeSlide ? ' is-active' : ''}`} key={slide.src} src={slide.src} alt="" loading={index === 0 ? 'eager' : 'lazy'}/>)}</div>
      <div className="hero-shade"></div>
      <div className="container hero-content">
        <div className="hero-kicker"><span></span> {business.type} · 150-acre nursery</div>
        <h1>Grow your green<br/><em>world.</em></h1>
        <p>Explore quality flowering, fruit, ornamental, avenue, indoor and outdoor plants for homes, gardens, landscaping projects, commercial spaces and wholesale. Visit our 150-acre nursery in Kadiyam to discuss your requirements.</p>
        <div className="hero-actions"><Link className="button button-cream" to="/plants">Explore plants <ArrowUpRight size={18}/></Link><Link className="button button-glass" to="/order">Enquire about bulk orders</Link>{whatsappUrl && <a className="button button-glass" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Message us on WhatsApp</a>}</div>
        <div className="hero-note"><span className="hero-note-icon"><Leaf size={18}/></span><span><strong>{business.rating} ★ · {business.reviewCount} Google reviews</strong><small>{business.proprietor}</small></span></div>
      </div>
      <a href="#categories" className="hero-scroll"><span>Scroll to explore</span><ArrowDown size={16}/></a>
      <div className="hero-controls" aria-label="Slideshow controls">
        <button type="button" onClick={showPreviousSlide} aria-label="Show previous photo"><ChevronLeft size={17}/></button>
        <div className="hero-slide-indicators">{heroSlides.map((slide, index) => <button type="button" key={slide.src} className={index === activeSlide ? 'is-active' : ''} onClick={() => setActiveSlide(index)} aria-label={`Show photo ${index + 1}: ${slide.label}`} aria-pressed={index === activeSlide}/>)}</div>
        <span className="hero-slide-count">{String(activeSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</span>
        <button type="button" onClick={showNextSlide} aria-label="Show next photo"><ChevronRight size={17}/></button>
      </div>
    </section>

    <section className="home-video-section section-pad"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">TAKE A LOOK AROUND</span><h2>Visit Sri Satyadeva <em>Nursery.</em></h2></div><p>See our nursery, growing spaces and plant collection in this short video.</p></div>
      <video className="home-nursery-video" controls playsInline preload="metadata" poster="/images/sri-satyadeva-office-banner.jpg" aria-label="Video tour of Sri Satyadeva Nursery">
        <source src="/videos/sri-satyadeva-nursery-tour.mp4" type="video/mp4"/>
        Your browser does not support HTML video.
      </video>
    </div></section>

    <section className="intro-section section-pad">
      <div className="container intro-grid">
        <div className="intro-label"><span className="eyebrow">WELCOME TO OUR NURSERY</span><span className="vertical-line"></span><span className="muted-small">Growing good things</span></div>
        <div className="intro-copy"><span className="nursery-native-name">{business.nativeName}</span><h2>Every green corner<br/>starts with <em>one plant.</em></h2><p>Whether you're refreshing a room, creating a backyard garden or planning a larger plantation, discover plants that help your space feel more alive.</p><Link className="text-link" to="/about">Get to know us <ArrowUpRight size={17}/></Link></div>
        <div className="intro-image-wrap"><img src="/images/nursery-home-feature.png" alt="Rows of plants and nursery growing areas at Sri Satyadeva Nursery" loading="lazy"/><div className="image-caption"><Leaf size={17}/><span>Make room for green.</span></div></div>
      </div>
    </section>

    <section className="featured-section section-pad"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">A FEW GREEN FAVOURITES</span><h2>Meet your next <em>plant.</em></h2></div><p>Explore a selection from our sample catalogue. Contact us to confirm actual varieties and availability.</p></div>
      <div className="plant-grid">{plants.slice(0, 4).map(plant => <PlantCard key={plant.id} plant={plant}/>)}</div>
      <div className="center-action"><Link className="button button-dark" to="/plants">Explore the collection <ArrowUpRight size={17}/></Link></div>
    </div></section>

    <section className="home-gallery-section section-pad"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">FRESH FROM OUR NURSERY</span><h2>A closer look at <em>what grows.</em></h2></div><p>Explore the plants and greenery growing at Sri Satyadeva Nursery.</p></div>
      <div className="home-gallery-grid">
        <Link className="home-gallery-card" to="/plants">
          <img src="/images/variegated-shrubs.png" alt="Rows of variegated shrubs growing at the nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>Foliage plants</small><strong>Variegated shrubs</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/plants">
          <img src="/images/orange-fruit-plants.png" alt="Potted orange fruit plants displayed at the nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>Fruit plants</small><strong>Potted orange plants</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/plants">
          <img src="/images/colorful-foliage.png" alt="Colourful ornamental foliage at the nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>Ornamental plants</small><strong>Colourful nursery foliage</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/sri-satyadeva-office-banner.jpg" alt="Sri Satyadeva Nursery grounds and Srikanth Office" loading="lazy"/>
          <span className="home-gallery-caption"><small>Our nursery</small><strong>Visit Sri Satyadeva Nursery</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/sri-satyadeva-office-entrance.jpg" alt="Aerial view of the Sri Satyadeva Nursery office entrance" loading="lazy"/>
          <span className="home-gallery-caption"><small>Our nursery</small><strong>Welcome to our nursery</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/nursery-aerial-grounds.jpg" alt="Aerial view of the nursery grounds and growing areas" loading="lazy"/>
          <span className="home-gallery-caption"><small>Our nursery</small><strong>Nursery gardens from above</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/nursery-tree-planting-ceremony.jpg" alt="Visitors planting a tree at the nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>Nursery moments</small><strong>Growing greener together</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/nursery-specimen-tree-1.jpg" alt="Large specimen trees for gardens and landscapes" loading="lazy"/>
          <span className="home-gallery-caption"><small>Specimen trees</small><strong>Large trees for landscapes</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/nursery-palm-trees.jpg" alt="Mature palms growing at Sri Satyadeva Nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>Palm trees</small><strong>Mature palms ready to plant</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/cassia-fistula-bloom.jpg" alt="Golden flowers on a Cassia fistula tree" loading="lazy"/>
          <span className="home-gallery-caption"><small>Flowering trees</small><strong>Cassia fistula in bloom</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/satyadeva-golden-chain.jpg" alt="Golden chain flowers growing among green leaves" loading="lazy"/>
          <span className="home-gallery-caption"><small>Flowering trees</small><strong>Satyadeva golden chain</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/aerial-nursery-overview.png" alt="Aerial view of nursery growing areas and plant rows" loading="lazy"/>
          <span className="home-gallery-caption"><small>Our nursery</small><strong>A view across the nursery</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/flower-beds.png" alt="Flowering nursery beds with plants growing in rows" loading="lazy"/>
          <span className="home-gallery-caption"><small>Flowering plants</small><strong>Colour across the nursery</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/nursery-landscape.png" alt="The nursery entrance and flowering growing spaces" loading="lazy"/>
          <span className="home-gallery-caption"><small>At the nursery</small><strong>Our nursery grounds</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/nursery-floral-display.png" alt="Colourful flower display at Sri Satyadeva Nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>Flowering plants</small><strong>A colourful nursery display</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/nursery-overview.png" alt="Wide aerial view of the nursery grounds and greenhouses" loading="lazy"/>
          <span className="home-gallery-caption"><small>Our nursery</small><strong>Growing spaces from above</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/flowering-shrubs.png" alt="Flowering shrubs growing at the nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>Flowering plants</small><strong>Flowering nursery shrubs</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/landscape-flowerbed.png" alt="Colourful flower beds across the nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>Garden displays</small><strong>Flower beds in bloom</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/aerial-nursery-plant-rows.png" alt="Aerial view of green plant rows and nursery delivery paths" loading="lazy"/>
          <span className="home-gallery-caption"><small>Our nursery</small><strong>Rows of nursery greenery</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/kadiyam-flowering-plants.png" alt="Colourful flowering plants growing in nursery pots" loading="lazy"/>
          <span className="home-gallery-caption"><small>Flowering plants</small><strong>Colourful blooms at the nursery</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/kadiyam-fruit-plants.png" alt="Young fruit trees growing in rows at the nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>Fruit plants</small><strong>Fruit trees ready to grow</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/kadiyam-ornamental-plants.png" alt="Ornamental plants and colourful foliage at the nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>Ornamental plants</small><strong>Foliage for greener spaces</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/sri-satyadeva-nursery-aerial.png" alt="Aerial view of Sri Satyadeva Nursery and its plant rows" loading="lazy"/>
          <span className="home-gallery-caption"><small>Our nursery</small><strong>Our nursery grounds</strong><ArrowUpRight size={18}/></span>
        </Link>
        <Link className="home-gallery-card" to="/gallery">
          <img src="/images/kadiyam-nursery-plant-rows.png" alt="Green plants arranged along pathways at the nursery" loading="lazy"/>
          <span className="home-gallery-caption"><small>At the nursery</small><strong>Explore our growing spaces</strong><ArrowUpRight size={18}/></span>
        </Link>
      </div>
    </div></section>

    <section className="values-section section-pad"><div className="container values-grid">
      <div className="values-image"><img src="/images/kadiyam-ornamental-plants.png" alt="Ornamental plants and colourful foliage at Sri Satyadeva Nursery" loading="lazy"/><div className="values-stamp"><Sprout size={25}/><span>Grow at<br/>your pace</span></div></div>
      <div className="values-copy"><span className="eyebrow">THE WAY WE GROW</span><h2>Good plants.<br/><em>Thoughtful choices.</em></h2><p>Every space is different. We want to help you find plants that suit your garden, your plans and the care you can give them.</p>
        <div className="value-list"><div><span><Check size={17}/></span><div><strong>Choices for every space</strong><p>Explore options for indoor, outdoor and larger growing spaces.</p></div></div><div><span><Check size={17}/></span><div><strong>Guidance when you need it</strong><p>Ask about plant varieties, quantities and care requirements.</p></div></div><div><span><Check size={17}/></span><div><strong>Enquiries made simple</strong><p>Share your requirements directly through our order enquiry form.</p></div></div></div>
        <Link className="text-link" to="/services">Discover nursery services <ArrowUpRight size={17}/></Link>
      </div>
    </div></section>

    <section className="service-strip section-pad"><div className="container"><div className="section-heading"><div><span className="eyebrow">MORE THAN PLANTS</span><h2>Let's grow something <em>together.</em></h2></div><Link className="text-link" to="/services">View services <ArrowUpRight size={17}/></Link></div><div className="service-mini-grid"><div><span><Sprout/></span><h3>Garden inspiration</h3><p>Explore ideas for greener everyday spaces.</p></div><div><span><Truck/></span><h3>Bulk plant enquiries</h3><p>Tell us about your quantity and project needs.</p></div><div><span><HeartHandshake/></span><h3>Personal guidance</h3><p>Contact us to discuss your plant requirements.</p></div></div></div></section>

    <section className="cta-section"><div className="cta-bg"></div><div className="container cta-content"><span className="eyebrow">YOUR NEXT GREEN CHAPTER</span><h2>Have a place for<br/><em>something growing?</em></h2><p>Tell us what you have in mind. We'll help you start with a plant enquiry.</p><Link className="button button-cream" to="/order">Start a plant enquiry <MoveUpRight size={18}/></Link></div></section>
  </>
}