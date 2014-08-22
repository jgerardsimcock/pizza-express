$(document).ready(function(){


function checkboxClear(){
  var inputs = $('.order-form input');
  inputs.each(function(){
      $(this).removeAttr('checked');
  });
}
function dataValidation(data){
  if ($.isArray(data)){
    makePizza(data);
  } else {
    $('.order-list').append('<li>' + data.size + data.toppings.meats + data.toppings.veggies +'</li>');
  }
  checkboxClear();
}

  function makePizza(data) {
    for (var i = 0; i< data.length; i++){
      console.log(data);
      var veggies = data[i].toppings.veggies;
      var meat = data[i].toppings.meats;
      var size = data[i].size;
      var pizza = size + meat + veggies;
      $('.order-list').append('<li> ' + pizza + ' </li>');
    }
  }

  $.ajax('/orders', {
    method: "GET",
    success: dataValidation,
    failure: function(error){
      console.log(error);
    }
  });

  $('.order-form').submit(function(event){
    event.preventDefault();
    $.ajax("/orders", {
      method: "POST",
      data: $('.order-form').serialize(),
      success: dataValidation,
      failure: function(error){
        console.log(error);
      }
    });
  });
});