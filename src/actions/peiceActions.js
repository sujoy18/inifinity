//@flow
import MOVE_PIECE from './actionConstants'
import {type MoveAction} from './type/acytionType'
export const makeMove = (pieceState : Object) : MoveAction => {
  return {type: MOVE_PIECE, pieceState}
}
