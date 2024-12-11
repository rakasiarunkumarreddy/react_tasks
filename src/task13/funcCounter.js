import React,{useState} from 'react'

const FuncCounter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <h1>Task 13 Completed</h1>
      <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
    </div>
  )
}

export default FuncCounter
