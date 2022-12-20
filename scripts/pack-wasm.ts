import * as fs from "fs";

const wasmData = fs.readFileSync('./src/funcfiftlib.wasm');
const out = `module.exports = { FuncFiftLibWasm: '${wasmData.toString('base64')}' }`;

fs.writeFileSync('./src/funcfiftlib.wasm.js', out);