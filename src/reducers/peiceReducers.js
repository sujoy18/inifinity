//@flow
import {type PeiceState} from './type/peiceState'
import {type MoveAction} from '../actions/type/acytionType';
import MOVE_PEICE from '../actions/actionConstants';
import {defaultPeiceState} from './initalState'

export default function (peiceState : PeiceState = defaultPeiceState, action : MoveAction) {
  console.log(action)
  if (action.type === MOVE_PEICE) {
    //call can move call move if can move
    return {
      ...peiceState,
      position: action.peiceState.position
    }

  }
  return peiceState;
}
