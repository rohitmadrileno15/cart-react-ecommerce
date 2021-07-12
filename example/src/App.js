 
import { useCart , useBag } from 'cart-react-ecommerce'

import React, { useState, useEffect } from "react"



const App = () => {

  //incase of user logged in get username
  const username = "vampire_red"

  const [all, setState] = useState([])

  //incase of user not logged in , keep the constructor parameter blank
  // It will take in a default value of anonymous

  const p = new useCart( username )
  const b = new useBag( username )

  // p.addItem( "Watch" , 1200 , 1 , {'manufacturer' : 'Adidas'})
  // p.addItem( "Shirt" , 1200 , 2 , {'manufacturer' : 'Adidas'})




    async function allItems  ()  { await p.getCartAll().then (
      (r) => {
        setState(r)
      }
      )}

      useEffect(()=>{
        allItems()
      },[]);
      

      function doAdd () {
        p.addCartItem( "Watch" , 1200 , 1 , {'manufacturer' : 'Adidas'})
        b.addBagItem("Shirt" , 800 , {})                        
        
        // p.removeCartItem( "Watch"  )
        // b.removeBagItem("Shirt" , 800 , {})                        
      }

  return (
    <div>
      <h1>React App</h1>
      <br/>
      <button
      onClick = { doAdd   }
      >
          CREATE
      </button>

            <ul>
              {all.map( data => (
              <li>
              {data.name} &nbsp; quantity of {data.quantity}
             </li>
              ))}

            </ul>
    </div>

  )
}

export default App
