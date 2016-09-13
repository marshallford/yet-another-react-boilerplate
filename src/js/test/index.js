import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { test } from './testActions'

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

const mapDispatchToProps = (dispatch, ownProps) => ({
  runTest: () => dispatch(test()),
  visitHome: () => ownProps.router.push('/'),
  visitAbout: () => ownProps.router.push('/about'),
})

Test.propTypes = {
  clicks: React.PropTypes.number,
  runTest: React.PropTypes.func,
  visitHome: React.PropTypes.func,
  visitAbout: React.PropTypes.func,
}

export { Test }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test))
