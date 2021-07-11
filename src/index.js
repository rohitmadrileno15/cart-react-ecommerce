
import Dexie from 'dexie';
 

class useCart{
  constructor(   ){

    // default currency value is INR
    this.cartCurrency =  "INR" ;

    this.db = new Dexie("CartDatabase");
    this.db.version(1).stores({ items: "++id,name,price,quantity,others" });

  }


 updateItem( _name ) {
    const modifyQuantity = ( _id , _q ) => {
      this.db.items.update( _id , {quantity: 1 + _q })      
    }
   
    var got = this.db.items.where("name").equalsIgnoreCase(_name).first(function(count) {
      if(count != undefined) {
        modifyQuantity(count.id , count.quantity)        
        return true
      }          
    })  
  }
 
   
  addItem( _name , _price , _quantity , _others){

    this.db.items.where("name").equalsIgnoreCase(_name).first().then(
      (r) => {
        if(r === undefined) {
          this.db.items.add({name: _name, price:  _price , quantity :  _quantity , others: _others})
          
        }
        else{
          this.updateItem(_name)
        }
      }) 
    }


  removeItem( _name ) {
    this.db.items.where("name").equalsIgnoreCase(_name).first().then(
      (r) => {
        if(r === undefined) {
         return 
        }
        else{
          this.db.items.delete(r.id)
        }
      }) 
  }

  getTotalPrice () {    
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

  getCheckOutPrice (promo = 0, addtionalPrice = 0) {
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


  async getAll() {
      var gotall = await this.db.items.toArray()
      return gotall
    }


  setCartClear() {
      return this.db.items.clear()
      
    }

  async getCartinReverse() {
      var gotall = await this.db.items.reverse().toArray()
      return gotall
  }


  setCartCurrency( currency ) {
    this.cartCurrency = currency
  }

}
  



export { useCart }
 
