app.views._Project = Backbone.View.extend({

  tagName: 'li',
  className: 'project',

  template: JST['templates/_project'],

  events: {
    'dblclick .project-name': 'editProjectName',
    'change .edit-title': 'updateTitle',
    'click .add-skill' : 'addSkill'
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model.skills, 'add', this.render);
    this.listenTo(this.model.skills, 'change', this.update);
  },

  render: function() {
    this.$el.html(this.template({ project : this.model }));
    var _this = this;
    
    this.model.skills.forEach(function(skill) {
      skill.project = _this.model;
      var skill_html = new app.views._Skill({
        model: skill
      });
      _this.$el.find('.skill-list').append(skill_html.render().el);
    });

    return this;
  },

  editProjectName: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  update: function() {
    this.model.save();
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    this.model.set('title', new_title);
    if(this.model.isNew()){
      //this.model is like params(@user) in a rails create form. create(this.model) knows
      //to save all of this.model's attributes to the collection
      this.collection.create(this.model);
    }
    else {
      //since this is updating, we want to update an individual model, so the route needs an :id.
      this.model.save();
    }
    this.$el.find('.edit-title').val('').hide().prev('h3').show().html(new_title);
  },

  addSkill: function() {
    var skill = new app.views._Skill({
      model: new app.models.Skill({
        name: "Click here to edit",
        project: this.model
      })
    });
    //this.model.skills.add(skill);
    this.$el.find('.skill-list').append(skill.render().el).find(".skill:last").hide().fadeIn();
  }

});