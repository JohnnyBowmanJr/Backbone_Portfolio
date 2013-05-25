app.collections.ProjectList = Backbone.Collection.extend({

  model: app.models.Project,
  //why isn't it this?
  //url: '/users/' + this.user.id + '/projects'
  url: '/projects'

});