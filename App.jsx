
import { useState } from 'react'
import './App.css'

const myList = [
  { id: 1, item: 'milk' },
  { id: 2, item: 'veggies' },
  { id: 3, item: 'eggs' },
  { id: 4, item: 'fruits' },
  { id: 5, item: 'flowers for pooja' }];

let nextId = 6;
function App() {

  const [list, setList] = useState(myList);
  const [item, setItem] = useState('');

  function handleAddItem() {
    // if(!item.trim()) // preventing adding blank item
    //   {
    //     return;
    //     // alert('add some item');
    //   }
    if(item == ''){
      alert('add something!');
      return;
    }else{
      const insertIdx = 1;

    const newList = [
      ...list.slice(0, insertIdx),
      { id: nextId, item: item },
      ...list.slice(insertIdx)

    ];

    nextId++;
    setList(newList);
    setItem('');
    }
    

}
  return (
    <>
      <h1>Adding new item in an exising list</h1>


      <input type="text"
        value={item}
        placeholder='add item name here'
        onChange={(e) => setItem(e.target.value)}
      /> {' '}

      <button onClick={handleAddItem}>Insert</button>
      <ol>
        {list.map((itm) => (
          <li key={itm.id}>{itm.item}</li>
        ))}
      </ol>
    </>
  )
}

export default App
