import React from 'react'
import Redbox from 'redbox-react'

// https://github.com/gaearon/react-hot-loader/issues/312#issuecomment-237813284
const errorReporter = ({ error }) => {
  if (error) {
    console.error(error.message, error.stack)
  }
  return <Redbox error={error} />
}

errorReporter.propTypes = {
  error: React.PropTypes.instanceOf(Error).isRequired,
}

export default errorReporter
