import { combineReducers } from 'redux'
import { ADD_TRADE, REMOVE_TRADE, TradeTypes } from './actions'

const { BID, ASK } = TradeTypes

const tradesReducer = (tradeType) => {
  return (state = [], action) => {
    switch (action.type) {
      case ADD_TRADE:
        if (action.tradeType !== tradeType) {
          return state;
        }
        return [
          ...state,
          action
        ];
      case REMOVE_TRADE:
        return state.filter(trade => trade.id !== action.id);
      default:
        return state;
    }
  }
}

const exchangeApp = combineReducers({
  bids: tradesReducer(BID),
  asks: tradesReducer(ASK)
});

export default exchangeApp
