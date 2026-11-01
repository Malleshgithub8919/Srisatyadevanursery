import { assetUrl } from '../utils/assets.js'
// Sample catalogue only. Prices are intentionally not invented.
// Replace image URLs, descriptions, and availability with confirmed business information.
export const plants = [
  // Ornamental Plants
  { id: 'croton-plant', name: 'Croton Plant', category: 'Ornamental Plants', description: 'A colourful ornamental plant with striking red, green and golden foliage.', price: null, sunlight: 'Bright indirect light', watering: 'Keep soil lightly moist', image: assetUrl('/images/croton-plant.png') },
  { id: 'variegated-shrub', name: 'Variegated Shrub', category: 'Ornamental Plants', description: 'A leafy ornamental shrub with variegated foliage for vibrant borders.', price: null, sunlight: 'Full to partial sun', watering: 'Water when topsoil dries', image: assetUrl('/images/variegated-shrubs.png') },
  { id: 'sculpted-topiary', name: 'Sculpted Topiary Ficus', category: 'Ornamental Plants', description: 'Artistically sculpted topiary designed for luxurious entrance and lawn decor.', price: null, sunlight: 'Full sun to partial shade', watering: 'Regular moderate watering', image: assetUrl('/images/sculpted-topiary.png') },
  { id: 'desert-rose', name: 'Desert Rose (Adenium)', category: 'Ornamental Plants', description: 'Drought-tolerant succulent with sculptural stems and striking blooms.', price: null, sunlight: 'Full sunlight', watering: 'Low to moderate watering', image: assetUrl('/images/desert-rose-collection.png') },
  { id: 'p6', name: 'Ornamental Green Plant', category: 'Ornamental Plants', description: 'A sculptural plant to add texture, height, and lush green presence.', price: null, sunlight: 'Varies by plant', watering: 'Avoid waterlogging', image: assetUrl('/images/kadiyam-ornamental-plants.png') },

  // Flowering Plants
  { id: 'p2', name: 'Pink Flowering Plant', category: 'Flowering Plants', description: 'A cheerful flowering option for bright garden spaces and border landscaping.', price: null, sunlight: 'Bright sunlight', watering: 'Water when topsoil dries', image: assetUrl('/images/kadiyam-flowering-plants.png') },
  { id: 'rose-collection', name: 'Rose Garden Bush', category: 'Flowering Plants', description: 'Fragrant and classic garden roses in vibrant shades suitable for flower beds.', price: null, sunlight: 'Full sun (6+ hours)', watering: 'Deep watering twice a week', image: assetUrl('/images/rose-garden.png') },
  { id: 'yellow-hibiscus', name: 'Yellow Hibiscus', category: 'Flowering Plants', description: 'Tropical perennial with large golden blooms attracting butterflies.', price: null, sunlight: 'Full sunlight', watering: 'Evenly moist soil', image: assetUrl('/images/yellow-hibiscus.png') },
  { id: 'chrysanthemum-plant', name: 'Chrysanthemum Cluster', category: 'Flowering Plants', description: 'Dense clusters of festive blooms in various rich colours.', price: null, sunlight: 'Bright direct light', watering: 'Moist, well-draining soil', image: assetUrl('/images/chrysanthemum-display.png') },

  // Fruit Plants
  { id: 'potted-orange-plant', name: 'Potted Orange Fruit Plant', category: 'Fruit Plants', description: 'A potted fruit plant shown with ripe orange fruit, suitable for patios.', price: null, sunlight: 'Full sunlight', watering: 'Regular watering', image: assetUrl('/images/orange-fruit-plants.png') },
  { id: 'p5', name: 'Fruit Sapling', category: 'Fruit Plants', description: 'A young healthy fruit plant sapling for your home orchard or farm garden.', price: null, sunlight: 'Usually full sun', watering: 'Water regularly while establishing', image: assetUrl('/images/kadiyam-fruit-plants.png') },

  // Indoor Plants
  { id: 'p1', name: 'Peace Lily', category: 'Indoor Plants', description: 'Elegant green foliage with graceful white blooms that purifies indoor air.', price: null, sunlight: 'Indirect light', watering: 'Keep soil lightly moist', image: assetUrl('/images/indoor-foliage.png') },
  { id: 'p3', name: 'Monstera Deliciosa', category: 'Indoor Plants', description: 'Bold tropical split leaves that make an instant statement in interior spaces.', price: null, sunlight: 'Bright indirect light', watering: 'Allow topsoil to dry slightly', image: assetUrl('/images/indoor-foliage.png') },
  { id: 'hanging-spider', name: 'Spider Plant Hanging Basket', category: 'Indoor Plants', description: 'Cascading resilient green foliage perfect for balconies and indoor corners.', price: null, sunlight: 'Indirect sunlight', watering: 'Moderate watering', image: assetUrl('/images/hanging-spider-plants.png') },

  // Outdoor Plants
  { id: 'p4', name: 'Garden Foliage Plant', category: 'Outdoor Plants', description: 'A leafy addition to patios, garden walkways, and outdoor spaces.', price: null, sunlight: 'Partial to full sun', watering: 'Adjust to plant variety', image: assetUrl('/images/nursery-landscape.png') },
  { id: 'landscape-flowerbed', name: 'Landscape Flowerbed Shrub', category: 'Outdoor Plants', description: 'Hardy landscape foliage designed for mass planting and garden borders.', price: null, sunlight: 'Full sun', watering: 'Moderate garden irrigation', image: assetUrl('/images/landscape-flowerbed.png') },

  // Avenue Plants
  { id: 'cassia-fistula', name: 'Cassia Fistula (Golden Shower)', category: 'Avenue Plants', description: 'A magnificent avenue tree producing spectacular cascading yellow floral clusters.', price: null, sunlight: 'Full sun', watering: 'Moderate once established', image: assetUrl('/images/cassia-fistula-bloom.jpg') },
  { id: 'cassia-javanica', name: 'Cassia Javanica (Rainbow Shower)', category: 'Avenue Plants', description: 'A popular ornamental shade tree with clusters of pink and white flowers.', price: null, sunlight: 'Full sunlight', watering: 'Regular during early growth', image: assetUrl('/images/cassia-javanica-bloom.jpg') },
  { id: 'avenue-shade-tree', name: 'Avenue Shade Specimen Tree', category: 'Avenue Plants', description: 'Tall spreading shade trees ideal for roadside avenues, campuses, and resorts.', price: null, sunlight: 'Full sun', watering: 'Deep watering during initial months', image: assetUrl('/images/nursery-shade-trees.jpg') },

  // Coconut Plants
  { id: 'hybrid-coconut', name: 'Hybrid Dwarf Coconut Sapling', category: 'Coconut Plants', description: 'High-yielding, early-bearing hybrid coconut sapling adapted for farm and garden.', price: null, sunlight: 'Full sunlight', watering: 'Regular deep watering', image: assetUrl('/images/nursery-palm-trees.jpg') },
  { id: 'gangabondam-coconut', name: 'Gangabondam Coconut Plant', category: 'Coconut Plants', description: 'Traditional sweet-water coastal coconut variety with robust disease resistance.', price: null, sunlight: 'Full sun', watering: 'Adequate soil moisture', image: assetUrl('/images/palm-lined-drive.png') },

  // Mango Plants
  { id: 'banganapalli-mango', name: 'Banganapalli Grafted Mango Sapling', category: 'Mango Plants', description: 'Premium Andhra variety renowned for delicious, fibreless, aromatic sweet fruit.', price: null, sunlight: 'Full sun', watering: 'Deep watering once a week', image: assetUrl('/images/kadiyam-fruit-plants.png') },
  { id: 'all-season-mango', name: 'All-Season Dwarf Mango Sapling', category: 'Mango Plants', description: 'Compact grafted mango plant capable of flowering and fruiting multiple times a year.', price: null, sunlight: 'Full sunlight', watering: 'Moderate regular watering', image: assetUrl('/images/orange-fruit-plants.png') },

  // Vegetable Seedlings
  { id: 'kitchen-garden-tray', name: 'Kitchen Garden Seedling Tray', category: 'Vegetable Seedlings', description: 'Assorted seasonal vegetable seedlings including chilli, tomato, brinjal and greens.', price: null, sunlight: 'Full to partial sun', watering: 'Daily gentle watering', image: assetUrl('/images/shade-house-plants.png') },
  { id: 'tomato-chilli-seedlings', name: 'Chilli & Tomato Vigorous Seedlings', category: 'Vegetable Seedlings', description: 'Disease-resistant nursery-hardened seedlings ready for direct terrace or ground planting.', price: null, sunlight: '6+ hours full sun', watering: 'Keep root zone moist', image: assetUrl('/images/rows-of-green-shrubs.png') },

  // Medicinal Plants
  { id: 'p8', name: 'Herb Garden Plant', category: 'Medicinal Plants', description: 'A useful traditional medicinal and herbal addition for health and culinary gardens.', price: null, sunlight: 'Bright light', watering: 'Avoid letting roots sit in water', image: assetUrl('/images/colorful-foliage.png') },
  { id: 'tulasi-herbal-collection', name: 'Sacred Herbal Green Plant', category: 'Medicinal Plants', description: 'Aromatic therapeutic plant cultivated for traditional remedies and fresh air.', price: null, sunlight: 'Direct morning sunlight', watering: 'Water when surface is dry', image: assetUrl('/images/shade-house-plants.png') },

  // Palm Plants
  { id: 'p7', name: 'Tropical Palm', category: 'Palm Plants', description: 'Tropical feather foliage that creates an instant exotic, resort-like atmosphere.', price: null, sunlight: 'Bright indirect to direct light', watering: 'Keep soil evenly moist', image: assetUrl('/images/palm-lined-drive.png') },
  { id: 'landscape-mature-palm', name: 'Mature Landscape Palm', category: 'Palm Plants', description: 'Architectural palm specimen suited for front walkways, poolside, and lawn centres.', price: null, sunlight: 'Full sunlight', watering: 'Moderate drought tolerant', image: assetUrl('/images/nursery-palm-trees.jpg') },

  // Garden Accessories
  { id: 'gardening-pots-display', name: 'Decorative Nursery Planters & Pots', category: 'Garden Accessories', description: 'Durable ceramic, terracotta and premium plastic containers for all plant sizes.', price: null, sunlight: 'Indoor & outdoor use', watering: 'Built-in drainage ready', image: assetUrl('/images/nursery-display.png') },
  { id: 'essential-gardening-kit', name: 'Essential Gardening Tools & Fertilizers', category: 'Garden Accessories', description: 'Quality pruning shears, potting mix, trowels, and organic growth boosters.', price: null, sunlight: 'Store in dry area', watering: 'N/A', image: assetUrl('/images/order-gardening-tools.png') },
]