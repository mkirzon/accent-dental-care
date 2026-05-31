import { useState } from 'react';
import { contactPage, practice } from '../data/content';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-brand-50 via-white to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 mb-4">{contactPage.headline}</h1>
            <p className="text-xl text-slate-600">{contactPage.subheadline}</p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">{contactPage.contactInfo.callUs}</h3>
                <a href={practice.phoneLink} className="text-2xl font-bold text-brand-600 hover:text-brand-700 transition-colors">
                  {practice.phone}
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">{contactPage.contactInfo.visitUs}</h3>
                <p className="text-slate-600">{practice.address}</p>
                <p className="text-slate-600">{practice.city}, {practice.state} {practice.zip}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(practice.address + ', ' + practice.city + ', ' + practice.state)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium mt-2 transition-colors"
                >
                  Get Directions
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">{contactPage.contactInfo.hours}</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <dt>Monday – Thursday</dt>
                    <dd>{practice.hours.monday}</dd>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <dt>Friday</dt>
                    <dd>{practice.hours.friday}</dd>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <dt>Saturday</dt>
                    <dd>{practice.hours.saturday}</dd>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <dt>Sunday</dt>
                    <dd>{practice.hours.sunday}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-2xl p-8 lg:p-10 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{contactPage.form.headline}</h2>
                <p className="text-slate-600 mb-8">{contactPage.form.subheadline}</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Request Received!</h3>
                    <p className="text-slate-600">We'll get back to you shortly to confirm your appointment.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                          {contactPage.form.fields.firstName}
                        </label>
                        <input
                          type="text" id="firstName" name="firstName"
                          value={formData.firstName} onChange={handleChange} required
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                          {contactPage.form.fields.lastName}
                        </label>
                        <input
                          type="text" id="lastName" name="lastName"
                          value={formData.lastName} onChange={handleChange} required
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          {contactPage.form.fields.email}
                        </label>
                        <input
                          type="email" id="email" name="email"
                          value={formData.email} onChange={handleChange} required
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                          {contactPage.form.fields.phone}
                        </label>
                        <input
                          type="tel" id="phone" name="phone"
                          value={formData.phone} onChange={handleChange} required
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                        {contactPage.form.fields.service}
                      </label>
                      <select
                        id="service" name="service"
                        value={formData.service} onChange={handleChange} required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition"
                      >
                        <option value="">Select a service...</option>
                        {contactPage.form.services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        {contactPage.form.fields.message}
                      </label>
                      <textarea
                        id="message" name="message"
                        value={formData.message} onChange={handleChange} rows={4}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
                    >
                      {contactPage.form.fields.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-slate-100">
        <iframe
          title="Accent Dental Care location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(practice.address + ', ' + practice.city + ', ' + practice.state)}&output=embed`}
          className="w-full h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}