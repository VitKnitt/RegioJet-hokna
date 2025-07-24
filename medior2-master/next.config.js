/** @type {import('next').NextConfig} */

const publicRuntimeConfig = {
  userUrl: process.env.USER_URL,
  usersUrl: process.env.USERS_URL,
  articlesUrl: process.env.ARTICLES_URL,
};


const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig,
};

module.exports = nextConfig;
