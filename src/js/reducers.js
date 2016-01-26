import { combineReducers } from 'redux'
import { ADD_TRADE, REMOVE_TRADE } from './actions'

const tradesReducer = (isBid) => {
  return (state = [], action) => {
    switch (action.type) {
      case ADD_TRADE:
        console.log("a")
        if (action.isBid !== isBid) {
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
  bids: tradesReducer(true),
  asks: tradesReducer(false)
});

export default exchangeApp
