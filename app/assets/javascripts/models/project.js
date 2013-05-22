app.models.Project = Backbone.Model.extend({

  initialize: function() {
    var skills = new app.collections.SkillList([{name:'Ruby', id: 1}, {name: 'Rails', id: 2}]);

  },

  projects: function() {
    var list = new app.collections.ProjectList();
    list.fetch();
  }

});