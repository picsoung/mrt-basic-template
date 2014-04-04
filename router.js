Router.configure({
  layoutTemplate: 'defaultLayout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home',
    onBeforeAction: function(){
      Session.set('active', 'home');
    }

  });
});