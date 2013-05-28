app.views._Skill = Backbone.View.extend({

  tagName: 'li',
  className: 'skill',
  template: JST['templates/_skill'],
  events: {
    'click .delete' : 'removeSkill',
    'click .name' : 'editSkill',
    'change .edit-name': 'updateSkill'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    if(this.options.project){
      this.model.set({ project_id: this.options.project.id });
    }
    this.model.view = this;
    this.model.bind("change", this.setName);
  },

  render: function() {
    this.$el.html(this.template({
      name: this.model.attributes.name
    }));
    return this;
  },

  removeSkill: function() {
    this.model.destroy();
    $(event.currentTarget).toggle('slide');
  },

  editSkill: function() {
    $(event.target).hide().next('.edit-name').show().focus();

  },

  updateSkill: function() {
    $(event.target).hide().prev('.name').show();
    var newName = $(event.target).val();
    this.model.set({ name : newName });

    var models = [];
    var _this = this;
    if (this.model.attributes.project) {
      this.model.attributes.project.skills.forEach(function(skill){
        models.push(skill);
      });
      models.push(_this.model);
      //this.model.attributes.project.skills.set(models);
      this.model.attributes.project.save();
    }
    else{
      this.model.project.skills.forEach(function(skill){
        if( _this.model.cid == skill.cid){
          skill.set({ name: newName});
        }
        models.push(skill);
      });
    }

    //how does this.model.attributes (or this.model.project) connect
    //with the "this.model.skills" in the initialize function in _project.js?
    //what do i have to put in the render SkillView loop?
    //this.model.attributes.project.skills.set(this.model);
    //this.model.attributes.project_id = this.model.attributes.project.id
    //when clicking on existing skill,
    //this.model.project.attributes.skills = skills array
    this.model.attributes.project.skills.set(models);
  }

});