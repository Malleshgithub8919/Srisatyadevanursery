import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Sun, Droplets, MessageCircle, Sprout } from 'lucide-react'
import { plants } from '../data/plants'
import { getWhatsAppUrl, business } from '../config/business'

export default function PlantDetails() {
  const { id } = useParams()
  const plant = plants.find(p => p.id === id)
  if (!plant) return <section className="section-pad"><div className="container empty-state"><h2>Plant not found</h2><Link className="button button-dark" to="/plants">Back to plants</Link></div></section>
  const url = getWhatsAppUrl(`Hello ${business.name}, I would like to enquire about:\nPlant: ${plant.name}\nCategory: ${plant.category}\nPlease confirm availability and price.`)
  return <section className="section-pad detail-section"><div className="container"><Link to="/plants" className="back-link"><ArrowLeft size={16}/> Back to collection</Link><div className="plant-detail"><div className="detail-image"><img src={plant.image} alt={plant.name}/><span>{plant.category}</span></div><div className="detail-copy"><span className="eyebrow">A LITTLE MORE ABOUT THIS PLANT</span><h1>{plant.name}</h1><p className="detail-description">{plant.description}</p><div className="detail-price">{plant.price ? `₹${plant.price}` : 'Price on request'}</div><p>Plant names and photos in this starter catalogue are examples. Contact the nursery to confirm exact varieties, sizes, availability and care advice.</p><div className="detail-care"><div><Sun/><span><small>Sunlight</small><strong>{plant.sunlight}</strong></span></div><div><Droplets/><span><small>Watering</small><strong>{plant.watering}</strong></span></div><div><Sprout/><span><small>Availability</small><strong>Confirm with nursery</strong></span></div></div><div className="detail-actions"><Link className="button button-dark" to="/order">Add to order enquiry <ArrowUpRight size={17}/></Link><a className="button button-outline" href={url || '/contact'} target={url ? '_blank' : undefined} rel={url ? 'noreferrer' : undefined}><MessageCircle size={17}/> Ask on WhatsApp</a></div></div></div></div></section>
}