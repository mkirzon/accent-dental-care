import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { practice, navItems } from '../data/content';

interface NavLinkWithChildren {
  label: string;
  children: { label: string; href: string }[];
}

interface NavLinkWithHref {
  label: string;
  href: string;
}

type NavLink = NavLinkWithChildren | NavLinkWithHref;

function isDropdown(item: NavLink): item is NavLinkWithChildren {
  return 'children' in item;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-semibold text-slate-900 leading-tight">{practice.name}</span>
              <span className="hidden sm:block text-xs text-slate-500">{practice.dentist}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              isDropdown(item) ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors flex items-center gap-1">
                    {item.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={practice.phoneLink}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {practice.phone}
            </a>
            <Link
              to="/contact"
              className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Schedule Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-600"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) =>
              isDropdown(item) ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 flex items-center justify-between"
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-600"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a href={practice.phoneLink} className="block text-center text-sm font-medium text-slate-600">
                {practice.phone}
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-brand-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg"
              >
                Schedule Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}