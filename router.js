Router.configure({
  layoutTemplate: 'defaultLayout'
});

Router.map(function () {
  /**
   * The route's name is "hello"
   * The route's template is also "hello"
   * The default action will render the hello template
   */
  this.route('hello', {
    path: '/',
    template: 'hello',
    onBeforeAction: function(){
      Session.set('active', 'hello');
    }

  });
});