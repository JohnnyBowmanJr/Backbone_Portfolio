app.models.Project = Backbone.Model.extend({

  initialize: function() {
    //this.skills = new skill_list;
  },

  skills: function() {
    var skills = new app.collections.SkillList();
    skills.fetch();
  },

  projects: function() {
    var list = new app.collections.ProjectList();
    list.fetch();
  }

});