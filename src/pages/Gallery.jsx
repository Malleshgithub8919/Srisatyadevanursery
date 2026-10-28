import { useState } from 'react'
import { X, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const photos = [
  { src: '/images/nursery-front.png', title: 'Welcome to Sri Satyadeva Nursery', type: 'Our nursery' },
  { src: '/images/flower-beds.png', title: 'Rows of colour in bloom', type: 'Flowering plants' },
  { src: '/images/nursery-aerial-delivery.png', title: 'A nursery built to grow', type: 'Our nursery' },
  { src: '/images/sculpted-topiary.png', title: 'Sculpted garden topiary', type: 'Topiary' },
  { src: '/images/red-camellia.png', title: 'A bright red camellia', type: 'Flowering plants' },
  { src: '/images/rose-garden.png', title: 'A garden full of roses', type: 'Flowering plants' },
  { src: '/images/nursery-overview.png', title: 'A view across the nursery', type: 'Our nursery' },
  { src: '/images/nursery-entrance.png', title: 'Visit our nursery', type: 'Our nursery' },
  { src: '/images/sculpted-tree.png', title: 'A statement sculpted tree', type: 'Topiary' },
  { src: '/images/evergreen-nursery.png', title: 'Evergreen plants ready to grow', type: 'Evergreen plants' },
  { src: '/images/pink-camellia.png', title: 'Pink camellia in bloom', type: 'Flowering plants' },
  { src: '/images/nursery-floral-display.png', title: 'A colourful nursery display', type: 'Nursery showcase' },
  { src: '/images/indoor-foliage.png', title: 'Lush foliage plants', type: 'Foliage plants' },
  { src: '/images/nursery-landscape.png', title: 'Greenery across the nursery', type: 'Our nursery' },
  { src: '/images/colorful-foliage.png', title: 'Colourful foliage for your space', type: 'Foliage plants' },
  { src: '/images/yellow-chrysanthemum.png', title: 'Golden chrysanthemums', type: 'Flowering plants' },
  { src: '/images/variegated-foliage.png', title: 'Beautiful variegated leaves', type: 'Foliage plants' },
  { src: '/images/nursery-display.png', title: 'A floral display at the nursery', type: 'Nursery showcase' },
  { src: '/images/palm-lined-drive.png', title: 'A palm-lined nursery pathway', type: 'Our nursery' },
  { src: '/images/golden-foliage-rows.png', title: 'Rows of golden foliage', type: 'Foliage plants' },
  { src: '/images/shade-house-plants.png', title: 'Plants growing in the shade house', type: 'Foliage plants' },
  { src: '/images/yellow-hibiscus.png', title: 'Yellow hibiscus in bloom', type: 'Flowering plants' },
  { src: '/images/landscape-flowerbed.png', title: 'A garden bed in bright colours', type: 'Garden displays' },
  { src: '/images/hanging-spider-plants.png', title: 'Hanging spider plants', type: 'Indoor plants' },
  { src: '/images/purple-foliage-trees.png', title: 'Purple foliage plants', type: 'Foliage plants' },
  { src: '/images/flowering-shrubs.png', title: 'Flowering shrubs across the nursery', type: 'Flowering plants' },
  { src: '/images/desert-rose-collection.png', title: 'Desert roses ready to bloom', type: 'Flowering plants' },
  { src: '/images/nursery-gardeners.png', title: 'Care that helps every plant grow', type: 'At the nursery' },
  { src: '/images/colorful-shrubs.png', title: 'Colourful shrubs for your garden', type: 'Foliage plants' },
  { src: '/images/flowering-plant.png', title: 'A vibrant flowering plant', type: 'Flowering plants' },
  { src: '/images/topiary-nursery-garden.png', title: 'Topiary across the nursery garden', type: 'Topiary' },
  { src: '/images/colorful-nursery-shrub.png', title: 'A colourful shrub in the nursery', type: 'Foliage plants' },
  { src: '/images/rows-of-green-shrubs.png', title: 'Neatly grown rows of green shrubs', type: 'Foliage plants' },
  { src: '/images/purple-flowering-shrubs.png', title: 'Purple flowers among the greenery', type: 'Flowering plants' },
  { src: '/images/ornamental-nursery-shrub.png', title: 'An ornamental shrub ready to plant', type: 'Foliage plants' },
  { src: '/images/chrysanthemum-display.png', title: 'Chrysanthemums in a range of colours', type: 'Flowering plants' },
  { src: '/images/purple-flower-garden.png', title: 'A garden path lined with purple blooms', type: 'Flowering plants' },
  { src: '/images/colorful-flower-beds.png', title: 'Colourful rows of flowering plants', type: 'Flowering plants' },
  { src: '/images/nursery-plant-delivery.png', title: 'Plants ready for delivery', type: 'At the nursery' },
  { src: '/images/nursery-sunset.png', title: 'The nursery at sunset', type: 'Our nursery' },
  { src: '/images/aerial-nursery-garden.png', title: 'A wide view across the nursery', type: 'Our nursery' },
  { src: '/images/orange-chrysanthemum.png', title: 'Orange chrysanthemums in bloom', type: 'Flowering plants' },
  { src: '/images/nursery-aerial-view.png', title: 'Our nursery seen from above', type: 'Our nursery' },
  { src: '/images/nursery-greenery-rows.png', title: 'Rows of nursery greenery', type: 'Foliage plants' },
  { src: '/images/nursery-gardeners-pruning.png', title: 'Our team caring for nursery plants', type: 'At the nursery' },
  { src: '/images/nursery-entrance-garden.png', title: 'The garden at our nursery entrance', type: 'Our nursery' },
  { src: '/images/rows-of-garden-shrubs.png', title: 'Garden shrubs growing in rows', type: 'Foliage plants' },
  { src: '/images/nursery-flowering-shrubs.png', title: 'Flowering shrubs at the nursery', type: 'Flowering plants' },
  { src: '/images/potted-flowering-shrub.png', title: 'A potted shrub covered in flowers', type: 'Flowering plants' },
  { src: '/images/variegated-shrubs.png', title: 'Rows of variegated shrubs', type: 'Foliage plants' },
  { src: '/images/orange-fruit-plants.png', title: 'Potted orange fruit plants', type: 'Fruit plants' },
  { src: '/images/croton-plant.png', title: 'Colourful croton foliage', type: 'Ornamental plants' },
]
export default function Gallery() {
  const [active, setActive] = useState(null)
  return <><section className="page-hero page-hero-gallery"><div className="container"><span className="eyebrow">GREEN INSPIRATION</span><h1>A gallery that <em>grows.</em></h1><p>Explore plant and garden imagery to spark ideas for your own green space.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Gallery</span></div></div></section>
    <section className="section-pad"><div className="container"><div className="gallery-intro"><p>Take a closer look at Sri Satyadeva Nursery, from our growing spaces and garden displays to the plants we care for.</p><Link className="text-link" to="/contact">Share a gallery enquiry <ArrowUpRight size={16}/></Link></div><div className="gallery-grid">{photos.map((photo, i) => <button className={`gallery-tile gallery-tile-${i+1}`} key={photo.src} onClick={() => setActive(photo)} aria-label={`View ${photo.title}`}><img src={photo.src} alt={photo.title} loading="lazy"/><span className="gallery-caption"><small>{photo.type}</small><strong>{photo.title}</strong><ArrowUpRight size={18}/></span></button>)}</div></div></section>
    {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}><button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close image"><X/></button><img src={active.src} alt={active.title}/><p>{active.title}</p></div>}
  </>
}