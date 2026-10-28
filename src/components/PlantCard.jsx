import { ArrowUpRight, Sun, Droplets } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PlantCard({ plant }) {
  return <article className="plant-card">
    <Link to={`/plants/${plant.id}`} className="plant-image"><img src={plant.image} alt={plant.name} loading="lazy"/><span className="plant-tag">{plant.category}</span><span className="image-arrow"><ArrowUpRight size={18}/></span></Link>
    <div className="plant-card-content"><p className="eyebrow">{plant.category}</p><h3>{plant.name}</h3><p className="plant-description">{plant.description}</p>
      <div className="plant-care"><span><Sun size={14}/>{plant.sunlight}</span><span><Droplets size={14}/>{plant.watering}</span></div>
      <div className="plant-card-bottom"><strong>{plant.price ? `₹${plant.price}` : 'Price on request'}</strong><Link to={`/plants/${plant.id}`}>View plant <ArrowUpRight size={15}/></Link></div>
    </div>
  </article>
}