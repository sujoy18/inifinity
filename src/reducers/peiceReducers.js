import {type PieceState} from './type/peiceState'
import MOVE_PEICE from '../actions/actionConstants';
const defaultPeiceState : PieceState = {
  position: {
    x: 0,
    y: 0
  },
  peiceName: 'KNIGHT'
}
export default function (pieceState = defaultPeiceState, action) {
  if (action.type === MOVE_PEICE) {
    //call can move call move if can move
    return pieceState
  }
  return pieceState;
}
