import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.mattechservices.mx'; // TODO: Reemplazar con dominio real

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/intranet/',
        '/*?token=',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
