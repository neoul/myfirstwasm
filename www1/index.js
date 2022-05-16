// import * as wasm from "mywasm";
// wasm.greet();

import { Universe } from "mywasm";
const pre = document.getElementById("str-canvas");
const universe = Universe.new(64, 64);

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    requestAnimationFrame(renderLoop);
};
requestAnimationFrame(renderLoop);