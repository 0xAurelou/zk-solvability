const snarkjs = require("snarkjs");
const fs = require("fs");

async function run() {
    const { proof, publicSignals } = await snarkjs.plonk.fullProve({"sc": 3, "c": 6, "e": 1}, "circuit.wasm", "circuit_final.zkey");

    console.log("Proof: ");
    console.log(JSON.stringify(proof, null, 1));

    const vKey = JSON.parse(fs.readFileSync("verification_key.json"));

    const res = await snarkjs.plonk.verify(vKey, publicSignals, proof);

    if (res === true) {
        console.log("Usual Stablecoin is fully backed");
    } else {
        console.log("Warning Usual is not 100% backed");
    }

}

run().then(() => {
    process.exit(0);
});
