#Pizza Express

Pizza Express has become popular, so they are hiring some developers to help organize their orders!

#GETTING STARTED

##Database
1. Go to `https://mongolab.com/`, log in create a new database for this project. Also create a user
2. Add the `mongodb` URL to the mongoose.connect function location inside of the project at `models/orders.js` file.

##Getting Started
1. fork and clone this repo
2. first run `npm install` to get all the dependencies for this project
3. `nodemon server.js` to start your server
4. go to `localhost:3000` to make sure it works
5. go to the `localhost:3000/generateOrders` route to populate your database with some base objects (20 at a time)



##HTML

The only html page, and the only one you can use is the `index` page at the root route `'/'`.

There should be a form on `index` page so that you may submit a new pizza order. The page should NOT refresh when a form is submitted, you must harness the power of AJAX and jQuery to submit the information to the server.

Below the form should be an area which shows all pizza orders in the queue. When this page is hit for the first time, an AJAX call to `/orders` should fire off to retreive all the pizza orders that are in the queue. You must add these orders to the `.order-list` div element.

====

#REST API

The server is designed to accept 3 types of responses.

##GET

- `/orders`
  - Returns all orders in the queue


##POST

- `/orders`
  - Creates a new order
  - Returns successful `200` and returns a single JSON object

##DELETE

- `/orders/:orderId`
  - Removes a order from the queue

====
#Pizza Object

- size
  - "Large"
  - "Medium"
  - "Small"

- toppings
  - meat
    - "Pepperoni"
    - "Ham"
    - "Beef Topping"
    - "Italian Sausage"
    - "Pork Topping"
    - "Grilled Chicken"
    - "Bacon"
  - veggies
    - "Spinach"
    - "Green Peppers"
    - "Red Onions"
    - "Mushrooms"
    - "Black Olives"
    - "Tomatoes"
    - "Pineapple"
    - "Jalapenos"
    - "Garlic"