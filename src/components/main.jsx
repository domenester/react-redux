import * as React from "react";
import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"
import counterReducer from "./counter/counterReducer"
import Counter from "./counter/counter"

const reducers = combineReducers({ counter: counterReducer })

export default props => {
  return (
    <Provider store={createStore(reducers)}>
      <Counter/>
    </Provider>
  )
}
