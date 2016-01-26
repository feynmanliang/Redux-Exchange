import React, { Component, PropTypes } from 'react'

export default class Trade extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClickTrade: PropTypes.func.isRequired
  };
  render() {
    return (
      <li onClick={() => this.props.onClickTrade(this.props.id)}>
        {this.props.user} -- {this.props.price}
      </li>
    )
  }
}
