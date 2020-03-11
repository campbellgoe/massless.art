const withOffline = require('next-offline')

const nextConfig = {
    generateInDevMode: false,
}

module.exports = withOffline(nextConfig)