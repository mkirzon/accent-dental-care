import { Link } from 'react-router-dom';
import { practice, navItems } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-white">{practice.name}</span>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              Gentle, comprehensive dental care for the whole family in La Jolla, San Diego.
            </p>
            <div className="space-y-2 text-sm">
              <p>{practice.dentist}</p>
              <p>{practice.address}</p>
              <p>{practice.city}, {practice.state} {practice.zip}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => {
                if ('href' in item) {
                  return (
                    <li key={item.label}>
                      <Link to={item.href} className="text-sm hover:text-brand-400 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                if ('children' in item) {
                  return (
                    <li key={item.label} className="text-sm font-medium text-white">
                      {item.label}
                      <ul className="mt-1 space-y-1 ml-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link to={child.href} className="text-slate-400 hover:text-brand-400 transition-colors">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href={practice.phoneLink}
                className="flex items-center gap-2 hover:text-brand-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.06l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.06-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {practice.phone}
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(practice.address + ', ' + practice.city + ', ' + practice.state)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Office Hours</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt>Mon – Thu</dt>
                <dd>{practice.hours.monday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Friday</dt>
                <dd>{practice.hours.friday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday</dt>
                <dd>{practice.hours.saturday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sunday</dt>
                <dd>{practice.hours.sunday}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {practice.name}. All rights reserved.</p>
            <p>Serving {practice.serving}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}