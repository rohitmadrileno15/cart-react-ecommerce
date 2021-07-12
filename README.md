![Banner](https://res.cloudinary.com/dlxxe3zdi/image/upload/v1626015416/Cart-react_mbeeuw.png)

# cart-react-ecommerce

> React based local Cart application with major features

[![NPM](https://img.shields.io/npm/v/cart-react-ecommerce.svg)](https://www.npmjs.com/package/cart-react-ecommerce) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![GitHub last commit](https://img.shields.io/github/last-commit/rohitmadrileno15/cart-react-ecommerce)
![GitHub issues](https://img.shields.io/github/issues-raw/rohitmadrileno15/cart-react-ecommerce)
![GitHub pull requests](https://img.shields.io/github/issues-pr/rohitmadrileno15/cart-react-ecommerce)


## Features

- Easy-to-use Cart
- Handles almost all Cart features (There's always some room for improv though)
- One import && Easy Code
- Thorough documentation :heart_eyes:
- Now,Comes an easy to plug in Bag feature (Works more like Shortlister) 
- Shortlist your Products in Bag and add them Cart whenever you want

## Install

```bash
npm install --save cart-react-ecommerce
```

![](https://media.giphy.com/media/1BFEEIo4h1BuTH8eqP/giphy.gif)


## Code Snippets

#### *Cart* usage

```jsx
//declare the cart
const myhappycart = new useCart( )

//Data will be added as name,price,quantity, and a json object comprising any other info
myhappycart.addCartItem( "Watch" , 1200 , 1 , {'manufacturer' : 'Abidas'})
myhappycart.addCartItem( "Shirt" , 1200 , 1 , {'manufacturer' : 'Abidas'})

  
//updates the quantity of the named CartItem
myhappycart.updateCartItem("Shirt")

//remove a CartItem by name
myhappycart.removeCartItem( "Shirt")

//get total price according to CartItem price and quantity
myhappycart.getCartTotalPrice ()

//set cart currency for check out usage
myhappycart.setCartCurrency()

//get entire cart info
myhappycart.getCartAll()

//get Cart but in reverse
myhappycart.getCartinReverse()

//Empty your cart
myhappycart.setCartClear()

//get check our price along with promo price and additional charges
myhappycart.getCartCheckOutPrice ( 1000 , 50 )



```

#### *Bag* usage

*Product can be added only once and removed thus. And, no further update of quantity (as undeclared)*

```jsx
//declare the cart
const myhappybag = new useBag( )

//Data will be added as name,price and a json object comprising any other info
myhappybag.addBagItem( "Watch" , 1200  , {'manufacturer' : 'Abidas'})
myhappybag.addBagItem( "Shirt" , 1200   , {'manufacturer' : 'Abidas'})

//remove a BagItem by name
myhappybag.removeBagItem( "Shirt")

//get entire Bag info
myhappybag.getBagAll()

//Empty your cart
myhappybag.setBagClear()


```

Checkout more in [examples](https://github.com/rohitmadrileno15/cart-react-ecommerce/tree/master/example).

## Contribute

Add your own awesome gimmick and pull a PR.


![](https://media.giphy.com/media/8X2kIbRJZQkdXt46ur/giphy.gif)

## License

MIT © [rohitmadrileno15](https://github.com/rohitmadrileno15)
