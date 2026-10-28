import { Link } from 'react-router-dom'
import { Leaf, MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react'
import { business } from '../config/business'

export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand">
        <Link to="/" className="brand brand-light" aria-label={business.name}><img className="brand-logo" src="/images/sri-satyadeva-logo.png" alt="" /></Link>
        <p>{business.tagline}</p>
        <div className="socials">
          {business.socialLinks.instagram && <a href={business.socialLinks.instagram} aria-label="Instagram"><Instagram size={18}/></a>}
          {business.socialLinks.facebook && <a href={business.socialLinks.facebook} aria-label="Facebook"><Facebook size={18}/></a>}
          {business.socialLinks.youtube && <a href={business.socialLinks.youtube} aria-label="YouTube"><Youtube size={18}/></a>}
        </div>
      </div>
      <div><h4>Explore</h4><Link to="/plants">Plant Collection</Link><Link to="/services">Nursery Services</Link><Link to="/gallery">Gallery</Link><Link to="/about">About Us</Link></div>
      <div><h4>Customer Care</h4><Link to="/order">Order Enquiry</Link><Link to="/contact">Contact Us</Link><a href="#faq">FAQs</a></div>
      <div className="footer-contact"><h4>Our Contact</h4><p><MapPin size={16}/><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`} target="_blank" rel="noreferrer">{business.address}</a></p><p><Phone size={16}/><a href={`tel:${business.phoneNumber.replace(/[^\d+]/g, '')}`}>{business.phoneNumber}</a></p><p><Mail size={16}/><a href={`mailto:${business.email}`}>{business.email}</a></p><p><span className="footer-contact-spacer"/>{business.openingHours}</p><Link className="footer-link" to="/contact">Talk to our team <ArrowUpRight size={15}/></Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span><span>Made for greener spaces <Leaf size={14}/></span></div>
  </footer>
}