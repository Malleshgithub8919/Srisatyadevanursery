import { Link } from 'react-router-dom'
import { ArrowUpRight, Leaf, Heart, Sprout, ArrowRight } from 'lucide-react'
import '../styles/about-responsive.css'

export default function About() {
  return <><section className="page-hero page-hero-about"><div className="container"><span className="eyebrow">OUR GREEN STORY</span><h1>A little more nature,<br/><em>every day.</em></h1><p>Visit our 150-acre nursery in Kadiyam and explore plants for greener spaces.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>About Us</span></div></div></section>
    <section className="section-pad"><div className="container about-grid"><div className="about-image"><img src="/images/sri-satyadeva-nursery-aerial.png" alt="Aerial view of Sri Satyadeva Nursery and its growing areas"/><div className="about-image-caption"><Leaf/><span>Grow with care</span></div></div><div className="about-copy"><span className="eyebrow">ABOUT SRI SATYADEVA NURSERY</span><h2>Helping you make space for <em>green.</em></h2><p>Our 150-acre nursery in Kadiyam offers an extensive collection of quality flowering, fruit, ornamental, avenue, indoor and outdoor plants for homes, gardens, landscaping projects, residential properties, commercial spaces and institutions.</p><p>Visit Sri Satyadeva Nursery to explore our plant collection, discuss your requirements and get assistance from our team. Contact us to confirm current varieties, sizes and availability.</p><Link className="button button-dark" to="/plants">Explore plant collection <ArrowUpRight size={17}/></Link></div></div></section>
    <section className="about-values section-pad"><div className="container"><div className="section-heading"><div><span className="eyebrow">WHAT MATTERS</span><h2>Rooted in <em>simple values.</em></h2></div></div><div className="value-cards"><article><span><Sprout/></span><h3>Growing thoughtfully</h3><p>Helping visitors explore plant choices for different spaces and purposes.</p></article><article><span><Heart/></span><h3>People first</h3><p>Making plant enquiries straightforward and easy to follow up.</p></article><article><span><Leaf/></span><h3>Greener spaces</h3><p>Encouraging people to bring more natural beauty into everyday life.</p></article></div></div></section>
    <section className="section-pad" style={{ background: '#f4f1e8' }}>
      <div className="container about-approach-grid">
        <div>
          <span className="eyebrow">OUR APPROACH</span>
          <h2 style={{ marginTop: 12 }}>Planting ideas for real homes and real routines.</h2>
          <p>We help make plant shopping approachable, whether you are filling a balcony, decorating a courtyard, or starting a small indoor collection. Our guidance is practical, calming and focused on long-term growth.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16, marginTop: 26 }}>
            <div style={{ background: '#fff', padding: '20px 18px', border: '1px solid #e3e4d7', borderRadius: 14 }}>
              <strong style={{ display: 'block', fontSize: 28, color: '#173d2b', marginBottom: 6 }}>1K+</strong>
              <span style={{ color: '#6c766d', fontSize: 12 }}>plant ideas explored</span>
            </div>
            <div style={{ background: '#fff', padding: '20px 18px', border: '1px solid #e3e4d7', borderRadius: 14 }}>
              <strong style={{ display: 'block', fontSize: 28, color: '#173d2b', marginBottom: 6 }}>150+</strong>
              <span style={{ color: '#6c766d', fontSize: 12 }}>varieties available</span>
            </div>
            <div style={{ background: '#fff', padding: '20px 18px', border: '1px solid #e3e4d7', borderRadius: 14 }}>
              <strong style={{ display: 'block', fontSize: 28, color: '#173d2b', marginBottom: 6 }}>100%</strong>
              <span style={{ color: '#6c766d', fontSize: 12 }}>care-first guidance</span>
            </div>
          </div>
        </div>

        <div style={{ background: '#173d2b', color: '#eef6ea', padding: '28px 24px', borderRadius: 22, boxShadow: '0 24px 50px rgba(15, 41, 27, 0.12)' }}>
          <p style={{ color: '#e8efe5', fontSize: 16, lineHeight: 1.8 }}>“Every plant has a place. Our job is to make that place feel easy, beautiful and alive.”</p>
          <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
            <div>
              <strong style={{ display: 'block', fontSize: 18 }}>Sri Satyadeva Nursery</strong>
              <span style={{ color: '#d2ddd0', fontSize: 12 }}>Garden care & plant guidance</span>
            </div>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', fontWeight: 700 }}>
              Visit us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
}