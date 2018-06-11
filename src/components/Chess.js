//@flow
import React, {Component} from "react";
import {bindActionCreators, type Dispatch} from 'redux';
import {connect} from 'react-redux'
import Board from "./Board";
import * as PeiceActions from '../actions/peiceActions'
import {type MoveAction} from '../actions/type/acytionType'
import {type PieceState} from '../reducers/type/peiceState';

type Props = {
  peice: PieceState,
  actions: {
    makeMove: MoveAction
  }
}
type State = {
  position: Object
}
class Chess extends Component < Props,
State > {
  state = {
    position: {
      x: 0,
      y: 0
    }
  }

  handleDragDrop = ({x, y} : Object) => {
    // this.setState({   position: {     x: position.x,     y: position.y   } })

    this
      .props
      .actions
      .makeMove({
        peiceName: 'KNIGHT',
        position: {
          x: x,
          y: y
        }
      })
  }

  render() {
    debugger;
    const {x, y} = this.props.peice.position;
    return <Board knightPosition={[x, y]} onHandleDragDrop={this.handleDragDrop}/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {peice: state.peice}
}

const mapDispatchToProps = (dispatch : Dispatch, ownProps) => {
  return {
    actions: {
      ...bindActionCreators(PeiceActions, dispatch)
    }
  }
}

const ChessContainer = connect(mapStateToProps, mapDispatchToProps)(Chess);
export default ChessContainer;
