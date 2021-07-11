 
import { useCart } from 'cart-react-ecommerce'

import React, { useState, useEffect } from "react"
import 'cart-react-ecommerce/dist/index.css'


const App = () => {

  const [all, setState] = useState([])

  const p = new useCart( )

  p.addItem( "Watch" , 1200 , 1 , {'manufacturer' : 'Adidas'})
  p.addItem( "Shirt" , 1200 , 1 , {'manufacturer' : 'Adidas'})
  
  //updates the quantity
  p.updateItem("Shirt")



    const allItems = () => { p.getAll().then (
      (r) => {
        setState(r)
      }
      )}

      useEffect(()=>{
        allItems()
      },[]);
 

  return (
    <div>
      <h1>React App</h1>
      <br/>
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
