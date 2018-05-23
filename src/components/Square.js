//@flow
import React, {Component, type Node} from "react";

type Props = {
  black: bool,
  children: Node,
  onHandleClick: Function,
  position: Object
}
export default class Square extends Component < Props > {

  render() {
    const {black, position, children, onHandleClick} = this.props;
    const fill = black
      ? "black"
      : "white";
    const stroke = black
      ? "white"
      : "black";

    return (
      <div
        style={{
        backgroundColor: fill,
        color: stroke,
        width: "100%",
        height: "100%"
      }}
        onClick={() => {
        onHandleClick(position)
      }}>
        {children}
      </div>
    );
  }
}
