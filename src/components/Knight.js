//@flow
import React, {Component} from "react";
import {DragSource, type DragSourceType} from 'react-dnd';
import {ItemType} from '../constants/dragDropItem';

type props = {
  connectDragSource: DragSourceType < {} >,
  isDragging: boolean
}
const knightSource = {
  beginDrag(props) {
    return {};
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Knight extends Component < props > {

  render() {
    const {connectDragSource, isDragging} = this.props;
    return connectDragSource(
      <div
        style={{
        opacity: isDragging
          ? 0.5
          : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        ♘
      </div>
    )
  };
}
export default DragSource(ItemType.KNIGHT, knightSource, collect)(Knight);
