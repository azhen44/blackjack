

const BetButton = (props) => {
  return (
    <button onClick={() => props.increaseBet(parseInt(props.children))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {props.children}
    </button>
  )
}


export default BetButton;