import Script from 'next/script';

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Mat Fleet Tech Services (MFTS)',
    url: 'https://www.mattechservices.mx', // TODO: Reemplazar con URL real
    logo: 'https://www.mattechservices.mx/logo.png', // TODO: Reemplazar
    image: 'https://www.mattechservices.mx/images/oficina.jpg', // TODO: Reemplazar
    description: 'Servicios integrales de TI para tu empresa. Soporte técnico, redes y cableado estructurado, seguridad y soluciones Microsoft 365.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle de Ejemplo 123', // TODO: Reemplazar
      addressLocality: 'Ciudad', // TODO: Reemplazar
      postalCode: '10000', // TODO: Reemplazar
      addressCountry: 'MX'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52-55-1234-5678', // TODO: Reemplazar
      contactType: 'customer service',
      email: 'contacto@mattechservices.mx', // TODO: Reemplazar
      availableLanguage: ['Spanish', 'English']
    },
    award: [
      'Microsoft Partner', // TODO: Reemplazar/Ajustar
    ],
    priceRange: '$$$',
    sameAs: [
      'https://www.linkedin.com/company/mfts', // TODO: Reemplazar
      'https://twitter.com/mfts' // TODO: Reemplazar
    ]
  };

  return (
    <Script
      id="schema-professional-service"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
