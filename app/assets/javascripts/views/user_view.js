app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  id: 'bio',
  template: _.template($('#user-template').html()),

  events: {
    'dblclick .mission-name': 'editUserMission',
    'blur #mission': 'escapeUserMission',
    'keypress .edit-mission': 'updateMission'
  },
  render: function() {
    var html = this.template({ user: this.model});
    this.$el.html(html);
    $('#user-bio').html(this.el);
    return this;
  },

  editUserMission: function(){
    this.$el.addClass('editing');
    this.$el.find('.edit-mission').show().focus().prev('h3').hide();
  },

  escapeUserMission: function(){
    this.$el.addClass('editing');
    this.$el.find('.edit-mission').hide().prev('h3').show();
  },

  updateMission: function() {
    var new_mission = this.$el.find('.edit-mission').val().trim();
    if(event.which !== 13 || !new_mission) {
      return;
    }

    this.model.set('mission', new_mission);
    this.model.save();
    console.log(this.model.get('mission'));
    //this.$el.find('.edit-mission').hide().prev('h3').show();
    this.render();
  }

});
