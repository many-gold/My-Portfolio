import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl transition ${
        isActive
          ? 'bg-gray-200 dark:bg-gray-800'
          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
      }`
    }>
    {children}
  </NavLink>
)

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container-p flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <img
            src="/photo.jpg"
            alt="Bizuwork Jemaneh"
            width={48}
            height={48}
            className="rounded-full object-cover"
             loading="lazy"
          />
          <span>Bizuwork Jemaneh</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="md:hidden px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-2 p-4">
          <NavItem to="/" onClick={closeMenu}>Home</NavItem>
          <NavItem to="/about" onClick={closeMenu}>About</NavItem>
          <NavItem to="/projects" onClick={closeMenu}>Projects</NavItem>
          <NavItem to="/contact" onClick={closeMenu}>Contact</NavItem>
        </nav>
      )}
    </header>
  )
}
