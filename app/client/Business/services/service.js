angular.module('equip.services', [])

    //========== INVENTORY ADD AND RETRIEVE SERVICES ================
  .factory('Inventory', function ($http) {

    var addItem = function (data) {

      return $http({
        method: 'POST',
        url: '/api/items',
        data: data
      })
      .then(function (response) {
        console.log('good post', response);
        return response;
      })
    }

    var getItems = function (businessId) {

      businessId = businessId ? '/' + businessId : ''

      return $http({
        method: 'GET',
        url: '/api/items'
      })
      .then(function (data) {
        console.log(businessId)
        console.log('we have the datas', data);
        return data;
      })
    }

    var removeItem = function (id) {
      return $http({
        method: 'DELETE',
        url: '/api/items/' + id 
      }).then(function (data) {
        //this will sign us in as a business- use the token returned here to sign the business in
        console.log(data);
      })
    }

    return {
      removeItem: removeItem,
      addItem: addItem,
      getItems : getItems
    }
  })


  //================= AUTHORIZATION SERVICES =======================
  .factory('Auth', function ($http) {

    //remember to JSON stringify data
  	var signUp = function (data) {
      return $http({
        method: 'POST',
        url: '/api/businesses/signup',
        data: data
      })
      .then(function (data) {
        window.localStorage.setItem('EQUIP_TOKEN', data.data.id)
        return data;
      })
  	}

    var signIn = function () {
      return $http({
        method: 'GET',
        url: '/api/businesses/signIn'
      }).then(function (data) {
        //this will sign us in as a business- use the token returned here to sign the business in
        console.log(data);
      })
    }


    var isAuthorized = function () {
      if (localStorage.EQUIP_TOKEN) {
        return true;
      }
      return false;
    }


  	return {
  		signIn: signIn,
  		signUp: signUp,
      isAuthorized: isAuthorized
  	}

  })
  .factory('Messages', function ($http) {



    var getMessages = function (data) {
      return $http({
        method: 'GET',
        url: '/api/messages'
      })
      .then(function (data) {
        console.log(data);
        console.log('we have the datas', data);
        return data;
      });
    }

    return {
      getMessages: getMessages
    }




  })





