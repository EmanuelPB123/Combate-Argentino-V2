class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = [];
    this.init();
  }

  init() {
    this.grid = Array(this.height).fill(null).map(() => Array(this.width).fill(null));
    this.createGridElements();
  }

  createGridElements() {
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = ''; // Clear existing grid

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = row;
        cell.dataset.col = col;
        gridContainer.appendChild(cell);
      }
    }
  }

  getCell(row, col) {
    if (row >= 0 && row < this.height && col >= 0 && col < this.width) {
      return this.grid[row][col];
    }
    return null;
  }

  setCell(row, col, value) {
    if (row >= 0 && row < this.height && col >= 0 && col < this.width) {
      this.grid[row][col] = value;
    }
  }

  isCellOccupied(row, col) {
      return this.getCell(row, col) !== null;
  }

  getGridElement(row, col) {
    return document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
  }

  resetCellStyles() {
    document.querySelectorAll('.cell').forEach(cell => {
      cell.classList.remove('movable', 'selected');
    });
  }
}