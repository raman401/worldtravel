module.exports = {
  apps: [
    {
      name: 'worldtravel',
      cwd: '/var/www/worldtravel',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: '3000',
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      time: true,
    },
  ],
};
