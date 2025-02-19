class AI {
  constructor(game) {
    this.game = game;
  }

  takeTurn() {
    const aiUnits = this.game.units.filter(unit => unit.type === 'ai');
    const playerUnits = this.game.units.filter(unit => unit.type === 'player');

    if (aiUnits.length === 0 || playerUnits.length === 0) {
      return;
    }

    const aiUnit = aiUnits[0];
    let target = playerUnits[0];

    // Find the closest player unit
    playerUnits.forEach(unit => {
      if (this.getDistance(aiUnit, unit) < this.getDistance(aiUnit, target)) {
        target = unit;
      }
    });

    // Check if the AI unit is in attack range of the target
    if (this.isAdjacent(aiUnit, target)) {
      aiUnit.attackUnit(target, this.game);
      this.game.endTurn();
      return;
    }

    const possibleMoves = this.findPossibleMoves(aiUnit);

    if (possibleMoves.length > 0) {
      possibleMoves.sort((a, b) => {
        const distanceA = Math.abs(a.row - target.row) + Math.abs(a.col - target.col);
        const distanceB = Math.abs(b.row - target.row) + Math.abs(b.col - target.col);
        return distanceA - distanceB;
      });

      const bestMove = possibleMoves[0];
      this.game.moveUnit(aiUnit, bestMove.row, bestMove.col);
    }

    this.game.endTurn();
  }

  findPossibleMoves(unit) {
    const possibleMoves = [];

    for (let row = 0; row < this.game.grid.height; row++) {
      for (let col = 0; col < this.game.grid.width; col++) {
        const distance = Math.abs(row - unit.row) + Math.abs(col - unit.col);
        if (distance <= unit.moveRange && !this.game.grid.isCellOccupied(row, col)) {
          possibleMoves.push({ row, col });
        }
      }
    }

    return possibleMoves;
  }

  isAdjacent(unit1, unit2) {
    const distance = Math.abs(unit1.row - unit2.row) + Math.abs(unit1.col - unit2.col);
    return distance === 1; // Units are adjacent if the distance is 1
  }

  getDistance(unit1, unit2) {
    return Math.abs(unit1.row - unit2.row) + Math.abs(unit1.col - unit2.col);
  }
}