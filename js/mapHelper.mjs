
export function drawTile(ctx, x, y, id) {
    for (const obj of mapIds) {
        const key  = obj.start;
        const type = obj.type;
        const count = obj.count;

        if (id <= key + count) {
            switch (type) {
                case "terrain": globalThis.terrainImages.drawByID(ctx, id - key, x*cellWidth, y*cellHeight, cellWidth, cellHeight); break;
                case "walls": globalThis.wallImages.drawByID(ctx, id - key, x*cellWidth, y*cellHeight, cellWidth, cellHeight); break;
                case "decor": globalThis.decorImages.drawByID(ctx, id - key, x*cellWidth, y*cellHeight, cellWidth, cellHeight); break;
            }
        }
    }
}