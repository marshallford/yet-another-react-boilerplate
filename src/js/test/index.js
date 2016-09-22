import React from 'react'
import { connect } from 'react-redux'
import { test } from './testActions'

const Test = ({ clicks, runTest }) => {
  return (
    <div>
      <h1 onClick={runTest}>clicks: { clicks }</h1>
      <img src={require('assets/350x150.png')} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  clicks: state.test.get('num'),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  runTest: () => { dispatch(test()) },
})

Test.propTypes = {
  clicks: React.PropTypes.number,
  runTest: React.PropTypes.func,
}

export { Test }
export default connect(mapStateToProps, mapDispatchToProps)(Test)
