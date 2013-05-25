app.models.Project = Backbone.Model.extend({

  url: function(){
   var url = '/users/' + this.user.id + '/projects';
    if(!this.isNew()) {
      url += '/' + this.id;
    }
    return url;
  },

  initialize: function() {
    this.skills = new app.collections.SkillList();
    this.skills.model = app.models.Skill; // Don't know why but this worked
  },

  validate: function() {
    if(this.attributes.url === "") {
      return "Argh!";
    }
  },

  getSkills: function() {
    this.skills.fetch();
    return this.skills.where({ project_id : this.id });
  },

  //when projects#create his the render :json line, 
  //this hits. It needs to take the skills and parse 
  //them right.
  parse: function(response) {
    var skills_json = response.skills;
    this.skills = new app.collections.SkillList(skills_json);
    return response;
  },

  toJSON: function() {
    var sa = [];
    this.skills.forEach(function(skill) {
      sa.push({ id: skill.get("id"), name: skill.get("name")});
    });
 
    var json = { project : _.extend(this.attributes, { 'skills_attributes': sa }) };
 
    delete json.project.skills;
    return json;
  }
 

  //hits when we sync() or save()

});
