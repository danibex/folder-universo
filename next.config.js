/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const https = require('https');
const fs = require('fs');

const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/centrouniversosalvador.online/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/centrouniversosalvador.online/privkey.pem'),
};

https.createServer(options, app).listen(443);
