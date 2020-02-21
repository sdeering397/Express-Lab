const cartItems = [
    {
    id: 1,
    product: 'bread',
    price: 2,
    quantity: 1,
},
{
    id: 2,
    product: 'peanutbutter',
    price: 4,
    quantity: 1,
},
{
    id: 3,
    product: 'jelly',
    price: 4,
    quantity: 1,
},
{
    id: 4,
    product: 'cheese',
    price: 3,
    quantity: 2,
}
    
];

const getRandomItem = () => {
    return cartItems[Math.floor(Math.random() * Math.floor(cartItems.length))];
}


module.exports = { cartItems, getRandomItem };