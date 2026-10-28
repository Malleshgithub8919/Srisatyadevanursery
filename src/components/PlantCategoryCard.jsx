import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PlantCategoryCard({ category, index = 0 }) {
  return <Link to={`/plants?category=${encodeURIComponent(category.name)}`} className="category-card reveal" style={{ '--delay': `${index * 70}ms` }}>
    <img src={category.image} alt={category.name} loading="lazy" />
    <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
    <div className="category-overlay"><span>{category.count}</span><h3>{category.name}</h3><p>{category.description}</p><span className="round-arrow"><ArrowUpRight size={18}/></span></div>
  </Link>
}