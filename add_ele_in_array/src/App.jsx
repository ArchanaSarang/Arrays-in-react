import { useState } from 'react';
import './App.css'
let order = 0;
function App() {

  const [cart, setCart] = useState([]);
  const [item, setItem] = useState('');

  function handleClick() {
    setCart([
      ...cart,

      {
        id: order++,
        item: item
      }
      
    ]);
    setItem('')
  }
  return (
    <>
      <h1>Cart Items</h1>
      <input
        type="text"
        value={item}
        onChange={e => setItem(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleClick}>Add to cart</button>

      <ul>
        {cart.map((c)=>(
          <li key={c.id}>{c.item}</li>
        ))}
      </ul>


    </>
  );

}
export default App