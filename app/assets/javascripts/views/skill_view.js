app.views.ProjectView = Backbone.View.extend({
 	
 	tagName: 'li',
  className: 'skill',
  template: _.template($('#project-template').html()),

  events: {
  	'click .delete': 'removeSkill'

  },

  removeSkill: function(){

  }

});