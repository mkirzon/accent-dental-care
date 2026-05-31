# Phase 1: Content Audit & New Information Architecture

## Executive Summary

The existing website contains **200 crawled pages**, of which **174 are thin procedure sub-pages** (mostly duplicated or near-duplicated generic educational content). The site structure is bloated, SEO-keyword-stuffed, and not organized around patient needs.

This audit proposes a radical simplification: **8 high-quality pages** that serve real patient intent.

---

## Factual Information Extracted

### Practice Details
| Field | Value |
|-------|-------|
| Practice Name | Accent Dental Care |
| Dentist | Dr. Masha Mirkin, DMD |
| Address | 8950 Villa La Jolla Dr., Suite C108, La Jolla, CA 92037 |
| Phone | (858) 490-6999 |
| Serving | Pacific Beach, La Jolla, San Diego |

### Dr. Mirkin's Credentials
- Practicing dentistry since **1984** (40+ years experience)
- Serving San Diego community since **1998**
- Graduate of **Moscow Dental School** (1984)
- Advanced Study of **Clinical Periodontology** certification (1987)
- **Loma Linda University Dental School** — Advanced Clinical Dentistry
- **California Dental License**
- Regular continuing education courses
- Personal interests: painting, world travel

### Payment & Insurance
- Cash, personal checks, money orders, major credit cards
- Most dental insurance programs accepted (non-managed care, indemnity, PPO out-of-network)
- **Not** part of any managed care network
- CareCredit healthcare credit card accepted
- Practice membership plan available
- Payment expected at time of service

### Office Policies
- **No-show fee: $45**
- **24-hour cancellation notice** requested
- Repeated no-shows may difficulty scheduling future appointments

### Services Offered
**General:** Cleanings & Exams, Digital X-Rays, Fillings, Crowns, Bridges, Root Canal Therapy, Dentures & Partials, Fluoride Treatment, Sealants, Oral Cancer Exams, Dental Implants, Laser Dentistry, Emergency Dental Care

**Cosmetic:** Teeth Whitening, Porcelain Veneers, Bonding, Lumineers, Procera Crowns, Empress Restorations, Day White

**Orthodontics:** Invisalign

---

## Content Audit: Pages to REMOVE

| Page Category | Count | Reason |
|---|---|---|
| Duplicate procedure pages (e.g., `/cleanings-prevention-2`, `/cleanings-prevention-3`) | ~30 | Identical or near-identical content, clearly auto-generated |
| Thin educational sub-pages (e.g., `/periodontal-disease/periodontal-disease-and-osteoporosis/`) | ~60 | Generic stock content, not practice-specific, adds no value |
| `/our-practice/dr-mirkins-art` | 1 | Empty page (320 chars, just footer content) |
| `/our-practice/office-tour` | 1 | Empty page |
| `/patient-information/smile-gallery/*` | 6 | Empty or placeholder pages |
| `/patient-information/dental-videos` | 1 | Embedded video index with no original content |
| `/patient-information/links` | 1 | External links page, low value |
| `/patient-information/smile-analysis` | 1 | Tool/page with no substantive content |
| `/covid-19-update` | 1 | Outdated, no longer relevant |
| `/ada.aspx` | 1 | Legacy ASPX page, duplicate of homepage |

**Total pages recommended for removal: ~100+**

---

## Content Audit: Pages to CONSOLIDATE

| Source Pages | Consolidated Into | Reason |
|---|---|---|
| 12+ cleaning/prevention sub-pages | `/services/general-dentistry` | All prevention content belongs on one page |
| 34 cosmetic dentistry sub-pages | `/services/cosmetic-dentistry` | Veneers, whitening, bonding, crowns — one rich page |
| 25 restorations sub-pages | Split between General and Cosmetic | Crowns, bridges, fillings covered in parent categories |
| 32 periodontics sub-pages | `/services/general-dentistry` | Gum disease treatment is general dentistry |
| 10 orthodontics sub-pages | `/services/orthodontics` | Invisalign-focused single page |
| 6 endodontics sub-pages | `/services/general-dentistry` | Root canals are general dentistry |
| 4 oral surgery sub-pages | `/services/general-dentistry` | Extractions, TMJ covered briefly |
| 4 laser dentistry sub-pages | Mentioned in General or as callout | Not a standalone category |
| 3 dental emergencies variants | `/services#emergency` or homepage section | One section, not a page |
| Payment Options + Financing + Insurance | `/new-patients` | All new-patient financial info in one place |
| Office Policies + FAQ + New Patient Forms | `/new-patients` | Consolidated patient onboarding |
| Testimonials + Reviews + Leave a Review | `/reviews` | One reviews page |
| Our Practice + Meet Dr. Mirkin | `/about` | One strong about page |

---

## New Sitemap

```
/                          — Homepage
/about                     — About Dr. Mirkin & the Practice
/services                  — Services Overview (all services at a glance)
/services/general          — General & Preventive Dentistry
/services/cosmetic         — Cosmetic Dentistry
/services/orthodontics     — Invisalign & Orthodontics
/new-patients              — New Patient Info (insurance, forms, policies, FAQ)
/reviews                  — Patient Reviews & Testimonials
/contact                   — Contact, Map, Appointment Request
```

**Total: 9 pages** (down from 200)

---

## Why This Structure Is Better

### Patient-Driven, Not Keyword-Driven
The old structure was built for search engines with hundreds of thin pages. The new structure is built around the questions real patients ask:

1. **"What do you offer?"** → Homepage + Services Overview
2. **"Who is this dentist?"** → About
3. **"Do you treat my specific need?"** → Service detail pages
4. **"What do I need to know as a new patient?"** → New Patients
5. **"Can I trust this practice?"** → Reviews
6. **"How do I reach you?"** → Contact

### Eliminates Content Duplication
The old site had 3+ variant pages for nearly every service (e.g., `/cosmetic-dentistry`, `/cosmetic-dentistry-2`, `/cosmetic-dentistry-3`). The new structure has exactly one authoritative page per topic.

### Reduces Maintenance Burden
9 pages vs. 200 pages. Every page is a high-quality, content-rich page that is worth maintaining.

### Improves SEO Quality
Google penalizes thin, duplicate content. Nine substantial, well-written pages with proper structured data will outrank two hundred thin pages.

---

## Navigation Structure

### Primary Navigation (Desktop)
```
Home  |  About  |  Services ▼  |  New Patients  |  Reviews  |  Contact
                           ├── All Services
                           ├── General Dentistry
                           ├── Cosmetic Dentistry
                           └── Invisalign & Orthodontics
```

### Mobile Navigation (Hamburger Menu)
```
Home
About
Services (expandable)
  ├── All Services
  ├── General Dentistry
  ├── Cosmetic Dentistry
  └── Invisalign & Orthodontics
New Patients
Reviews
Contact
[Sticky "Schedule Appointment" button]
```

### Footer Navigation
```
Column 1: Logo + Tagline
Column 2: Quick Links (About, Services, New Patients, Reviews, Contact)
Column 3: Contact Info (Address, Phone, Hours)
Column 4: Services (General, Cosmetic, Orthodontics)
Bottom: Copyright + Privacy Policy
```

---

## Content That Should Be HIGHLIGHTED

1. **40+ years of experience** — Dr. Mirkin has been practicing since 1984. This is a massive trust signal.
2. **Pacific Beach / La Jolla location** — Local relevance for SEO.
3. **Patient testimonials** — Strong social proof with specific quotes about quality, longevity of work, and gentle care.
4. **Long-term patient relationships** — Testimonials mention patients since 2011, "long-time patient," etc.
5. **Continuing education** — Dr. Mirkin actively pursues advanced training.
6. **Accepts insurance + CareCredit** — Reduces financial friction for new patients.
7. **Gentle, conservative approach** — Repeatedly mentioned in testimonials and practice philosophy.

---

## Tone & Voice Guidelines

| Use | Avoid |
|-----|-------|
| "Dr. Mirkin has been caring for San Diego smiles since 1998" | "We are a dental practice devoted to restoring and enhancing..." |
| "Your smile is in good hands" | "A standard of excellence in personalized dental care enables us..." |
| "See why our patients stay for life" | Generic corporate boilerplate |
| Warm, conversational, confident | Clinical, technical, distant |
| "We focus on prevention so you spend less time in the chair" | "As a practice, we are true believers that preventative care and education are the keys..." |