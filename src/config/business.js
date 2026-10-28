// Update these values before publishing the website.
// WhatsApp number must include country code, digits only (India example: 91XXXXXXXXXX).
export const business = {
  name: 'Sri Satyadeva Nursery Since 1950',
  nativeName: 'శ్రీ సత్యదేవ నర్సరీ',
  proprietor: 'Pulla Anjaneyulu & Sons',
  type: 'Wholesale plant nursery',
  rating: '4.9',
  reviewCount: 339,
  tagline: 'Premium fruit and spice plants. Healthy plants for a greener tomorrow.',
  whatsappNumber: '918500644271',
  phoneNumber: '+91 8500644271',
  address: 'Kadiyapulanka, Kadiam, Andhra Pradesh 533126, India',
  openingHours: 'Mon - Sat: 8:00 AM - 6:00 PM',
  email: 'sd.nursery@gmail.com',
  socialLinks: {
    instagram: 'https://www.instagram.com/srisatyadevanursery',
    facebook: 'https://www.facebook.com/@srisatyadevanursery1950',
    youtube: 'https://www.youtube.com/@srisatyadevanursery1950',
  },
}

export function getWhatsAppUrl(message) {
  const number = business.whatsappNumber.replace(/\D/g, '')
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}