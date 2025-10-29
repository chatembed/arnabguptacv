/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://arnabgupta.me',
  generateRobotsTxt: false, // We already created a custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'], // Exclude server-side generated pages if any
  generateIndexSitemap: false,
  additionalPaths: async () => {
    // Add any dynamic paths here
    return [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
    ]
  },
}