//@flow
import peiceReducers from './peiceReducers';
import {defaultPeiceState} from './initalState';
import * as types from '../actions/peiceActions';
import MOVE_PEICE from '../actions/actionConstants'

describe('peice reducer', () => {
  it('should return the initial state', () => {
    expect(peiceReducers(defaultPeiceState, {})).toEqual(defaultPeiceState)
  });

  it('should handle MOVE_PEICE action', () => {
    types.makeMove({
      peiceName: 'KNIGHT',
      position: {
        x: 1,
        y: 1
      }
    });
    expect(peiceReducers(defaultPeiceState, {
      type: MOVE_PEICE,
      peiceState: {
        peiceName: 'KNIGHT',
        position: {
          x: 1,
          y: 1
        }
      }
    })).toEqual({
      peiceName: 'KNIGHT',
      position: {
        x: 1,
        y: 1
      }
    })
  });

});
