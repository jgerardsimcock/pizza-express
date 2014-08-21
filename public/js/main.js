$(document).ready(function(){


$.ajax('/orders', {
    method: "GET",
    success: function(data){
      console.log(data);
    },
    failure: function(error){
      console.log(error);
    }

});

});