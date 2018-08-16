import * as React from "react"
import { increment, decrement, stepChanged } from "./counterActions";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const Counter = props => {
  console.log('props', props);
  return(
    <div>
      <h1> {props.counter.number} </h1>
      <input onChange={props.stepChanged} value={props.counter.step} type="number"/>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  )
}
const mapStateToProps = state => ({counter: state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({increment, decrement, stepChanged}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)