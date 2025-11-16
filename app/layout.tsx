import type { Metadata } from 'next'
import { Open_Sans, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bladderleaks.co.uk'),
  title: {
    default: 'Stop Bladder Leaks in 6 Weeks | EmpowerRF Treatment Bedford',
    template: '%s | Bladder Leak Treatment Bedford'
  },
  description: 'FDA-cleared EmpowerRF treatment for stress urinary incontinence. Stop bladder leaks without surgery. Nurse-led, CQC registered clinic in Bedford. £25 confidential consultation.',
  keywords: [
    'bladder leak treatment Bedford',
    'stress urinary incontinence Bedford',
    'EmpowerRF Bedford',
    'stop bladder leaks',
    'urinary incontinence treatment',
    'pelvic floor treatment',
    'womens health Bedford',
    'Claire Emmerson',
    'nurse-led clinic Bedford',
    'CQC registered Bedford',
    'non-surgical bladder treatment',
    'Clarity Cosmetics'
  ],
  icons: {
    icon: [
      { url: '/images/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicons/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/images/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  authors: [{ name: 'Claire Emmerson, RN' }],
  creator: 'Clarity Cosmetics',
  publisher: 'Clarity Cosmetics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Stop Bladder Leaks in 6 Weeks | EmpowerRF Treatment Bedford',
    description: 'FDA-cleared EmpowerRF treatment for stress urinary incontinence. Non-surgical solution by Registered Nurse Claire Emmerson. CQC registered clinic. Book £25 confidential consultation.',
    url: 'https://bladderleaks.co.uk',
    siteName: 'Bladder Leak Treatment Bedford - Clarity Cosmetics',
    images: [
      {
        url: '/images/home1.jpg',
        width: 1200,
        height: 630,
        alt: 'Claire Emmerson RN - EmpowerRF Bladder Leak Treatment Specialist in Bedford',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Bladder Leaks in 6 Weeks | EmpowerRF Treatment Bedford',
    description: 'FDA-cleared EmpowerRF treatment for stress urinary incontinence. Non-surgical, nurse-led treatment in Bedford.',
    images: ['/images/home1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://bladderleaks.co.uk/#medicalbusiness',
      name: 'Clarity Cosmetics - Bladder Leak Treatment Bedford',
      image: 'https://bladderleaks.co.uk/images/home1.jpg',
      description: 'CQC registered nurse-led clinic in Bedford specialising in EmpowerRF treatment for stress urinary incontinence and bladder leaks. Non-surgical, FDA-cleared solution for women\'s pelvic health.',
      url: 'https://bladderleaks.co.uk',
      telephone: '+447414154007',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Conway Crescent',
        addressLocality: 'Bedford',
        postalCode: 'MK41 7BW',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 52.1406,
        longitude: -0.4670,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      priceRange: '££',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '8',
        bestRating: '5',
        worstRating: '1',
      },
      founder: {
        '@id': 'https://bladderleaks.co.uk/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://bladderleaks.co.uk/#person',
      name: 'Claire Emmerson',
      jobTitle: 'Registered Nurse & Women\'s Health Specialist',
      image: 'https://bladderleaks.co.uk/images/home1.jpg',
      description: 'Registered Nurse and Registered Midwife with over 10 years of experience, specialising in women\'s pelvic health and EmpowerRF treatment for stress urinary incontinence. CQC registered and Independent Prescriber.',
      worksFor: {
        '@id': 'https://bladderleaks.co.uk/#medicalbusiness',
      },
      alumniOf: 'Nursing & Midwifery Council',
      hasCredential: [
        'Registered Nurse (RN)',
        'Registered Midwife',
        'Independent Prescriber',
        'Women\'s Health Specialist',
        'EmpowerRF Certified Practitioner',
      ],
    },
    {
      '@type': 'MedicalTherapy',
      name: 'EmpowerRF Treatment for Stress Urinary Incontinence',
      description: 'FDA-cleared non-surgical radiofrequency treatment for stress urinary incontinence and bladder leaks. Strengthens pelvic floor muscles and improves bladder control without surgery or downtime.',
      medicineSystem: 'Women\'s Health',
      relevantSpecialty: 'Urogynecology',
      procedure: {
        '@type': 'MedicalProcedure',
        name: 'EmpowerRF Bladder Leak Treatment',
        procedureType: 'Therapeutic',
        bodyLocation: 'Pelvic Floor',
      },
    },
    {
      '@type': 'Service',
      serviceType: 'Stress Urinary Incontinence Treatment',
      provider: {
        '@id': 'https://bladderleaks.co.uk/#medicalbusiness',
      },
      areaServed: {
        '@type': 'City',
        name: 'Bedford',
        containedIn: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'EmpowerRF Bladder Leak Treatments',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Initial Consultation',
              description: 'Confidential £25 consultation to assess your bladder leak concerns and create a personalized treatment plan',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '25',
                priceCurrency: 'GBP',
              },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'EmpowerRF Treatment Course',
              description: 'Complete treatment course for stress urinary incontinence using FDA-cleared EmpowerRF technology',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Follow-up Care',
              description: 'Ongoing support and follow-up appointments to monitor progress and optimize results',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://bladderleaks.co.uk/#website',
      url: 'https://bladderleaks.co.uk',
      name: 'Bladder Leak Treatment Bedford - Clarity Cosmetics',
      description: 'FDA-cleared EmpowerRF treatment for stress urinary incontinence in Bedford',
      publisher: {
        '@id': 'https://bladderleaks.co.uk/#medicalbusiness',
      },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://bladderleaks.co.uk',
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '463566641956136');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=463566641956136&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}