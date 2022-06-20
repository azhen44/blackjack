import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { bindActionCreators} from "redux"
import {actionCreators} from "./state/index"


function App() {
  // returns the state of balance. can also do state => state to return whole object
  const balance = useSelector((state) => state.balance);


  console.log(balance)

  const dispatch = useDispatch();

  const {increaseBalance, decreaseBalance} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>{balance}</h2>
      <button onClick={() => increaseBalance(100)}> Increase </button>
      <button onClick={() => decreaseBalance(50)}> Decrease </button>
    
    </div>
  );
}

export default App;
