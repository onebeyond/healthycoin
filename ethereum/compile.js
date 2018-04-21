const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const contracts = [
  'HealthSystem'
];
const getPath = (name) => path.resolve(__dirname, 'contracts', `${name}.sol`);

fs.ensureDirSync(buildPath);

const compileContract = (contractPath) => {
  console.log(`compiling ${contractPath}`);
  const source = fs.readFileSync(contractPath, 'utf8');
  const output = solc.compile(source, 1).contracts;
  console.log(solc.compile(source, 1))

  for (let contract in output) {
    console.log(`contract ${contract}`)
    fs.outputJsonSync(
      path.resolve(buildPath, `${contract.replace(':', '')}.json`),
      output[contract]
    );
  }
}

contracts.map(contract => compileContract(getPath(contract)));
