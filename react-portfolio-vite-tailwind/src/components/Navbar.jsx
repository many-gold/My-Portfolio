import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl transition ${isActive ? 'bg-gray-200 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`
    }>
    {children}
  </NavLink>
)

export default function Navbar() {
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
          />
          <span>MG</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="md:hidden px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-800">{/* mobile menu hook */}☰</button>
        </div>
      </div>
    </header>
  )
}
