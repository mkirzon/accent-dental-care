// Practice information
export const practice = {
  name: 'Accent Dental Care',
  dentist: 'Dr. Masha Mirkin, DMD',
  phone: '(858) 490-6999',
  phoneLink: 'tel:+18584906999',
  address: '8950 Villa La Jolla Dr., Suite C108',
  city: 'La Jolla',
  state: 'CA',
  zip: '92037',
  serving: 'Pacific Beach, La Jolla & San Diego',
  hours: {
    monday: '9:00 AM – 5:00 PM',
    tuesday: '9:00 AM – 5:00 PM',
    wednesday: '9:00 AM – 5:00 PM',
    thursday: '9:00 AM – 5:00 PM',
    friday: '9:00 AM – 3:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
  },
} as const;

// Navigation
type NavLink = { label: string; href: string } | { label: string; children: { label: string; href: string }[] };
export const navItems: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'General Dentistry', href: '/services/general' },
      { label: 'Cosmetic Dentistry', href: '/services/cosmetic' },
      { label: 'Invisalign & Orthodontics', href: '/services/orthodontics' },
    ],
  },
  { label: 'New Patients', href: '/new-patients' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

// Homepage sections
export const homepage = {
  hero: {
    headline: 'Your Smile Is in Good Hands',
    subheadline:
      'Gentle, comprehensive dental care in La Jolla for the whole family — led by Dr. Masha Mirkin with over 40 years of experience.',
    primaryCta: 'Schedule an Appointment',
    secondaryCta: 'Call (858) 490-6999',
  },
  trustSignals: [
    { value: '40+', label: 'Years of Experience' },
    { value: '1998', label: 'Serving San Diego Since' },
    { value: '5.0', label: 'Google Rating' },
    { value: 'Family', label: 'Whole-Family Care' },
  ],
  aboutPreview: {
    headline: 'Meet Dr. Masha Mirkin',
    body: 'Dr. Mirkin has been practicing dentistry since 1984. A graduate of Moscow Dental School and Loma Linda University, she brings a rare combination of skill, compassion, and a genuine passion for helping patients feel at ease. When she\'s not in the office, you\'ll find her painting, traveling, or enjoying everything San Diego has to offer.',
    cta: 'Learn More About Dr. Mirkin',
  },
  servicesPreview: {
    headline: 'Comprehensive Care for Every Smile',
    subheadline: 'From routine cleanings to complete smile makeovers, we offer everything you and your family need under one roof.',
    services: [
      {
        title: 'General & Preventive',
        description: 'Cleanings, exams, X-rays, fillings, crowns, root canals, and more.',
        href: '/services/general',
        icon: 'shield',
      },
      {
        title: 'Cosmetic Dentistry',
        description: 'Veneers, whitening, bonding, and smile makeovers.',
        href: '/services/cosmetic',
        icon: 'sparkle',
      },
      {
        title: 'Invisalign & Orthodontics',
        description: 'Nearly invisible alignment for teens and adults.',
        href: '/services/orthodontics',
        icon: 'smile',
      },
      {
        title: 'Emergency Care',
        description: 'Same-day appointments for dental emergencies.',
        href: '/contact',
        icon: 'clock',
      },
    ],
  },
  whyChooseUs: {
    headline: 'Why Patients Choose Accent Dental Care',
    reasons: [
      {
        title: 'Gentle, Patient-First Approach',
        description:
          'We understand dental visits can be stressful. Our entire team is dedicated to making you feel comfortable and at ease from the moment you walk in.',
      },
      {
        title: 'Prevention Over Treatment',
        description:
          'We focus on keeping your smile healthy so you spend less time in the chair and more time living your life.',
      },
      {
        title: 'Advanced Technology',
        description:
          'Digital X-rays, laser dentistry, and modern sterilization protocols ensure the best care with the least discomfort.',
      },
      {
        title: 'Flexible Payment Options',
        description:
          'We accept most insurance plans, CareCredit financing, and offer a practice membership plan for your convenience.',
      },
    ],
  },
  testimonialPreview: {
    headline: 'What Our Patients Say',
    testimonial: {
      text: 'I have been a long-time patient of Dr. Mirkin. I don\'t like going to the dentist, but she makes you feel at ease. The crown she placed has lasted over 10 years and is still strong. She is kind, informative, and really takes care of my teeth.',
      author: 'Haikela K.',
      detail: 'Patient since 2007',
    },
    cta: 'Read More Reviews',
  },
  finalCta: {
    headline: 'Ready for a Healthier, More Confident Smile?',
    subheadline:
      'Whether you need a routine cleaning or a complete smile transformation, we\'re here to help. New patients are always welcome.',
    primaryCta: 'Request an Appointment',
    secondaryCta: 'Call Us Today',
  },
} as const;

// About page
export const aboutPage = {
  headline: 'Meet Dr. Masha Mirkin',
  subheadline: 'Over 40 years of experience. One mission: your smile.',
  bio: [
    'Dr. Mirkin has been practicing dentistry since 1984. She came to the United States with a dental degree from Moscow Dental School and a certification in Advanced Clinical Periodontology. She then attended Loma Linda University Dental School to complete Advanced Clinical Dentistry and obtain her California Dental License.',
    'Since opening her practice in San Diego in 1998, Dr. Mirkin has built a reputation for gentle, thorough care. She regularly attends continuing education courses to stay current with the latest techniques, products, and equipment.',
    'Outside the office, Dr. Mirkin finds inspiration through painting, traveling the world with her family, and enjoying everything that California\'s finest city has to offer.',
  ],
  quote:
    '"Skill and compassion go hand in hand when providing exceptional patient care. I recognize that my patients are unique individuals who have placed a great deal of trust in me. That is why I value each and every patient relationship."',
  practicePhilosophy: {
    headline: 'Our Practice Philosophy',
    items: [
      {
        title: 'Prevention First',
        description:
          'We believe in dental health care, not just disease care. Thorough exams, cleanings, sealants, and fluoride help prevent problems before they start.',
      },
      {
        title: 'Continual Education',
        description:
          'We attend dental lectures, meetings, and conventions to stay informed about new techniques and the latest equipment.',
      },
      {
        title: 'Uncompromising Safety',
        description:
          'We maintain strict sterilization and infection control processes following standards recommended by the ADA, OSHA, and CDC.',
      },
      {
        title: 'A Positive Experience',
        description:
          'Building trust by treating every patient as a special individual is vital to our success. We strive to make every visit relaxing and pleasant.',
      },
    ],
  },
  credentials: {
    headline: 'Education & Credentials',
    items: [
      'Moscow Dental School — Doctor of Dental Medicine (1984)',
      'Advanced Study of Clinical Periodontology (1987)',
      'Loma Linda University — Advanced Clinical Dentistry',
      'California Dental License',
      'Member of Professional Dental Associations',
      'Ongoing Continuing Education',
    ],
  },
} as const;

// Services
export const services = {
  overview: {
    headline: 'Our Dental Services',
    subheadline:
      'From routine preventive care to advanced cosmetic procedures, Accent Dental Care offers comprehensive treatment for the whole family.',
  },
  general: {
    headline: 'General & Preventive Dentistry',
    subheadline:
      'The foundation of a healthy smile starts with regular care. We provide thorough exams, cleanings, and treatments to keep your teeth and gums in top shape.',
    services: [
      {
        title: 'Dental Exams & Cleanings',
        description:
          'Comprehensive oral exams with professional cleanings. We check the overall health of your teeth and gums, perform oral cancer screenings, and take digital X-rays when needed.',
      },
      {
        title: 'Tooth-Colored Fillings',
        description:
          'Composite fillings that match your natural tooth color. We remove decay and restore teeth with materials that look and feel like your own.',
      },
      {
        title: 'Crowns & Bridges',
        description:
          'Porcelain crowns and fixed bridges that restore damaged or missing teeth. Highly durable and designed to look completely natural.',
      },
      {
        title: 'Root Canal Therapy',
        description:
          'Save a severely damaged or infected tooth with root canal treatment. We remove the infection, clean the canal, and seal the tooth to prevent future problems.',
      },
      {
        title: 'Dentures & Partial Dentures',
        description:
          'Custom-fitted dentures and partials that restore your ability to chew, speak, and smile with confidence.',
      },
      {
        title: 'Sealants & Fluoride Treatment',
        description:
          'Protective sealants and fluoride applications that help prevent cavities — especially important for children and teens.',
      },
      {
        title: 'Oral Cancer Screening',
        description:
          'Every exam includes an oral cancer screening — a quick, painless check that can detect problems early when treatment is most effective.',
      },
      {
        title: 'Emergency Dental Care',
        description:
          'Dental emergency? We make every effort to see you as soon as possible. Call us for same-day appointments when you need urgent care.',
      },
    ],
  },
  cosmetic: {
    headline: 'Cosmetic Dentistry',
    subheadline:
      'Transform your smile with cosmetic treatments designed to look natural and last for years. Dr. Mirkin combines artistry with clinical expertise to create results you\'ll love.',
    services: [
      {
        title: 'Porcelain Veneers',
        description:
          'Ultra-thin porcelain shells bonded to the front of teeth. Veneers can correct chips, cracks, gaps, discoloration, and misshapen teeth — completely reshaping your smile.',
      },
      {
        title: 'Professional Teeth Whitening',
        description:
          'Safe, effective whitening treatments that dramatically brighten your smile. We offer custom take-home whitening kits for convenient at-home results.',
      },
      {
        title: 'Dental Bonding',
        description:
          'Composite resin applied to reshape or repair teeth. Bonding can fix chips, cracks, and gaps in a single visit — an affordable alternative to veneers.',
      },
      {
        title: 'Porcelain Crowns',
        description:
          'Tooth-colored crowns that encase and protect damaged teeth while restoring their natural appearance. Fully ceramic options available for the most natural look.',
      },
      {
        title: 'Smile Makeover',
        description:
          'A comprehensive cosmetic treatment plan combining multiple procedures to create the smile you\'ve always wanted. We\'ll work with you to design a plan tailored to your goals.',
      },
    ],
  },
  orthodontics: {
    headline: 'Invisalign & Orthodontics',
    subheadline:
      'Straighten your smile without metal braces. Invisalign uses a series of clear, custom-made aligners to gradually shift your teeth into the perfect position.',
    benefits: [
      'Nearly invisible — no one will know you\'re straightening your teeth',
      'Removable aligners — eat, drink, and brush normally',
      'Comfortable with no metal brackets or wires',
      'Fewer office visits than traditional braces',
      'Ideal for teens and adults',
    ],
    whoIsCandidate:
      'If you\'re unhappy with crooked, crowded, or gapped teeth, Invisalign may be the perfect solution. During a consultation, Dr. Mirkin will evaluate your smile and determine if Invisalign is right for you.',
  },
} as const;

// New Patients
export const newPatients = {
  headline: 'Welcome, New Patients!',
  subheadline:
    'We\'re thrilled to have you join the Accent Dental Care family. Here\'s everything you need to know before your first visit.',
  whatToExpect: {
    headline: 'What to Expect at Your First Visit',
    steps: [
      {
        number: '1',
        title: 'Complete Your Forms',
        description:
          'Please print and fill out our new patient forms before your appointment so we can get started right away.',
      },
      {
        number: '2',
        title: 'Comprehensive Exam',
        description:
          'Dr. Mirkin will perform a thorough examination of your teeth and gums, review your medical history, and discuss any concerns you have.',
      },
      {
        number: '3',
        title: 'Digital X-Rays',
        description:
          'We use low-radiation digital X-rays to get a complete picture of your oral health.',
      },
      {
        number: '4',
        title: 'Personalized Treatment Plan',
        description:
          'Based on our findings, we\'ll create a treatment plan tailored to your needs — and discuss all options before any treatment begins.',
      },
    ],
  },
  insurance: {
    headline: 'Insurance & Payment',
    body: 'We accept most dental insurance programs, including non-managed care, indemnity (traditional), and PPO out-of-network. We are not part of any managed care network.',
    options: [
      'Cash, personal checks, money orders, and major credit cards',
      'Most dental insurance plans accepted',
      'CareCredit healthcare financing available',
      'Practice membership plan — click to learn more',
      'Pre-treatment estimates submitted to your insurance',
    ],
    note: 'Payment is expected at the time services are performed. Feel free to call our office if you\'d like to discuss financial arrangements for comprehensive treatment.',
  },
  officePolicies: {
    headline: 'Office Policies',
    cancellation: {
      headline: 'Cancellation & No-Show Policy',
      body: 'We kindly request at least 24 hours\' notice if you need to cancel or reschedule. A no-show fee of $45 applies when an appointment is missed without prior notice.',
    },
  },
  faq: {
    headline: 'Frequently Asked Questions',
    questions: [
      {
        q: 'I\'m nervous about going to the dentist. Will I be comfortable?',
        a: 'Absolutely. We understand that dental anxiety is real. Dr. Mirkin and our entire team are trained to make you feel at ease. We\'ll go at your pace, explain everything we\'re doing, and ensure your comfort throughout.',
      },
      {
        q: 'How often should I come in for a cleaning?',
        a: 'Most patients benefit from a cleaning and exam every six months. However, some patients with specific conditions may need to come in more frequently. Dr. Mirkin will recommend a schedule based on your individual needs.',
      },
      {
        q: 'Do you treat children?',
        a: 'Yes! We are a family dental practice and welcome patients of all ages. We provide gentle, age-appropriate care for children including cleanings, exams, sealants, and fluoride treatments.',
      },
      {
        q: 'What if I have a dental emergency?',
        a: 'Call us immediately. We make every effort to accommodate emergency patients and will see you as soon as possible.',
      },
      {
        q: 'Do I need to be a current patient to schedule an appointment?',
        a: 'No — new patients are always welcome. Just call us or use our online appointment request form, and we\'ll get you scheduled.',
      },
    ],
  },
} as const;

// Reviews page
export const reviewsPage = {
  headline: 'What Our Patients Say',
  subheadline:
    'Don\'t just take our word for it. Here\'s what real patients have to say about their experience at Accent Dental Care.',
  testimonials: [
    {
      text: 'I have been a long-time patient of Dr. Mirkin. I don\'t like going to the dentist, but she makes you feel at ease. The crown she placed has lasted over 10 years and is still strong. She is kind, informative, and really takes care of my teeth.',
      author: 'Haikela K.',
      detail: 'Patient since 2007',
    },
    {
      text: 'How grateful I am that I found Dr. Masha Mirkin! Even though I was nervous, Dr. Mirkin took the time to make me comfortable and the procedure was very well done. She spent considerable time doing my restorations beautifully.',
      author: 'Janicka S.',
      detail: 'New Patient',
    },
    {
      text: 'My visit with Dr. Mirkin was excellent. I always look forward to my appointments and I highly recommend her to all. If you need a dentist, please see her first — you will be glad you did!',
      author: 'Rob F.',
      detail: 'Patient since 2011',
    },
    {
      text: 'Dr. Mirkin is professional, kind, and has a wealth of knowledge. She is conservative in her approach — she doesn\'t over-treat. I feel confident that my dental health is in excellent hands.',
      author: 'Long-Time Patient',
      detail: 'Pacific Beach',
    },
    {
      text: 'The front desk team is always helpful and returns calls promptly. The entire office runs smoothly and I never feel rushed. This is what a dental practice should feel like.',
      author: 'San Diego Patient',
      detail: '5-Star Google Review',
    },
  ],
  cta: {
    headline: 'Join Our Family of Satisfied Patients',
    subheadline: 'Schedule your first appointment today.',
  },
} as const;

// Contact page
export const contactPage = {
  headline: 'Get in Touch',
  subheadline:
    'Have a question or ready to schedule an appointment? We\'d love to hear from you.',
  contactInfo: {
    callUs: 'Call Us',
    visitUs: 'Visit Us',
    hours: 'Office Hours',
  },
  form: {
    headline: 'Request an Appointment',
    subheadline: 'Fill out the form below and we\'ll get back to you shortly.',
    fields: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      service: 'Service Interested In',
      message: 'Message (Optional)',
      submit: 'Request Appointment',
    },
    services: [
      'General Cleaning & Exam',
      'Cosmetic Consultation',
      'Invisalign Consultation',
      'Dental Emergency',
      'Other',
    ],
  },
} as const;

// SEO metadata
export const seo = {
  defaultTitle: 'Accent Dental Care | Gentle Family & Cosmetic Dentistry in La Jolla, CA',
  defaultDescription:
    'Dr. Masha Mirkin provides gentle, comprehensive dental care for the whole family in La Jolla, San Diego. General dentistry, cosmetic treatments, Invisalign, and emergency care. Over 40 years of experience.',
  keywords: [
    'family dentist La Jolla',
    'cosmetic dentist San Diego',
    'Invisalign Pacific Beach',
    'dental cleanings La Jolla',
    'emergency dentist San Diego',
    'teeth whitening La Jolla',
    'porcelain veneers San Diego',
    'dr masha mirkin dentist',
  ],
} as const;

// Structured data for LocalBusiness
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Accent Dental Care',
  description: 'Gentle family and cosmetic dentistry in La Jolla, San Diego led by Dr. Masha Mirkin, DMD.',
  url: 'https://www.accentdentalcaresd.com',
  telephone: '(858) 490-6999',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8950 Villa La Jolla Dr., Suite C108',
    addressLocality: 'La Jolla',
    addressRegion: 'CA',
    postalCode: '92037',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.8719,
    longitude: -117.2143,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '09:00',
      closes: '15:00',
    },
  ],
  physician: {
    '@type': 'Person',
    name: 'Dr. Masha Mirkin, DMD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '150',
  },
} as const;