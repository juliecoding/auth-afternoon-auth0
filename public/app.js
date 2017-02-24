angular.module("app", ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/home')

  $stateProvider
  .state('base', {
    url: '/',
    templateUrl: './templates/base.html'
  })
  .state('home', {
    url: '/home',
    templateUrl: './templates/home.html'
  })
  .state('friend', {
    url: '/friend/:github_username',
    templateUrl: './templates/friend.html'
  })
})
