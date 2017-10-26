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
    id: '',
    secret: '',
  },
};
