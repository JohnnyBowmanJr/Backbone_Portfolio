app.views.SkillView = Backbone.View.extend({
 	
 	tagName: 'li',
  className: 'skill',
  template: _.template($('.skill-list').html()),

  events: {
  	'click .delete': 'removeSkill'

  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  removeSkill: function(){

  }

});