import React from 'react'
import { connect } from 'react-redux'
import { test } from './testActions'

const Test = ({ clicks, runTest }) => {
  return (
    <h1 onClick={runTest}>clicks: { clicks }</h1>
  )
}

const mapStateToProps = (state, ownProps) => ({
  clicks: state.test.get('num'),
})

const mapDispatchToProps = (dispatch) => ({
  runTest: () => dispatch(test()),
})

export { Test }
export default connect(mapStateToProps, mapDispatchToProps)(Test)
