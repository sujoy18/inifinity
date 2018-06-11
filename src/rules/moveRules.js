//@flow
export function calculatePossibleMoves(pieceName : string) : Function {
  if(pieceName === 'KNIGHT') {
    return function (x, y) {
      const moves = [
        [
          1, -2
        ],
        [
          2, -1
        ],
        [
          2, -1
        ],
        [
          1, 2
        ],
        [
          -1, 2
        ],
        [
          -1, 1
        ],
        [
          -2, -1
        ],
        [-1, -2]
      ];

      const allowedMoved = moves.map((move) => {
        return {
          x: Math.abs(x + move[0]),
          y: Math.abs(y + move[1])
        };
      });
      return allowedMoved
    }
  }
  return () => {}
}
