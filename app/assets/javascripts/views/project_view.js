app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  id: 'project-page',
  
  //this.template() will put whatever's in templates/project into this
  template: JST['templates/project'],

  initialize: function(){
    var _this = this;
    this.model.projects.fetch({
      success: function(projects){
        //Create a blank project for us to fill in
        _this.modelprojects.add({
          title: "New Project",
          url: "Click to edit",
          body: "Click to edit",
          user_id: _this.model.id
        });

        //look into what this is doing
        _this.listenTo(_this.model.projects, 'add', _this.render);
        _this.listenTo(_this.model.rojects, 'chnage, _this.render');
        _this.render();
      }
    })
  }

  render: function() {
    this.$el.html(this.template());

    // Try to find projects already in the local storage
    // var projectList = new app.collections.ProjectList();
    // // what does this return? seems like an array of functions
    // projectList.fetch();

    // This was moved to the success funciton
    // projectList.add({
    //   title: "New Project",
    //   url: "Click to edit",
    //   body: "Click to edit"
    // });

    var _this = this;

    this.model.projects.forEach(function(project){
      project.user = _this.model;
      var view = new app.views._Project({
        model: project,
        collection: _this.model.project
      });
      _this.$el.find('#project-list').append(view.render().el);
    });

    //this is the old iterator
    // projectList.forEach(function(project) {
    //   var view = new app.views._Project({ model: project });
    //   _this.$el.find('#project-list').append(view.render().el);
    // });

    var bio = new app.views.UserView({
      model: this.model
    }).render();
    this.$el.find('#user-bio').html(bio.el);

    return this;
  }


});