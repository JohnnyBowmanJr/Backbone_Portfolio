app.models.User = Backbone.Model.extend({
	localStorage: new Backbone.LocalStorage('portfolio'),
  
  full_name: function(){
    return this.attributes.first_name + " " + this.attributes.last_name;
  },

	projects: function() {
  	var list = new app.collections.ProjectList();
  	list.fetch();
  }

});
