$(document).ready(function(){


$.ajax('/orders', {
    method: "GET",
    success: function(data){
      for(var i = 0; i< data.length; i++){
        var veggies = data[i].toppings.veggies;
        var meat = data[i].toppings.meats;
        var size = data[i].size;
        var pizza = size + meat + veggies;
        $('.order-list').append('<li> ' + pizza + ' </li>');
      }
    },
    failure: function(error){
      console.log(error);
    }

});

});