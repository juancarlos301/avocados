module.export = {
  rewrites: async () => {
    return [{ destination: '/product/:path*', source: '/avocado/:path*' }]
  },
}
