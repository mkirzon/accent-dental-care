import { Link } from 'react-router-dom';
import { aboutPage } from '../data/content';
import { practice } from '../data/content';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-brand-50 via-white to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 mb-4">{aboutPage.headline}</h1>
            <p className="text-xl text-slate-600">{aboutPage.subheadline}</p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-100 to-warm-100 rounded-2xl overflow-hidden">
                <img
                  src="/images/dr-mirkin.jpg"
                  alt="Dr. Masha Mirkin - Dentist in La Jolla, CA"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                {aboutPage.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <blockquote className="mt-8 border-l-4 border-brand-400 pl-6 italic text-slate-700 text-lg">
                {aboutPage.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">{aboutPage.practicePhilosophy.headline}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {aboutPage.practicePhilosophy.items.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{aboutPage.credentials.headline}</h2>
          </div>
          <ul className="space-y-4">
            {aboutPage.credentials.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-brand-100 text-lg mb-8">
            New patients are always welcome. Schedule your first visit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-brand-700 font-medium px-8 py-3.5 rounded-lg hover:bg-brand-50 transition-colors"
            >
              Request an Appointment
            </Link>
            <a
              href={practice.phoneLink}
              className="inline-flex items-center justify-center border-2 border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:border-white/60 transition-colors"
            >
              {practice.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}