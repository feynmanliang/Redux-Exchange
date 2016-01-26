/*
 * action types
 */

export const ADD_TRADE = 'ADD_TRADE'
export const REMOVE_TRADE = 'REMOVE_TRADE'

/*
 * other constants
 */
export const TradeTypes = {
  BID: 'BID',
  ASK: 'ASK'
}

/*
 * action creators
 */
let nextTradeId = 0;

export function addTrade(trade) {
  return {
    type: ADD_TRADE,
    id: nextTradeId++,
    ...trade
  };
}

export function removeTrade(tradeId) {
  return {
    type: REMOVE_TRADE,
    id: tradeId
  };
}
