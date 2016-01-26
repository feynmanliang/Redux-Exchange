import { combineReducers } from 'redux'
import { ADD_TRADE, REMOVE_TRADE } from './actions'

const tradesReducer = (isBid) => {
  return (state = [], action) => {
    if (action.isBid === isBid) {
      switch (action.type) {
        case ADD_TRADE:
          return [
            ...state,
            action
          ];
        case REMOVE_TRADE:
          // TODO
        default:
          return state;
      }
    }
    else {
      return state;
    }
  }
}

const exchangeApp = combineReducers({
  bids: tradesReducer(true),
  asks: tradesReducer(false)
});

export default exchangeApp
