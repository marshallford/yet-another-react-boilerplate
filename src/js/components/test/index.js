import React from 'react'
import { inject, observer } from 'mobx-react'

const Test = (props) => {
  const incrementCount = () => {
    props.setCount(props.count + 1)
  }

  return (
    <div>
      <h1 onClick={incrementCount}>count: { props.count }</h1>
      <img src={require('assets/350x150.png')} />
    </div>
  )
}

Test.propTypes = {
  count: React.PropTypes.number.isRequired,
  setCount: React.PropTypes.func.isRequired,
}

export default inject(
  stores => ({
    count: stores.test.count,
    setCount: stores.test.setCount,
  })
)(observer(Test))
export { Test }
