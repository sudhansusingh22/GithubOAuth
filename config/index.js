module.exports = {
  port: process.env.APP_PORT || 8181,

  horizon_options: {
    project_name: 'githubOauth',
    permissions: true,
    auth: {
      token_secret:  '<YOUR_SECRET_TOKEN>'
    }
  },

  github_oauth_options: {
    path: 'github',
    id: '63f7f2c6e67f52a45e50',
    secret: 'da295e87decd68219403e75195f9174147a5a302',
  },
};