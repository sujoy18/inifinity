import React, {type Node, Component} from 'react';

const props = {
  black: Boolean,
  children: Node
}
class Square extends Component < props > {

  render() {
    const {black, children} = this.props
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
      }}>{children}</div>
    )

  }
}
export default Square;
