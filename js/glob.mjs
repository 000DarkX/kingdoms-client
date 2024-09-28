const version = globalThis.version = "0.0.3";
document.title = `Kingdoms v${version}`;

import SpriteSheet from "../lib/HeroJS/SpriteSheet.mjs";
const itemImages = globalThis.itemImages = new SpriteSheet(64, 64);
const terrainImages = globalThis.terrainImages = new SpriteSheet(64, 64);
const wallImages = globalThis.wallImages = new SpriteSheet(64, 64);
const decorImages = globalThis.decorImages = new SpriteSheet(64, 64);
const creatureImages = globalThis.creatureImages = new SpriteSheet(64, 64);

const cellWidth = globalThis.cellWidth   = 48;
const cellHeight = globalThis.cellHeight = 48;

const mapIds = globalThis.mapIds =  [
    { type: "terrain", start: 1, count: 960},
    { type: "walls", start: 961, count: 368},
    { type: "decor", start: 1329, count: 1248},
]

await itemImages.load("assets/items.png");
await terrainImages.load("assets/terrain.png");
await wallImages.load("assets/walls.png");
await decorImages.load("assets/decor.png");
await creatureImages.load("assets/creatures.png");