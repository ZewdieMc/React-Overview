import './App.css';
import {Counter} from './Counter';
import {useState, useEffect} from 'react';

function App() {
  //there's no way to acces count here.
  const [count, setCount] = useState(0);
  const increment= () => {
    setCount(count + 1);
  }

  const decrement = () =>{
    setCount(count  - 1);
  }

  useEffect(()=>{
    // fetch(url)
    // .then(res => res.json()).
    // then(data => setCount(data))
    // .catch(err => console.log(err))
    console.log(count)
  }, [count]);

  return (
    <div className="App">
      <Counter increment={increment} decrement={decrement} value={count}/>
    </div>
  );
}

export default App;


/**
 * What is the difference between class component and functional component.?
 * 
 * functional component: 
 *    it's function.
 *    it doesn't have state before react 16.8
 *    it doesn't have lifecylcle methods....(useEffect)
 *    it doesn't have render method.
 * 
 * class components:
 *  they are JS classes.
 *  they have render method
 *  they also have lifecycle method....(componentDidMount, constructor,? compoentDidUpdate, CompoenentWilUnMount)
 * 
 * 
 * sideEffects---> console.log, fetching data from API, 
 */