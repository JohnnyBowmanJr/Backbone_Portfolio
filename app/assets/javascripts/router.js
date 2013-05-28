app.Router = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'users/:id' : 'userShow'
  },

  home: function() {
    var view = new app.views.Home();
    $('#content').html(view.render().el);
  },


  //Backbone provides ability for us to pass user_id into function since users/:id is in routes
  userShow: function(user_id) {
    var user = new app.models.User({id: user_id});
    user.fetch({
      success: function(user, response, options) {
        var view = new app.views.ProjectView({ model : user });
        $('#content').html(view.render().el);

      }
    });
    //$("#project-list").sortable();
    // var view = new app.views.ProjectView({ model : user });
    //$('#content').html(view.render().el);
  }

});