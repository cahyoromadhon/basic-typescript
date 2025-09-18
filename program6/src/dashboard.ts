import { Scallop } from '@scallop-io/sui-scallop-sdk';
import readline from 'readline';

function ask(question: string): Promise<string> {
  const rl = readline.createInterface({
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
  const scallopSDK = new Scallop({
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