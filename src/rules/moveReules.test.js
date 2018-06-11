import {calculatePossibleMoves} from './moveRules';

describe('peice move rules test', () => {

  it('should return all possible movement for KNIGHT', () => {
    const calcMove = calculatePossibleMoves('KNIGHT');
    expect(calcMove(2, 2)).toEqual([
      {
        x: 3,
        y: 0
      }, {
        x: 4,
        y: 1
      }, {
        x: 4,
        y: 1
      }, {
        x: 3,
        y: 4
      }, {
        x: 1,
        y: 4
      }, {
        x: 1,
        y: 3
      }, {
        x: 0,
        y: 1
      }, {
        x: 1,
        y: 0
      }
    ]);
  })
});
