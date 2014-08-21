$(document).ready(function(){


$.ajax('/orders', {
    method: "GET",
    success: function(data){
      console.log(data);
      console.log(data[0].toppings);
      console.log(data[0].sizes);

    },
    failure: function(error){
      console.log(error);
    }

});

});