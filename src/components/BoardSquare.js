//@flow
import React, {Component, type Node} from "react";
import {DropTarget} from 'react-dnd';
import Square from './Square';
import {ItemType} from '../constants/dragDropItem';

type Props = {
  black: bool,
  children: Node,
  onHandleDragDrop: Function,
  position: Object,
  connectDropTarget: Function,
  isOver: bool
}

const sourceTarget = {
  drop(props) {
    props.onHandleDragDrop(props.position)
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}
class BoardScare extends Component < Props > {

  render() {
    const {black, children, connectDropTarget, isOver} = this.props;

    return connectDropTarget(
      <div
        style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black}>
          {children}
        </Square>
        {isOver && <div
          style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: 'yellow'
        }}/>}

      </div>
    );
  }
}
export default DropTarget(ItemType.KNIGHT, sourceTarget, collect)(BoardScare)
