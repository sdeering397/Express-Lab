
"use strict";

const express = require('express');
const items = require('./cart-items');

const itemsArray = items.cartItems;

const app = express();
const port = 3000;

// Get the request data as an object
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

// get all the items
app.get( '/cart-items', (req, res) => {
    res.json(itemsArray);
});

// get item by ID
app.get( '/cart-items/:id', (req, res) => {
    const id = req.params.id;
    const item = itemsArray.find( cartItem => {
        return id==cartItem.id
    })
    if(!item) {
    res.status(404)
    res.json("not found")
} else {
    res.json(item)
}
});

// add item
app.post( '/cart-items', (req, res) => {
    const list = req.body;

    itemsArray.push(list);
    res.status(201)
    res.json("Item success added");

});


// update the cart item in the array using a given ID
app.put( '/cart-items/:id', (req, res) => {
    const id = req.params.id;
    const newItem = req.body.data;

    itemsArray.splice(id, 1, newItem)
    res.json("Updated item");

});

// delete item
app.delete( '/cart-items/:id', (req, res) => {
    const id = req.params.id;

    itemsArray.splice(id, 1)
    res.status(204)
    res.json("Empty");
   
});



