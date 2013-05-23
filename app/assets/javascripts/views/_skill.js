app.views._Project = Backbone.View.extend({

  tagName: 'li',
  className: 'skill',

  template: JST['templates/_skill'],

  events: {
  },

  render: function(){
  	this.$el.html(this.template({ skill : this.model }));

  	return this;	

  },
});