module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b684c75379543f74607c2852d0386901'),
  },
});
