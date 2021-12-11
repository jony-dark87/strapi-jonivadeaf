module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('jonivadeaf'),
        api_key: env('376642713666218'),
        api_secret: env('ez0GidepEupTINi7tcb-4IGUZ2k'),
      },
    },
    // ...
  });