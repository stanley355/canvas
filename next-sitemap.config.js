module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  exclude: [
    "/plans/premium",
    "/plans/students",
    "/account",
    "/account/change-password",
    "/students/application",
  ],
  generateRobotsTxt: true,
  // Add any additional configuration options here
};
