import React, { Component, PropTypes } from '../lib/react'
import { connect } from '../lib/react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <h2>Hello world</h2>
    )
  }
}

App.propTypes = {
}

function mapStateToProps(state) {

  return {
  }
}

export default connect(mapStateToProps)(App)
