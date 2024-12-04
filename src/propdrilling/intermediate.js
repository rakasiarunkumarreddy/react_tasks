import React from 'react'
import End from './end'

const Intermediate = (props) => {
  return (
    <div>
      <h1>This is Intermediate Component</h1>
    <End data={props.data}/>
    </div>
  )
}

export default Intermediate
