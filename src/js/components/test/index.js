import React from 'react'
import { inject, observer } from 'mobx-react'

const Test = inject('test')(observer((props) => {
  const upCount = () => {
    props.test.setCount(props.test.count + 1)
  }

  return (
    <div>
      <h1 onClick={upCount}>count: { props.test.count }</h1>
      <p>test</p>
      <img src={require('assets/350x150.png')} />
    </div>
  )
}))

export default Test
