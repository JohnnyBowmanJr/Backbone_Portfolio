//create a new view called ProjectView
app.views.ProjectView = Backbone.View.extend({

  //The next three lines create a new div with class "project" inside the element with id "project-template"
  //this new div that we're creating is referred to as "this.$el" further down.
  tagName: 'div',
  className: 'project',
  template: _.template($('#project-template').html()),
  //the last line right here also defined the logic for rendering the template. In this case
  //it dictactes we'll use Underscore's logic with "_.template", so in our template we'll use
  //Underscore's template syntax which has erb-style <%= blah %> markup.

  
  //this part matches jquery-like events to their functions defined below. 
  //For example, when someone doubleclicks on element with class "project-name"
  //the 'editProjectName function will execute.'
  events: {
    'dblclick .project-name': 'editProjectName',
    'dblclick .body': 'editProjectBody',
    // 'dblclick .url': 'editProjectUrl',
    'keypress .edit-title': 'updateTitle',
    'keypress .edit-body': 'updateBody',
    'blur .edit-title': 'escapeTitle',
    'blur .edit-body': 'escapeBody'
  },

  //In this function, you inject the markup into the elements. Without the render function, 
  //all your stuff never makes it to the template to be seen. These two lines 
  //seem standard across other tutorials I've seen, so I don't think we have to worry
  //about editing them too much.
  render: function() {
    //this.$el.html(this.template(this.model.toJSON()));
    //this.$el.html(this.template({project: this.model}));
    this.$el.html(this.template({project: this.model}));
    //render skill list here  
    return this;
  },

  editProjectName: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  escapeTitle: function() {
    this.$el.find('.edit-title').val('').hide().prev('h3').fadeIn(400);
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    if(event.which !== 13 || !new_title) {
      return;
    }

    this.model.set('title', new_title);
    this.model.save();
    this.$el.find('.edit-title').val('').hide().prev('h3').fadeIn(400).html(new_title);
  },

  editProjectBody: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-body').show().focus().next('.body').hide();
  },

  updateBody: function() {
    var new_body = this.$el.find('.edit-body').val().trim();
    if(event.which !== 13 || !new_body) {
      return;
    }

    this.model.set('body', new_body);
    this.model.save();
    this.$el.find('.edit-body').val('').hide().next('.body').fadeIn(400).html(new_body);
  },

  escapeBody: function() {
    this.$el.find('.edit-body').val('').hide().next('.body').fadeIn(400);
  },

  editProjectUrl: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-url').show().focus().next('a').hide();
  }


});