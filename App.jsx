
import { useEffect, useState } from 'react';
import './App.css'
const initailList = [
                      {id : 1, item: 'abc'},
                      {id : 2, item: 'xyz'},
                      {id : 3, item: 'pqr'}];

function App() {

  const [cart, setCart] = useState(initailList);
  function handleDelete(cartId){
    setCart(
      cart.filter((c)=>c.id !== cartId ),
      
    );

  }
  
  return (
    <>
      <h1>Items in a cart</h1>
      <ul>
        {cart.map((c)=>(
          <li key={c.id}>{c.item}{' '}
          
          <button onClick={()=>{handleDelete(c.id)}}>Delete it</button>
          </li>
        ))}
      </ul>
      
    </>
  )
}

export default App
