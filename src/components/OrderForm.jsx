import { useMemo, useState } from 'react'
import { Plus, Trash2, MessageCircle, Leaf, CheckCircle2 } from 'lucide-react'
import { business, getWhatsAppUrl } from '../config/business'
import { categories } from '../data/categories'
import { plants } from '../data/plants'

const blankItem = () => ({ category: '', plant: '', quantity: 1 })

export default function OrderForm() {
  const [customer, setCustomer] = useState({ name: '', mobile: '', whatsapp: '', email: '', state: '', city: '', pincode: '', address: '', orderType: 'Retail', deliveryDate: '', notes: '' })
  const [items, setItems] = useState([blankItem()])
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [attachment, setAttachment] = useState(null)

  const availablePlants = useMemo(() => plants.filter(p => items.some(i => i.category === p.category)), [items])
  const updateCustomer = (key, value) => setCustomer(prev => ({ ...prev, [key]: value }))
  const updateItem = (index, key, value) => setItems(prev => prev.map((item, i) => i === index ? { ...item, [key]: value, ...(key === 'category' ? { plant: '' } : {}) } : item))
  const addItem = () => setItems(prev => [...prev, blankItem()])
  const removeItem = index => setItems(prev => prev.length > 1 ? prev.filter((_, i) => i !== index) : prev)

  function submit(event) {
    event.preventDefault()
    setError(''); setNotice('')
    if (!customer.name.trim() || !customer.mobile.trim() || !customer.state.trim() || !customer.city.trim() || !customer.address.trim()) {
      setError('Please complete your name, mobile number, state, city and delivery address.')
      return
    }
    if (!/^[6-9]\d{9}$/.test(customer.mobile.replace(/\D/g, '').slice(-10))) {
      setError('Please enter a valid 10-digit Indian mobile number.')
      return
    }
    if (customer.whatsapp && !/^[6-9]\d{9}$/.test(customer.whatsapp.replace(/\D/g, '').slice(-10))) {
      setError('Please enter a valid 10-digit WhatsApp number or leave it blank.')
      return
    }
    if (items.some(item => !item.category || !item.plant || Number(item.quantity) < 1)) {
      setError('Please select a category, plant name and quantity for each order item.')
      return
    }
    const itemLines = items.map((item, i) => `${i + 1}. ${item.plant} (${item.category}) — Qty: ${item.quantity}`).join('\n')
    const message = [
      `Plant Order Enquiry — ${business.name}`,
      '',
      `Name: ${customer.name}`,
      `Mobile: ${customer.mobile}`,
      `WhatsApp: ${customer.whatsapp || 'Same as mobile / not provided'}`,
      `Email: ${customer.email || 'Not provided'}`,
      `Order type: ${customer.orderType}`,
      '',
      'Plants requested:',
      itemLines,
      '',
      `Address: ${customer.address}`,
      `City / District: ${customer.city}`,
      `State: ${customer.state}`,
      `Pincode: ${customer.pincode || 'Not provided'}`,
      `Preferred delivery date: ${customer.deliveryDate || 'Flexible / to be discussed'}`,
      `Additional requirements: ${customer.notes || 'None'}`,
      `Reference image selected: ${attachment ? attachment.name + ' (please attach separately in WhatsApp)' : 'No'}`,
      '',
      'Please confirm availability, pricing and delivery options. I understand this is an enquiry and not a confirmed order.'
    ].join('\n')
    const url = getWhatsAppUrl(message)
    if (!url) {
      setError('WhatsApp number is not configured yet. Please add it in src/config/business.js before testing order submission.')
      return
    }
    setNotice('WhatsApp is opening with your prepared order message. Please review it and press Send in WhatsApp. If you selected a reference image, attach it there separately.')
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return <form className="order-form" onSubmit={submit} noValidate>
    <div className="form-section-heading"><span className="form-icon"><Leaf size={20}/></span><div><h3>Customer details</h3><p>Tell us how to reach you about your plant enquiry.</p></div></div>
    <div className="form-grid">
      <label>Full name <b>*</b><input value={customer.name} onChange={e => updateCustomer('name', e.target.value)} placeholder="Your full name" autoComplete="name"/></label>
      <label>Mobile number <b>*</b><input value={customer.mobile} onChange={e => updateCustomer('mobile', e.target.value)} placeholder="10-digit mobile number" inputMode="tel" autoComplete="tel"/></label>
      <label>WhatsApp number<input value={customer.whatsapp} onChange={e => updateCustomer('whatsapp', e.target.value)} placeholder="If different from mobile" inputMode="tel"/></label>
      <label>Email address <span>(optional)</span><input type="email" value={customer.email} onChange={e => updateCustomer('email', e.target.value)} placeholder="you@example.com" autoComplete="email"/></label>
      <label>State <b>*</b><input value={customer.state} onChange={e => updateCustomer('state', e.target.value)} placeholder="e.g. Andhra Pradesh" autoComplete="address-level1"/></label>
      <label>City / District <b>*</b><input value={customer.city} onChange={e => updateCustomer('city', e.target.value)} placeholder="Your city or district" autoComplete="address-level2"/></label>
      <label>Pincode<input value={customer.pincode} onChange={e => updateCustomer('pincode', e.target.value)} placeholder="Postal code" inputMode="numeric" autoComplete="postal-code"/></label>
      <label>Order type<select value={customer.orderType} onChange={e => updateCustomer('orderType', e.target.value)}><option>Retail</option><option>Bulk</option><option>Farm / Plantation</option><option>Landscaping project</option></select></label>
      <label className="full-field">Delivery address <b>*</b><textarea value={customer.address} onChange={e => updateCustomer('address', e.target.value)} placeholder="House / street / village / delivery details" rows="3" autoComplete="street-address"/></label>
    </div>
    <div className="form-section-heading order-items-heading"><span className="form-icon"><Leaf size={20}/></span><div><h3>Plants you are looking for</h3><p>Choose one or more plants. We will confirm availability and pricing.</p></div></div>
    <div className="order-items">
      {items.map((item, index) => {
        const options = plants.filter(p => !item.category || p.category === item.category)
        return <div className="order-item" key={index}>
          <div className="order-item-top"><strong>Item {index + 1}</strong>{items.length > 1 && <button type="button" className="remove-item" onClick={() => removeItem(index)}><Trash2 size={15}/> Remove</button>}</div>
          <div className="form-grid item-grid">
            <label>Plant category <b>*</b><select value={item.category} onChange={e => updateItem(index, 'category', e.target.value)}><option value="">Select category</option>{categories.map(c => <option key={c.name}>{c.name}</option>)}</select></label>
            <label>Plant name <b>*</b><select value={item.plant} onChange={e => updateItem(index, 'plant', e.target.value)}><option value="">Select plant</option>{options.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}<option value="Other plant (please discuss)">Other plant (please discuss)</option></select></label>
            <label>Quantity <b>*</b><input type="number" min="1" max="100000" value={item.quantity} onChange={e => updateItem(index, 'quantity', e.target.value)} /></label>
          </div>
        </div>
      })}
    </div>
    <button type="button" className="button button-outline add-item" onClick={addItem}><Plus size={17}/> Add another plant</button>
    <div className="form-grid extra-fields">
      <label>Preferred delivery date <span>(optional)</span><input type="date" value={customer.deliveryDate} onChange={e => updateCustomer('deliveryDate', e.target.value)} min={new Date().toISOString().split('T')[0]}/></label>
      <label>Reference image <span>(optional)</span><input type="file" accept="image/*" onChange={e => setAttachment(e.target.files?.[0] || null)}/><small>The image will not upload automatically. Attach it separately in WhatsApp if needed.</small></label>
      <label className="full-field">Additional requirements <textarea value={customer.notes} onChange={e => updateCustomer('notes', e.target.value)} rows="3" placeholder="Plant size, variety, quantity, delivery or project details…"/></label>
    </div>
    <div className="order-summary"><div><span>Order summary</span><strong>{items.length} {items.length === 1 ? 'item type' : 'item types'}</strong></div><div><span>Pricing</span><strong>Price on request</strong></div><p>Final price, availability and delivery charges will be confirmed by the nursery.</p></div>
    {error && <div className="form-message error" role="alert">{error}</div>}
    {notice && <div className="form-message success" role="status"><CheckCircle2 size={18}/>{notice}</div>}
    <button className="button submit-order" type="submit"><MessageCircle size={19}/> Submit Order on WhatsApp</button>
    <p className="form-privacy">This opens WhatsApp with a prepared message. Your order is not submitted until you press Send in WhatsApp.</p>
  </form>
}