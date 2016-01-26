import React, { Component, PropTypes } from 'react'

export default class AddTrade extends Component {
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
        <input type="radio" name="bid-ask" ref='bid' defaultChecked />Bid<br />
        <input type="radio" name="bid-ask" ref='ask' />Ask<br />
        <input type="number" min="0" max="100" step="0.01" defaultValue="0" ref='price' />
        <button onClick={(e) => this.handleClick(e)}>
          Place Trade
        </button>
      </div>
    )
  }

  handleClick(e) {
    const price = parseFloat(this.refs.price.value.trim());
    const isBid = this.refs.bid.checked;
    const user = "TODO: change this in AddTrade";
    this.props.onAddClick({user, price, isBid});
    this.refs.price.value = 0
    this.refs.bid.checked = true
  }
}
