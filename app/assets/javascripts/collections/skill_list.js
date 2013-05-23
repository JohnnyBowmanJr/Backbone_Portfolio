app.collections.SkillList = Backbone.Collection.extend({

  model: app.models.Skill,
  url: "/user_project_skills"
  //localStorage: new Backbone.LocalStorage('portfolio-skills')

});