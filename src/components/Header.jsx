import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { business } from '../config/business'

const links = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Plants', '/plants'],
  ['Services', '/services'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
  ['Order Plants', '/order'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="announcement"><span>Rooted in nature, grown with care</span><span className="announcement-right">Plant enquiries & bulk orders welcome <ArrowUpRight size={14} /></span></div>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label={business.name}>
            <img className="brand-logo" src="/images/nursery-logo-new.jpeg" alt="" />
          </Link>
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
          <nav className={open ? 'main-nav is-open' : 'main-nav'}>
            {links.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
          </nav>
        </div>
      </header>
    </>
  )
}