import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search, SlidersHorizontal, ArrowUpRight } from 'lucide-react'
import { plants } from '../data/plants'
import { categories } from '../data/categories'
import PlantCard from '../components/PlantCard'
import PlantCategoryCard from '../components/PlantCategoryCard'
import '../styles/plant-categories.css'

export default function Plants() {
  const [params] = useSearchParams()
  const requestedCategory = params.get('category')
  const initialCategory = categories.some(item => item.name === requestedCategory) ? requestedCategory : 'All plants'
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(initialCategory)
  useEffect(() => {
    setCategory(categories.some(item => item.name === requestedCategory) ? requestedCategory : 'All plants')
  }, [requestedCategory])
  const selectCategory = name => {
    setCategory(name)
    document.getElementById('plant-catalogue')?.scrollIntoView({ behavior: 'smooth' })
  }
  const filtered = useMemo(() => plants.filter(p => (category === 'All plants' || p.category === category) && `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(query.toLowerCase())), [category, query])
  return <><section className="page-hero page-hero-plants"><div className="container"><span className="eyebrow">THE PLANT COLLECTION</span><h1>Find a little <em>green.</em></h1><p>Browse the sample collection and enquire about the plants that fit your space.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Plants</span></div></div></section>
    <section className="section-pad plant-category-section"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">SHOP BY CATEGORY</span><h2>Find the right <em>plants.</em></h2></div><p>Choose a category to explore the catalogue, or start an order enquiry for that category.</p></div>
      <div className="category-grid">{categories.map((item, index) => <PlantCategoryCard key={item.name} category={item} index={index} selected={category === item.name} onSelect={selectCategory}/>)}</div>
    </div></section>
    <section className="section-pad" id="plant-catalogue"><div className="container">
      <div className="catalogue-tools"><div className="search-box"><Search size={18}/><input aria-label="Search plants" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search plant names or categories…"/></div><div className="filter-label"><SlidersHorizontal size={17}/> Filter by</div><select aria-label="Filter category" value={category} onChange={e => setCategory(e.target.value)}><option>All plants</option>{categories.map(c => <option key={c.name}>{c.name}</option>)}</select><span className="results-count">{filtered.length} plants shown</span></div>
      {filtered.length ? <div className="plant-grid catalogue-grid">{filtered.map(plant => <PlantCard key={plant.id} plant={plant}/>)}</div> : <div className="empty-state"><Search size={28}/><h3>No plants found</h3><p>Try another search term or choose a different category.</p><button className="button button-dark" onClick={() => {setQuery('');setCategory('All plants')}}>Clear filters</button></div>}
      <div className="catalogue-note"><p>Catalogue imagery and names are sample content. Please enquire to confirm actual nursery stock, varieties and prices.</p><Link className="text-link" to="/order">Request plant availability <ArrowUpRight size={17}/></Link></div>
    </div></section>
  </>
}