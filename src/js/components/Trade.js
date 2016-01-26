import React, { Component, PropTypes } from 'react'

export default class Trade extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  };
  render() {
    return (
      <li>
        {this.props.user} -- {this.props.price}
      </li>
    )
  }
}
