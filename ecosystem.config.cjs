module.exports = {
  apps: [
    {
      name: 'ptb-frontend',
      script: '.next/standalone/server.js',
      env: {
        NODE_ENV: 'production',
        HOSTNAME: '0.0.0.0',
        PORT: '3000',
        NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://cdac-backend.onrender.com/',
      },
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: '512M',
    },
  ],
};
