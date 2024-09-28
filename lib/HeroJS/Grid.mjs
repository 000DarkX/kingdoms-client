

export default class Grid {
    constructor(width=100, height=100, cellWidth=32, cellHeight=32) {
        this.width      = width;
        this.height     = height;
        this.cellWidth  = cellWidth;
        this.cellHeight = cellHeight;
        this.clear();
    }

    clear() {
        this.data = new Array(this.height);
        for (let i = 0; i < this.width; ++i) {
            this.data[i] = new Array(this.height);
        }
    }

    search(x, y, w, h) {
        const result = new Set();
        const sx = Math.trunc(x / this.cellWidth);
        const sy = Math.trunc(y / this.cellHeight);

        const ex = Math.round((x + w) / this.cellWidth);
        const ey = Math.round((y + h) / this.cellHeight);

        const size = this.width * this.height;

        for (var y = sy; y <= ey; ++y) {
            for (var x = sx; x <= sx; ++x) {
                const id = x + y * this.width;
                if (id < 0 || id >= size) {
                    continue;
                }
                for (let v of this.data[id]) {
                    result.add(v);
                }
            }   
        }

        return result;
    }
    
    remove(obj) {
        for (let id of obj.gridId) {
            const arr = this.data[id];
            for (let i = 0; i < arr.length; ++i) {
                const o = arr[i];
                if (obj == o) {
                    arr.splice(i, 1);
                    break;
                }
            }
        }
    }

    add(obj) {
        obj.gridId = [];

        const sx = Math.trunc(obj.x / this.cellWidth);
        const sy = Math.trunc(obj.y / this.cellHeight);

        const ex = Math.round((obj.x + obj.w) / this.cellWidth);
        const ey = Math.round((obj.y + obj.h) / this.cellHeight);


        const size = this.width * this.height;

        for (var y = sy; y <= ey; ++y) {
            for (var x = sx; x <= sx; ++x) {
                const id = x + y * this.width;
                if (id < 0 || id >= size) {
                    continue;
                }
                this.data[id].push(obj);
                obj.gridId.push(id);
            }   
        }
    }
}