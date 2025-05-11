class Grid {
    constructor(width, height, size) {
      this.width = width;
      this.height = height;
      this.size = size;
      this.cells = [];
    }
    
    drawGrid() {
      for (let i = 0; i < this.width; i++) {
        for (let j = 0; j < this.height; j++) {
          stroke(255, 255, 255);
          square(i * this.size, j * this.size, this.size);
        }
      }
    }
    
    containsCell(cell) {
      for (let i = 0; i < this.cells.length; i++) {
        if (this.cells[i].x == cell.x && this.cells[i].y == cell.y) {
          return true;
        }
      }
      return false;
    }
    
    addCell(x, y) {
      let cell = {'x' : x, 'y' : y};
      if (!this.containsCell(cell)) {
        this.cells.push(cell);
      }
    }
    
    clearCell(cell) {
      fill(255, 255, 255);
      noStroke();
      square(cell.x * this.size, cell.y * this.size, this.size);
    }
    
    renderCell(cell, r, g, b) {
      fill(r, g, b);
      noStroke();
      square(cell.x * this.size, cell.y * this.size, this.size);
    }
    
    update() {
      for (let i = 0; i < this.cells.length; i++) {
        let beneath = {'x' : this.cells[i].x, 'y' : this.cells[i].y + 1};
        let left = {'x' : this.cells[i].x - 1, 'y' : this.cells[i].y + 1};
        let right = {'x' : this.cells[i].x + 1, 'y' : this.cells[i].y + 1};
        if (this.cells[i].y < this.height - 1 && (this.cells[i].x > 0 || this.cells[i].x < this.width)) {
          if (!this.containsCell(beneath)) {
            this.clearCell(this.cells[i]);
            this.cells[i].y += 1;
            this.renderCell(this.cells[i], 255, 0, 0);
          }
          else if (this.containsCell(beneath) && !this.containsCell(left)) {
            this.clearCell(this.cells[i]);
            this.cells[i].y += 1;
            this.cells[i].x -= 1;
            this.renderCell(this.cells[i], 255, 0, 0);
          }
          else if (this.containsCell(beneath) && !this.containsCell(right)) {
            this.clearCell(this.cells[i]);
            this.cells[i].y += 1;
            this.cells[i].x += 1;
            this.renderCell(this.cells[i], 255, 0, 0);
          }
          else {
            this.renderCell(this.cells[i], 0, 0, 255);
          }
        } else {
            this.renderCell(this.cells[i], 0, 0, 255);
        }
      }
    }
     
    toString() {
      return `2d grid: ${this.width}x${this.height}`;
    }
  };