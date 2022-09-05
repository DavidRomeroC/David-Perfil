// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   // swcMinify: true,

//     images: {
//       loader: "imgix",
//       path: 'https://api.github.com',
//     },
// }

// module.exports = nextConfig

// module.exports = {
//   images: {
//     loader: 'cloudinary',
//     path: 'https://github.com',
//   },
// }

module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}