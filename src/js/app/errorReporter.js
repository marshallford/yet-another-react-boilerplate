import React from 'react'
import Redbox from 'redbox-react'

const errorReporter = ({ error }) => {
  console.error(error)
  return <Redbox error={error} />
}

errorReporter.propTypes = {
  error: React.PropTypes.instanceOf(Error).isRequired,
}

export default errorReporter
