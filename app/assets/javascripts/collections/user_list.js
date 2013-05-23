app.collections.UserList = Backbone.Collection.extend({

  model: app.models.User,
  url: "/users"
  //localStorage: new Backbone.LocalStorage('portfolio-user')


});