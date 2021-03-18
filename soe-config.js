module.exports = {
  siteUrl: "http://www.nlemmercv.co.za",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.8,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: ["/", "/contact", "/about", "/projects"],
      },
      {
        userAgent: "Googlebot desktop",
        allow: ["/", "/contact", "/about", "/projects"],
      },
      {
        userAgent: "Googlebot smartphone",
        allow: ["/", "/contact", "/about", "/projects"],
      },
    ],
    additionalSitemaps: ["http://www.nlemmercv.co.za/sitemap.xml"],
  },
};
