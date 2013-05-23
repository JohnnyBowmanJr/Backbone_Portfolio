app.views._Project = Backbone.View.extend({

  tagName: 'div',
  className: 'project',

  template: JST['templates/_project'],

  events: {
    'dblclick .project-name': 'editProjectName',
    'keypress .edit-title': 'updateTitle'
  },

  render: function() {
    this.$el.html(this.template({ project : this.model }));
     
    var skillList = new app.collections.SkillList();
    skillList.add([
      {name: "Flying Dutchman"},
      {name: "Black Pearl"}
    ]);
  
    skillList.fetch();

    skillList.forEach(function(skill) {
      var view = new app.views._Skill({});
      _this.$el.find('.skill-list').append(view.render().el);
    });


    return this;
  },

  editProjectName: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    if(event.which !== 13 || !new_title) {
      return;
    }

    this.model.set('title', new_title);
    this.model.save();
    this.$el.find('.edit-title').val('').hide().prev('h3').show().html(new_title);
  }

});