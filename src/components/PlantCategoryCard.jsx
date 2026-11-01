import { ArrowUpRight, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PlantCategoryCard({ category, index = 0, selected = false, onSelect }) {
  return <article className={`category-card category-choice-card reveal${selected ? ' is-selected' : ''}`} style={{ '--delay': `${index * 70}ms` }}>
    <img src={category.image} alt={category.name} loading="lazy" />
    <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
    <div className="category-overlay"><span>{category.count}</span><h3>{category.name}</h3><p>{category.description}</p><div className="category-choice-actions"><button type="button" className="category-view-button" onClick={() => onSelect(category.name)}>View plants <ArrowUpRight size={15}/></button><Link className="category-order-button" to={`/order?category=${encodeURIComponent(category.name)}`}><ShoppingBag size={15}/> Get quote</Link></div></div>
  </article>
}