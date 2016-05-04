Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  //waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'principal'});
Router.route('/company/', {name: 'company'});
Router.route('/results/', {name: 'results'});
Router.route('/database/', {name: 'database'});
