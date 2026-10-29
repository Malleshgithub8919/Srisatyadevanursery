// Update these values before publishing the website.
// WhatsApp number must include country code, digits only (India example: 91XXXXXXXXXX).
export const business = {
  name: 'Sri Satyadeva Nursery 150 Acres',
  nativeName: 'శ్రీ సత్యదేవ నర్సరీ',
  proprietor: 'Pulla Anjaneyulu & Sons',
  type: 'Wholesale plant nursery',
  rating: '4.9',
  reviewCount: 339,
  tagline: 'A trusted Kadiyam nursery offering quality flowering, fruit, ornamental, avenue, indoor and outdoor plants for homes, gardens, landscaping projects, commercial spaces and wholesale.',
  whatsappNumber: '919069229999',
  phoneNumber: '+91 90692 29999',
  address: 'Kadiyapulanka, Veeravaram Road, Kadiam, Andhra Pradesh 533126, India',
  openingHours: 'Mon - Sat: 8:00 AM - 6:00 PM',
  email: 'srisatyadevanursery150acers@gmail.com',
  socialLinks: {
    instagram: 'https://www.instagram.com/satyadevanursery/',
    facebook: 'https://www.facebook.com/satyadevanursery',
    youtube: 'https://www.youtube.com/@srisatyadevanursery1950',
  },
}

export function getWhatsAppUrl(message) {
  const number = business.whatsappNumber.replace(/\D/g, '')
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}