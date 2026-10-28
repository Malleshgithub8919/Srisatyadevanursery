import { business, getWhatsAppUrl } from '../config/business'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" style={{ width: 28, height: 28, display: 'block' }}>
      <circle cx="32" cy="32" r="32" fill="#25D366" />
      <path
        d="M32 12.5c-10.9 0-19.8 8.6-19.8 19.1 0 3.5 1 6.9 2.8 9.8L14 50.8l10.6-2.7c2.5 1.2 5.3 1.9 8.4 1.9 10.9 0 19.8-8.6 19.8-19.1S42.9 12.5 32 12.5Zm12.2 27.8c-.5.8-2.3 1.9-3.6 2.1-1.3.2-2.4-.2-6.1-1.9-3.7-1.7-6.8-4.8-9.2-8.5-1.3-2-2-4.2-2-6.9 0-.7.1-1.4.5-2.1.6-1.1 1.8-1.7 3.2-1.7h.3c.9 0 1.8.3 2.4 1l1.4 1.8c.5.7.8 1.3.5 1.8-.3.5-.7 1.3-.9 1.8-.5.9-.2 1.7.3 2.3l2.2 2.3c.7.7 1.8 1.1 2.7.6l1.2-.7c.7-.4 1.6-.4 2.3.1l2.8 1.8c.7.4 1.1 1.1.9 1.9-.4 1.2-1.6 2.3-2.7 2.9Z"
        fill="#fff"
      />
      <path
        d="M27.7 23.2c-.3-.6-1-.9-1.9-1.2-.8-.2-1.6-.2-2.2.1-.6.3-1.2.8-1.6 1.5-.4.7-.3 1.6.2 2.3.5.8 1.5 1.7 2.4 2.5.7.7 1.4 1.4 2 2.2.9 1.2 1.4 2.6 1.3 4.1-.1 1.2-.6 2.4-1.6 3.1-1.2.9-2.7 1.2-4.2 1l-1.5-.2a.8.8 0 0 0-.8.4l-.8 1.4a.9.9 0 0 1-1.2.4l-.2-.1a11.8 11.8 0 0 1-5.7-9.3c-.1-1.9.4-3.7 1.7-5.2 1.2-1.4 2.9-2.1 4.7-2.2 1.4-.1 2.8.2 3.9.9.9.5 1.7 1.2 2.1 2.2.4.8.5 1.8.2 2.7Z"
        fill="#fff"
        opacity=".96"
      />
    </svg>
  )
}

export default function WhatsAppButton() {
  const url = getWhatsAppUrl(`Hello ${business.name}, I would like to enquire about your plants.`)

  return (
    <a
      className="floating-whatsapp whatsapp-icon-only"
      href={url || '/contact'}
      target={url ? '_blank' : undefined}
      rel={url ? 'noreferrer' : undefined}
      aria-label="Contact nursery on WhatsApp"
      title="WhatsApp enquiry"
    >
      <WhatsAppIcon />
      <span>{url ? 'Chat with us' : 'Contact us'}</span>
    </a>
  )
}