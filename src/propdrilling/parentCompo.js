import React from 'react'
import Intermediate from './intermediate'


const Parent = () => {
  return (
    <div>
      <Intermediate data="passing data from parent to nested child named Component named end.js"/>
      <h1>Task 7 Completed</h1>
      <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
    </div>
  )
}

export default Parent
