import BetButton from './components/BetButton'
import {useSelector, useDispatch} from 'react-redux'
import { bindActionCreators} from "redux"
import {actionCreators} from "./state/index"



function App() {
  // returns the state of balance. can also do state => state to return whole object
  const balance = useSelector((state) => state.balance);
  const bet = useSelector((state) => state.bet)
  


  const dispatch = useDispatch();

  const {increaseBalance, decreaseBalance, increaseBet, decreaseBet} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      
      
      
      <h1>My Balance</h1>
      <h2>{balance}</h2>
            
      <button onClick={() => increaseBalance(100)}> Increase </button>
      <button onClick={() => decreaseBalance(50)}> Decrease </button>


      <h1 className='text-3xl font-bold underline'>Current Wager</h1>
        <h2>{bet}</h2>
      <div className='flex ' >        
        <BetButton className=" "increaseBet={increaseBet} > 5 </BetButton> 
        <BetButton increaseBet={increaseBet}> 10 </BetButton> 
        <BetButton increaseBet={increaseBet}> 25 </BetButton>
        <BetButton increaseBet={increaseBet}> 50 </BetButton> 
        <BetButton increaseBet={increaseBet}> 100 </BetButton>  
      </div>

      
      

    
    </div>
  );
}

export default App;
