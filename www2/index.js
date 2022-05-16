// import * as wasm from "mywasm";
// wasm.greet();

import { Universe, Cell } from "mywasm";
const CELL_SIZE = 5;
const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#000000";

const width = 64;
const height = 64;
const universe = Universe.new(width, height);
const canvas = document.getElementById("mywasm-canvas");
canvas.height = (CELL_SIZE + 1) * height + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;
const ctx = canvas.getContext('2d');


const drawGrid = () => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;
    for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1)+1, 0);
        ctx.lineTo(i * (CELL_SIZE + 1)+1, height* (CELL_SIZE + 1) + 1);
    }
    for (let i = 0; i <= height; i++) {
        ctx.moveTo(0, i * (CELL_SIZE + 1)+1, 0);
        ctx.lineTo(width* (CELL_SIZE + 1) + 1, i * (CELL_SIZE + 1)+1);
    }
    ctx.stroke();
}

const cellIndex = (row, col) => {
    return row * width + col;
}

import { memory } from "mywasm/mywasm_bg";
const drawCells = () => {
    const cellsPtr = universe.cells();
    const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

    ctx.beginPath();
    for (let row = 0; row < height; row ++) {
        for (let col = 0; col < width; col++) {
            const index = cellIndex(row, col);
            ctx.fillStyle = cells[index] === Cell.Dead ? DEAD_COLOR: ALIVE_COLOR;
            ctx.fillRect(
                col * (CELL_SIZE + 1) + 1,
                row * (CELL_SIZE + 1) + 1,
                CELL_SIZE,
                CELL_SIZE
            )
        }
    }
    ctx.stroke();
}

const renderLoop = () => {
    universe.tick();
    drawCells();
    requestAnimationFrame(renderLoop);
};
drawGrid();
requestAnimationFrame(renderLoop);