app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  id: 'project-page',
  
  //this.template() will put whatever's in templates/project into this
  template: JST['templates/project'],

  render: function() {
    this.$el.html(this.template());

    // Try to find projects already in the local storage
    var projectList = new app.collections.ProjectList();
    // what does this return? seems like an array of functions
    projectList.fetch();

    // Create a blank project for us to fill in.
    projectList.add({
      title: "New Project",
      url: "Click to edit",
      body: "Click to edit"
    });

    var _this = this;

    projectList.forEach(function(project) {
      var view = new app.views._Project({ model: project });
      _this.$el.find('#project-list').append(view.render().el);
    });

    var bio = new app.views.UserView({
      model: this.model
    }).render();
    this.$el.find('#user-bio').html(bio.el);

    return this;
  }


});