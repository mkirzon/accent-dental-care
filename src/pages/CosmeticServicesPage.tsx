import { Link } from 'react-router-dom';
import { services } from '../data/content';
import { practice } from '../data/content';

export default function CosmeticServicesPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-gradient-to-br from-brand-50 via-white to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Services</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 mb-4">{services.cosmetic.headline}</h1>
            <p className="text-xl text-slate-600">{services.cosmetic.subheadline}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.cosmetic.services.map((service) => (
              <div key={service.title} className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-brand-100 text-lg mb-8">Schedule a cosmetic consultation to explore your options.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-brand-700 font-medium px-8 py-3.5 rounded-lg hover:bg-brand-50 transition-colors">
              Request a Consultation
            </Link>
            <a href={practice.phoneLink} className="inline-flex items-center justify-center border-2 border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:border-white/60 transition-colors">
              {practice.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}