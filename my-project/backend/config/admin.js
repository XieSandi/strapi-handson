module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ebdf047ee14a670619332017528582a7'),
  },
});
