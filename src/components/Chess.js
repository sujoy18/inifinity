//@flow
import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import Board from "./Board";
import * as PeiceActions from '../actions/peiceActions'
import {type MoveAction} from '../actions/type/acytionType'
import {type PieceState} from '../reducers/type/peiceState';

type Props = {
  makeMove: MoveAction,
  piece: PieceState,
  actions: Object
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

  handleClick = (piecePosition : Object) => {
    this.setState({
      position: {
        x: piecePosition.x,
        y: piecePosition.y
      }
    })
    debugger;
    this
      .props
      .actions
      .makeMove({
        peiceName: 'KNIGHT',
        position: {
          x: 1,
          y: 0
        }
      })
  }

  render() {
    debugger;
    return <Board
      knightPosition={[this.state.position.x, this.state.position.y]}
      onClickHandle={this.handleClick}/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {piece: state.pieceState}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: {
      ...bindActionCreators(PeiceActions, dispatch)
    }
  }
}

const ChessContainer = connect(mapStateToProps, mapDispatchToProps)(Chess)
export default ChessContainer;
