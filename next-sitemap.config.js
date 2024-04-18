module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  exclude: [
    "/plans/premium",
    "/plans/premium/students",
    "/plans/payasyougo",
    "/account",
    "/account/subscription",
    "/account/students",
  ],
  generateRobotsTxt: true,
  // Add any additional configuration options here
};
