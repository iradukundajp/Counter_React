import { useState } from 'react'; 
import Button from "./components/Button";
import './App.css';

const App = () => {
    
    const setColor = () =>{
        if(count > 0){
           return'yellow';
        } else if(count < 0){
            return 'purple';
        } else {
           return 'white';
        }
    };
    const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <h1 style={{ color: setColor() }}>{count}</h1>
      <Button styling="blue" text="Decrement" handleClick={decrementHandler} />
      <Button styling="red" text="Reset" handleClick={resetHandler} />
      <Button styling="green" text="Increment" handleClick={incrementHandler} />
      
      
    </div>
  );
};

export default App;
