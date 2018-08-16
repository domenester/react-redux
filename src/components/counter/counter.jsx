import * as React from "react"
import { increment, decrement, stepChanged } from "./counterActions";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.counter.number} </h1>
        <input onChange={this.props.stepChanged} value={this.props.counter.step} type="number"/>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({counter: state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({increment, decrement, stepChanged}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)