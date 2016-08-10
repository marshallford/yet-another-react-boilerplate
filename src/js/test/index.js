import React from 'react'
import { connect } from 'react-redux'
import { test } from './testActions'
import { push } from 'react-router-redux'

const Test = ({ clicks, runTest, visitHome, visitAbout }) => {
  return (
    <div>
      <h1 onClick={runTest}>clicks: { clicks }</h1>
      <button onClick={visitAbout}>Visit about</button>
      <button onClick={visitHome}>Visit home</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  clicks: state.test.get('num'),
})

const mapDispatchToProps = (dispatch) => ({
  runTest: () => dispatch(test()),
  visitHome: () => dispatch(push('/')),
  visitAbout: () => dispatch(push('/about')),
})

export { Test }
export default connect(mapStateToProps, mapDispatchToProps)(Test)
