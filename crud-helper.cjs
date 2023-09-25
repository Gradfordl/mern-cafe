// Connect to the database
require("dotenv").config();
const db = require("./config/database.cjs");

//HOW TO USE CRUD HELPER
//node in terminal
//.load crud-helper.cjs

// Require the Mongoose models
// const User = require('./models/user.cjs');
// const Item = require('./models/item.cjs');
// const Category = require('./models/category.cjs');
const Order = require("./models/order.cjs");

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;


// //CREATING ORDERS
Order.create({
  user: "6509f4b9d4a43ee0275833ec",
  isPaid: true,
  lineItems: [
    {
      qty: 3,
      item: { name: 'Taco', emoji: '🌮',  price: 1.95 },
    },
    {
      qty: 1,
      item: { name: 'Burrito', emoji: '🌯', price: 4.95 },
    },
  ],
})
  .then((order) => {
    console.log(order);
  })
  .finally(() => {
    db.close();
  });
