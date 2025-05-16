class Grid {
    constructor(width, height, size) {
      this.width = width;
      this.height = height;
      this.size = size;
      this.stationaryCells = new Map();
      this.fallingCells = new Map();
      this.toBecomeStationary = [];
      this.toUpdate = [];
      this.toClear = [];
    }
    
    drawGrid() {
      for (let i = 0; i < this.width / this.size; i++) {
        for (let j = 0; j < this.height / this.size; j++) {
          stroke(255, 100, 100);
          square(i * this.size, j * this.size, this.size);
        }
      }
    }
    
    addParticle(x, y) {
      let cell = `${x},${y}`;
      if ((x >= 0 && x <= this.width) && (y >= 0 && y <= this.height))
        this.fallingCells.set(cell, 'red');
    }

    queueUpdateCell(coords, val) {
      let cellInfo = `${coords};${val}`;
      if (!this.toUpdate.includes(cellInfo)) {
        this.toUpdate.push(cellInfo);
      }
    }

    queueClearCell(coords) {
      if (!this.toClear.includes(coords)) {
        this.toClear.push(coords);
      }
    }

    updateCells() {
      this.toUpdate.forEach(cellInfo => {
        let coords = cellInfo.split(';')[0];
        let val = cellInfo.split(';')[1];
        this.fallingCells.set(coords, val);
      });
      this.toUpdate = [];
    }

    clearCells() {
      this.toClear.forEach(cell => {
        this.fallingCells.delete(cell);
      });
      this.toClear = [];
    }

    queueBecomeStationaryCell(coords, val) {
      let cellInfo = `${coords};${val}`;
      if (!this.toBecomeStationary.includes(cellInfo)) {
        this.toBecomeStationary.push(cellInfo);
      }
    }

    becomeStationaryCells() {
      this.toBecomeStationary.forEach(cellInfo => {
        let coords = cellInfo.split(';')[0];
        let val = cellInfo.split(';')[1];
        this.stationaryCells.set(coords, val);
        this.fallingCells.delete(coords);
      });
      this.toBecomeStationary = [];
    }

    drawStationaryCells() {
      for (let [coords, val] of this.stationaryCells) {
        this.drawCell(coords, 'blue');
      }
    }

    update() {
      for (let [coords, val] of this.fallingCells) {
        let x = Number(coords.split(',')[0]);
        let y = Number(coords.split(',')[1]);
        if (y < this.height - 2 * this.size) {
          let coordsBellow = `${x},${y + this.size}`;
          let coordsRight = `${x + this.size},${y + this.size}`;
          let coordsLeft = `${x - this.size},${y + this.size}`;
          if (!this.stationaryCells.has(`${coordsBellow}`)) {
            this.queueClearCell(coords);
            this.queueUpdateCell(`${coordsBellow}`, val);
          }
          else if (!this.stationaryCells.has(`${coordsRight}`)) {
            this.queueClearCell(coords);
            this.queueUpdateCell(`${coordsRight}`, val);
          } 
          else if (!this.stationaryCells.has(`${coordsLeft}`)) {
            this.queueClearCell(coords);
            this.queueUpdateCell(`${coordsLeft}`, val);
          }
          else {
            this.queueBecomeStationaryCell(coords, val);
          }
        }
        else {
            this.queueBecomeStationaryCell(coords, val);
          }
        this.drawCell(coords, val);
      }

      this.clearCells();
      this.updateCells();
      this.becomeStationaryCells();
      this.drawStationaryCells();
    }

    drawCell(coords, val) {
      fill(val);
      noStroke();
      let position = coords.split(',');
      square(Number(position[0]), Number(position[1]), this.size);
    }
  }