![Banner](https://res.cloudinary.com/dlxxe3zdi/image/upload/v1626015416/Cart-react_mbeeuw.png)

# cart-react-ecommerce

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/cart-react-ecommerce.svg)](https://www.npmjs.com/package/cart-react-ecommerce) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![GitHub last commit](https://img.shields.io/github/last-commit/rohitmadrileno15/cart-react-ecommerce)
![GitHub issues](https://img.shields.io/github/issues-raw/rohitmadrileno15/cart-react-ecommerce)
![GitHub pull requests](https://img.shields.io/github/issues-pr/rohitmadrileno15/cart-react-ecommerce)
![GitHub](https://img.shields.io/github/license/rohitmadrileno15/cart-react-ecommerce)

## Features

- Easy-to-use Cart
- Handles almost all Cart features (There's always some room for improv though)
- One import && Easy Code
- Thorough documentation :heart_eyes:


## Install

```bash
npm install --save cart-react-ecommerce
```

![](https://media.giphy.com/media/1BFEEIo4h1BuTH8eqP/giphy.gif)


## Code Snippets

```jsx
//declare the cart
const myhappycart = new useCart( )

//Data will be added as name,price,quantity, and a json object comprising any other info
myhappycart.addItem( "Watch" , 1200 , 1 , {'manufacturer' : 'Abidas'})
myhappycart.addItem( "Shirt" , 1200 , 1 , {'manufacturer' : 'Abidas'})

  
//updates the quantity of the named item
myhappycart.updateItem("Shirt")

//remove a item by name
myhappycart.removeItem( "Shirt")

//get total price according to item price and quantity
myhappycart.getTotalPrice ()

//set cart currency for check out usage
myhappycart.setCartCurrency()

//get entire cart info
myhappycart.getAll()

//get Cart but in reverse
myhappycart.getCartinReverse()

//Empty your cart
myhappycart.setCartClear()

//get check our price along with discount or promo price
myhappycart.getCheckOutPrice ( 1000 )



```
Checkout more in [examples](https://github.com/rohitmadrileno15/cart-react-ecommerce/tree/master/example).

## Contribute

Add your own awesome gimmick and pull a PR.


![](https://media.giphy.com/media/8X2kIbRJZQkdXt46ur/giphy.gif)

## License

MIT © [rohitmadrileno15](https://github.com/rohitmadrileno15)
