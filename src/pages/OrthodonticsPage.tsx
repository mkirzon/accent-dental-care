import { Link } from 'react-router-dom';
import { services } from '../data/content';
import { practice } from '../data/content';

export default function OrthodonticsPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-gradient-to-br from-brand-50 via-white to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Services</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 mb-4">{services.orthodontics.headline}</h1>
            <p className="text-xl text-slate-600">{services.orthodontics.subheadline}</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Invisalign?</h2>
              <ul className="space-y-4">
                {services.orthodontics.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Am I a Candidate?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{services.orthodontics.whoIsCandidate}</p>
              <Link
                to="/contact"
                className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium transition-colors"
              >
                Schedule a Consultation
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Straighten Your Smile?</h2>
          <p className="text-brand-100 text-lg mb-8">Schedule an Invisalign consultation to see if it's right for you.</p>
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