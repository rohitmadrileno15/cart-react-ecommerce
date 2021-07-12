
// import Dexie from 'dexie';
 

// class useBag{
//   constructor( _username = "anonymous" ){
//     // default currency value is INR

//     this._username = _username

//     this.db = new Dexie(  this._username  + "_" + "BagDatabase");
//     this.db.version(1).stores({ Bag: "++id,name,price,others"      });
//   }
  

//   migrateBagToCart() {

//   }

//   addBagItem( _name , _price , _others){
    
//     this.db.Bag.where("name").equalsIgnoreCase(_name).first().then(
//       (r) => {

//         if(r === undefined) {
 
//           return this.db.Bag.add({name: _name, price:  _price  , others: _others})
          
//         }
 
//         throw new Error("This Item is already there")
//       }) 
//     }


//   removeBagItem( _name ) {
//     this.db.Bag.where("name").equalsIgnoreCase(_name).first().then(
//       (r) => {
//         if(r === undefined) {
//          return 
//         }
//         else{
//           this.db.Bag.delete(r.id)
//         }
//       }) 
//   }

//   async getBagAll() {
//       var gotall = await this.db.Bag.toArray()
//       return gotall
//     }

//   setBagClear() {
//       return this.db.Bag.clear()
      
//     }
  
// }
  



// export { useBag }
 
