angular.module('Equip', ['ui.router', 'equip.control', 'inventory.manage', 'auth.control', 'main.control', 'inventory.control', 'ngMaterial'])
  .config(function ($stateProvider) {
  	$stateProvider
	  	.state('signUp', {
	  	  url: '/signUp',
	  	  templateUrl : 'auth/signUp.html',
	  	  controller: 'AuthControl'
	  	})
      .state('signIn', {
        url: '/signIn',
        templateUrl : 'auth/signIn.html',
        controller: 'AuthControl'
      })
      .state('main', {
        url: '/main',
        templateUrl : 'main/index.html',
        controller: 'MainControl'
      })
      .state('main.inventory', {
        templateUrl : 'inventory/index.html',
        controller: 'InventoryControl'
      })
			.state('manage', {
				url: '/manage', 
				templateUrl : 'manage/index.html',
				controller: 'InventoryManage'
			})
			.state('itemDetails', {
				url: '/details'
			})
  }).run(function () {
  	console.log('running');
  })
 


