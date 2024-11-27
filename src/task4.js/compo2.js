import React from 'react'

const Compo2 = (props) => {
  return (
    <div className='two'>
        <h1>{props.name}</h1>
        <p>{props.data}</p>
        <p>{props.data2}</p>
    </div>
  )
}

export default Compo2
