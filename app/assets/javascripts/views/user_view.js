app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  id: 'bio',
  template: JST['templates/user'],
  events: {
    'click .follow' : 'followUser'
  },

  render: function() {
    // Get some HTML from somewhere
    var html = this.template({user: this.model });
    // Append it to this view's div#bio element
    this.$el.html(html);

    this.model.followers.fetch({
      success: function(followers){
        var follow_html = _this.followTemplate.render({
          followers: followers.toJSON()
        });
        _this.$el.find('.followers').html(follow_html);
      }
    });

    return this;
  },

  followUser: function() {
    var current_user = new app.models.User();
    current_user.url = '/users/me';

    var _this = this;
    current_user.fetch({
      success: function(user) {
        user.url = '/users/' + user.id;
        _this.model.followers.add(user);
        _this.model.save();
        _this.render();
      }
    });
  }

});
