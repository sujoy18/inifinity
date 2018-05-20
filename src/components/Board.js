//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import Knight from "./Knight";
import Square from "./Square";

export default class Board extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  };

  renderSquare(x, y) {
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;

    const piece = knightX === x && knightY === y ? <Knight /> : null;

    return <Square black={black}> {piece} </Square>;
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
          height: "100%"
        }}
      />
    );
  }
}
