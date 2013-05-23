app.models.Project = Backbone.Model.extend({

  //localStorage: new Backbone.LocalStorage('portfolio'),
  url: function() {
    //return '/users' + this.id + '/projects';
  },

  initialize: function() {
    this.skills = new app.collections.SkillList();
    this.skills.model = app.models.Skill; // Don't know why but this worked
  },

  validate: function() {
    if(this.attributes.url === "") {
      return "Argh!";
    }
  },

  getSkills: function() {
    this.skills.fetch();
    return this.skills.where({ project_id : this.id });
  }

});