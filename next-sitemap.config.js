/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://testlandingpages-nine.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/404', '/500'] },
    ],
  },
};