class Unit {
  constructor(row, col, type, moveRange, health, attack, unitType) {
    this.row = row;
    this.col = col;
    this.type = type;
    this.moveRange = moveRange;
    this.health = health;
    this.attack = attack;
    this.unitType = unitType; 
    this.element = null; 

  }

  createUnitElement() {
    this.element = document.createElement('div');
    this.element.classList.add('unit');
    this.element.classList.add(this.type === 'player' ? 'player-unit' : 'ai-unit');
    this.element.classList.add(this.unitType); 

    const moveRangeDisplay = document.createElement('div');
    moveRangeDisplay.classList.add('move-range-display');
    moveRangeDisplay.textContent = this.moveRange;
    this.element.appendChild(moveRangeDisplay);

    const healthDisplay = document.createElement('div');
    healthDisplay.classList.add('health-display');
    this.element.appendChild(healthDisplay);
    this.updateHealthDisplay();

    return this.element;
  }

  placeUnit(grid) {
    const cellElement = grid.getGridElement(this.row, this.col);
    if (cellElement) {
      const unitElement = this.createUnitElement();
      cellElement.appendChild(unitElement);
    }
  }

  move(grid, newRow, newCol) {
    const oldCellElement = grid.getGridElement(this.row, this.col);
    if (oldCellElement && oldCellElement.contains(this.element)) {
      oldCellElement.removeChild(this.element);
    }

    this.row = newRow;
    this.col = newCol;

    const newCellElement = grid.getGridElement(this.row, this.col);
    if (newCellElement) {
      newCellElement.appendChild(this.element);
    }
  }

  attackUnit(target, game) {
    target.health -= this.attack;
    target.updateHealthDisplay();
    console.log(`${this.type} unit attacks, ${target.type} unit health: ${target.health}`);

    if (target.health <= 0) {
      target.destroy(game);
    }
  }

  updateHealthDisplay() {
    const healthDisplay = this.element.querySelector('.health-display');
    if (healthDisplay) {
      healthDisplay.textContent = this.health;
    }
  }

  destroy(game) {
    const cellElement = game.grid.getGridElement(this.row, this.col);
    if (cellElement && cellElement.contains(this.element)) {
      cellElement.removeChild(this.element);
    }
    game.grid.setCell(this.row, this.col, null);
    game.units = game.units.filter(unit => unit !== this);
  }
}