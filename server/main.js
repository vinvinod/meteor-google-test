Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({
    service: 'google'
  });

  ServiceConfiguration.configurations.insert({
      service: 'google',
      clientId: '977615698918-5qs0n0f33nts3m1v95944f52i3tkleeu.apps.googleusercontent.com',
      secret: 'lsqJ7YWu7mbVkaxCw_RgqRJU'
  });
})
