import React from 'react'
import { connect } from 'react-redux'

const Test = ({ msg }) => (
  <h1>{ msg }</h1>
)

const mapStateToProps = (state, ownProps) => ({
  msg: ownProps.location.pathname,
})

export { Test }
export default connect(mapStateToProps)(Test)
