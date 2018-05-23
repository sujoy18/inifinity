//@flow
import React, {Component} from "react";
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Knight from "./Knight";
import Square from "./Square";

type Props = {
  knightPosition: Array < number >,
  onClickHandle: Function
}

export default class Board extends Component < Props > {

  handleClick = (position : Object) => {
    this
      .props
      .onClickHandle(position)
  }

  renderSquare(index : number) {
    const x = (index % 8);
    const y = Math.floor((index / 8));
    const black = (x + y) % 2 === 1;

    const [knightX,
      knightY] = this.props.knightPosition;

    const piece = knightX === x && knightY === y
      ? <Knight/>
      : null;

    return <div key={index} style={{
      width: '12.5%',
      height: '12.5%'
    }}>
      <Square
        onHandleClick={this.handleClick}
        black={black}
        position={{
        x: x,
        y: y
      }}>
        {piece}
      </Square>
    </div>;
  }
  render() {
    const squares = [];
    for (let index = 0; index < 64; index++) {
      squares.push(this.renderSquare(index));
    }
    return (
      <div
        style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap"
      }}>
        {squares}
      </div>
    );
  }
}
