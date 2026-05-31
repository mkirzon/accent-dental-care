import { Link } from 'react-router-dom';
import { newPatients } from '../data/content';
import { practice } from '../data/content';

export default function NewPatientsPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-gradient-to-br from-brand-50 via-white to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">For New Patients</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 mb-4">{newPatients.headline}</h1>
            <p className="text-xl text-slate-600">{newPatients.subheadline}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{newPatients.whatToExpect.headline}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newPatients.whatToExpect.steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{newPatients.insurance.headline}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{newPatients.insurance.body}</p>
              <p className="text-sm text-slate-500 italic">{newPatients.insurance.note}</p>
            </div>
            <div>
              <ul className="space-y-4">
                {newPatients.insurance.options.map((option) => (
                  <li key={option} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{newPatients.officePolicies.headline}</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-semibold text-amber-900 mb-2">{newPatients.officePolicies.cancellation.headline}</h3>
            <p className="text-amber-800 text-sm leading-relaxed">{newPatients.officePolicies.cancellation.body}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{newPatients.faq.headline}</h2>
          </div>
          <div className="space-y-4">
            {newPatients.faq.questions.map((q) => (
              <details key={q.q} className="bg-white rounded-xl border border-slate-200 group">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                  {q.q}
                  <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">{q.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">We Can't Wait to Meet You!</h2>
          <p className="text-brand-100 text-lg mb-8">Schedule your first visit and see why patients love Accent Dental Care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-brand-700 font-medium px-8 py-3.5 rounded-lg hover:bg-brand-50 transition-colors">
              Request an Appointment
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
