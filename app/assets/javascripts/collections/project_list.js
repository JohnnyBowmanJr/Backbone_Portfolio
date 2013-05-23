app.collections.ProjectList = Backbone.Collection.extend({

  model: app.models.Project,
  url: "/user_projects",
  //localStorage: new Backbone.LocalStorage('portfolio')


});