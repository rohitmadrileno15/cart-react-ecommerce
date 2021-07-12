
import Dexie from 'dexie';

 

class useCart{
  constructor( _username = "anonymous" ){
    // default currency value is INR
    this.cartCurrency =  "INR" ;
    this._username = _username

    this.db = new Dexie(  this._username  + "_" + "CartDatabase");
    this.db.version(1).stores({ cart: "++id,name,price,quantity,others"      });


  }


 updateCartItem( _name ) {
    const modifyQuantity = ( _id , _q ) => {
      this.db.cart.update( _id , {quantity:   _q + 1 })      
      return true
    }
   
    var got = this.db.cart.where("name").equalsIgnoreCase(_name).first(function(count) {
      if(count != undefined) {
        return modifyQuantity(count.id , count.quantity)        
        
      }          
    })  
  }
 
   
  addCartItem( _name , _price , _quantity , _others){
    
    this.db.cart.where("name").equalsIgnoreCase(_name).first().then(
      (r) => {

        if(r === undefined) {
 

          return this.db.cart.add({name: _name, price:  _price , quantity :  _quantity , others: _others})
          
        }
        else{
 
 
          return  this.updateCartItem(_name)
          
        }
      }) 
    }


  removeCartItem( _name ) {
    this.db.cart.where("name").equalsIgnoreCase(_name).first().then(
      (r) => {
        if(r === undefined) {
         return 
        }
        else{
          this.db.cart.delete(r.id)
        }
      }) 
  }

  getCartTotalPrice () {    
    var val_ = this.getAll().then(
      (r) => {
        var _totalPrice = 0
        
        for (let i = 0; i < r.length; i++) {
          _totalPrice += r[i].price * r[i].quantity 
        }
        return _totalPrice
      }
    )
    return val_
  }

  getCartCheckOutPrice (promo = 0, addtionalPrice = 0) {
    if( typeof(promo) != 'number' && typeof(addtionalPrice) != 'number' ) {
      throw 'Params must be a number!'
    }
    var gotTotalPrice = this.getTotalPrice().then(
      (r) => {  
        const final_val = r-promo+addtionalPrice
        return {"currency" : this.cartCurrency , 'grandTotal' : final_val}
      }
    )

    return gotTotalPrice
  }


  async getCartAll() {
      var gotall = await this.db.cart.toArray()
      return gotall
    }


  setCartClear() {
      return this.db.cart.clear()
      
    }

  async getCartinReverse() {
      var gotall = await this.db.cart.reverse().toArray()
      return gotall
  }


  setCartCurrency( currency ) {
    this.cartCurrency = currency
  }

}
  

 
class useBag{
  constructor( _username = "anonymous" ){
    // default currency value is INR

    this._username = _username

    this.db = new Dexie(  this._username  + "_" + "BagDatabase");
    this.db.version(1).stores({ Bag: "++id,name,price,others"      });
  }
 
  
  addBagItem( _name , _price , _others){
    
    this.db.Bag.where("name").equalsIgnoreCase(_name).first().then(
      (r) => {

        if(r === undefined) {
 
          return this.db.Bag.add({name: _name, price:  _price  , others: _others})
          
        }
 
        throw new Error("This Item is already there")
      }) 
    }


  removeBagItem( _name ) {
    this.db.Bag.where("name").equalsIgnoreCase(_name).first().then(
      (r) => {
        if(r === undefined) {
         return 
        }
        else{
          this.db.Bag.delete(r.id)
        }
      }) 
  }

  async getBagAll() {
      var gotall = await this.db.Bag.toArray()
      return gotall
    }

  setBagClear() {
      return this.db.Bag.clear()
      
    }
  
}
  


 
clear


export { useCart , useBag }
 
