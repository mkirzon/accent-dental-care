import { Link } from 'react-router-dom';
import { homepage, practice } from '../data/content';

// Icon components
const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const SmileIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const iconMap: Record<string, React.FC> = {
  shield: ShieldIcon,
  sparkle: SparkleIcon,
  smile: SmileIcon,
  clock: ClockIcon,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-50 via-white to-warm-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-warm-100/40 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {homepage.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              {homepage.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-base"
              >
                {homepage.hero.primaryCta}
              </Link>
              <a
                href={practice.phoneLink}
                className="inline-flex items-center justify-center border-2 border-slate-200 hover:border-brand-300 text-slate-700 hover:text-brand-600 font-medium px-8 py-3.5 rounded-lg transition-colors text-base"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.06l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.06-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {practice.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {homepage.trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-brand-600 mb-1">{signal.value}</div>
                <div className="text-sm text-slate-500">{signal.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Meet Your Dentist</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-6">{homepage.aboutPreview.headline}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{homepage.aboutPreview.body}</p>
              <Link
                to="/about"
                className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium transition-colors"
              >
                {homepage.aboutPreview.cta}
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-100 to-warm-100 rounded-2xl overflow-hidden">
                <img
                  src="/images/dr-mirkin.jpg"
                  alt="Dr. Masha Mirkin, DMD at Accent Dental Care"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
                  }}
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-200 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">{homepage.servicesPreview.headline}</h2>
            <p className="text-slate-600">{homepage.servicesPreview.subheadline}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homepage.servicesPreview.services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-slate-100 hover:border-brand-200 transition-all"
                >
                  <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">{homepage.whyChooseUs.headline}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homepage.whyChooseUs.reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-brand-200 uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-12">{homepage.testimonialPreview.headline}</h2>
            <blockquote className="text-xl sm:text-2xl leading-relaxed mb-8 font-light italic">
              &ldquo;{homepage.testimonialPreview.testimonial.text}&rdquo;
            </blockquote>
            <div>
              <div className="font-semibold">{homepage.testimonialPreview.testimonial.author}</div>
              <div className="text-brand-200 text-sm">{homepage.testimonialPreview.testimonial.detail}</div>
            </div>
            <Link
              to="/reviews"
              className="inline-flex items-center mt-8 text-brand-200 hover:text-white font-medium transition-colors"
            >
              {homepage.testimonialPreview.cta}
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{homepage.finalCta.headline}</h2>
          <p className="text-lg text-slate-600 mb-8">{homepage.finalCta.subheadline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-medium px-8 py-3.5 rounded-lg transition-colors"
            >
              {homepage.finalCta.primaryCta}
            </Link>
            <a
              href={practice.phoneLink}
              className="inline-flex items-center justify-center border-2 border-slate-200 hover:border-brand-300 text-slate-700 hover:text-brand-600 font-medium px-8 py-3.5 rounded-lg transition-colors"
            >
              {homepage.finalCta.secondaryCta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}