import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';





function App() {
  
  function handleClick() {
    alert('button  clicked')
  }
  const handleClick2 = () =>{
    alert('clicked check');
  }
  const addToFive = (num) =>{
  alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts 02</h3>

      <Friends></Friends>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
       <button onClick={() =>{alert('thrid click')}}>Third</button>
       {/* vejailla onclick  */}
       <button onClick={() => addToFive(3)}>click5</button>
    </>
  )
}

export default App
