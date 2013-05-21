app.collections.SkillList = Backbone.Collection.extend({

  model: app.models.Project,
  localStorage: new Backbone.LocalStorage('portfolio')

});