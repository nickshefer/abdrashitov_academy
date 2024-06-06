import { logoWithText as logo } from '@shared/assets'
import './header.scss'
import { Button } from '@shared/ui/button'
import { useState } from 'react'

type navLinksType = {
  href: string
  text: string
}

export default function Header({ navLinks }: { navLinks: navLinksType[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header_body">
        <div className="header_logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className={`header_nav ${isMenuOpen && 'active'}`}>
          <ul className="header_list">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a className="header_link" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="header_buttons">
            <Button variant={'ghost'}>Login</Button>
            <Button variant={'primary'}>Sign Up</Button>
          </div>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`header_burger ${isMenuOpen && 'active'}`}
        >
          <span></span>
        </button>
      </div>
    </header>
  )
}
