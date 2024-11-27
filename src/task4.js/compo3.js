import React from 'react'

const Compo3 = (props) => {
  return (
    <div className='three'>
      <h1>{props.head}</h1>
      <h2>{props.sidehead}</h2>
      <p>{props.data1}</p>
      <h2>{props.sidehead2}</h2>
      <p>{props.data2}</p>
    </div>
  )
}

export default Compo3
