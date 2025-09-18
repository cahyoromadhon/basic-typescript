"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sui_scallop_sdk_1 = require("@scallop-io/sui-scallop-sdk");
const readline_1 = __importDefault(require("readline"));
function ask(question) {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            resolve(answer);
        });
    });
}
async function main() {
    const address = await ask('Masukkan SUI address: ');
    const scallopSDK = new sui_scallop_sdk_1.Scallop({
        addressId: '67c44a103fe1b8c454eb9699',
        networkType: 'mainnet'
    });
    await scallopSDK.init();
    const scallopQuery = await scallopSDK.createScallopQuery();
    const tvl = await scallopQuery.getTvl();
    const obligations = await scallopQuery.getObligations(address);
    const sCoinBalances = await scallopQuery.getSCoinAmounts(['ssui', 'swusdc'], address);
    console.log({ tvl, obligations, sCoinBalances });
}
main();
