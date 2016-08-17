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
      <img src={require('assets/350x150.png')} />
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

Test.propTypes = {
  clicks: React.PropTypes.number,
  runTest: React.PropTypes.func,
  visitHome: React.PropTypes.func,
  visitAbout: React.PropTypes.func,
}

export { Test }
export default connect(mapStateToProps, mapDispatchToProps)(Test)
