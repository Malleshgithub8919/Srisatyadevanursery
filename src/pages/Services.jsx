import { Link } from 'react-router-dom'
import { ArrowUpRight, Sprout, Trees, Flower2, Truck, House, Tractor, CheckCircle2 } from 'lucide-react'

const services = [
  { icon: Trees, title: 'Landscaping enquiries', text: 'Discuss plant choices for outdoor areas, pathways and larger green spaces.' },
  { icon: Flower2, title: 'Garden design inspiration', text: 'Explore plant combinations and ideas for creating a garden that feels like you.' },
  { icon: Sprout, title: 'Garden maintenance guidance', text: 'Ask about plant care needs and keeping your garden healthy through the seasons.' },
  { icon: Truck, title: 'Bulk plant supply', text: 'Share your plant list and estimated quantities for a supply enquiry.' },
  { icon: House, title: 'Home garden setup', text: 'Find plant options for balconies, courtyards, patios and home gardens.' },
  { icon: Tractor, title: 'Farm & plantation enquiries', text: 'Discuss sapling types, quantities and requirements for a larger growing project.' },
]
export default function Services() {
  return <><section className="page-hero page-hero-services"><div className="container"><span className="eyebrow">GROWING SUPPORT</span><h1>Ideas for every <em>green space.</em></h1><p>Tell us about your garden or growing project and enquire about suitable plant options.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Services</span></div></div></section>
    <section className="section-pad"><div className="container"><div className="section-heading"><div><span className="eyebrow">HOW WE CAN HELP</span><h2>From one plant to <em>many.</em></h2></div><p>These are enquiry categories for the nursery. Confirm which services are currently available before publishing the site.</p></div><div className="services-grid">{services.map(({icon: Icon, title, text}, i) => <article className="service-card" key={title}><span className="service-icon"><Icon size={25}/></span><span className="service-index">0{i+1}</span><h3>{title}</h3><p>{text}</p><Link to="/order" className="text-link">Make an enquiry <ArrowUpRight size={16}/></Link></article>)}</div></div></section>
    <section className="service-feature"><div className="service-feature-image"></div><div className="container"><div className="service-feature-copy"><span className="eyebrow">PLANNING A BIGGER PROJECT?</span><h2>Let's talk about<br/><em>your plant list.</em></h2><p>For bulk or project enquiries, share your plant types, approximate quantities, location and timeline.</p><ul><li><CheckCircle2/> Plant names or categories</li><li><CheckCircle2/> Approximate quantities</li><li><CheckCircle2/> Delivery location and timing</li></ul><Link className="button button-dark" to="/order">Send your requirements <ArrowUpRight size={17}/></Link></div></div></section>
  </>
}