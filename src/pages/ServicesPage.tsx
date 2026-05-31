import { Link } from 'react-router-dom';
import { services } from '../data/content';
import { practice } from '../data/content';

const serviceCards = [
  {
    title: 'General & Preventive Dentistry',
    description: 'Cleanings, exams, fillings, crowns, root canals, dentures, and more.',
    href: '/services/general',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Veneers, whitening, bonding, crowns, and complete smile makeovers.',
    href: '/services/cosmetic',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: 'Invisalign & Orthodontics',
    description: 'Nearly invisible clear aligners for teens and adults.',
    href: '/services/orthodontics',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-brand-50 via-white to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">What We Offer</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 mb-4">{services.overview.headline}</h1>
            <p className="text-xl text-slate-600">{services.overview.subheadline}</p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                to={card.href}
                className="group block bg-slate-50 hover:bg-brand-50 rounded-2xl p-8 border border-slate-100 hover:border-brand-200 transition-all"
              >
                <div className="w-14 h-14 bg-white text-brand-600 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-100 transition-colors">
                  {card.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{card.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{card.description}</p>
                <span className="inline-flex items-center text-brand-600 font-medium group-hover:text-brand-700 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All General Services List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Dental Services</h2>
            <p className="text-slate-600">Everything your family needs in one comfortable office.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.general.services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-brand-100 text-lg mb-8">
            We\'ll help you figure it out. Schedule a consultation and we\'ll create a personalized plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-brand-700 font-medium px-8 py-3.5 rounded-lg hover:bg-brand-50 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}