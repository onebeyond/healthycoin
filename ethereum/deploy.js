const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const healthySystem = require('./build/HealthSystem.json');
const analysisParameters = require('./build/AnalysisParameters.json');

const provider = new HDWalletProvider(
  'select wage version shield surge fringe crater silk pass tip course plug',
  'https://rinkeby.infura.io/GN6SwkKdQHdRUH9fRO3Y'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy HealthySystem from account', accounts[0]);

  const resultHS = await new web3.eth.Contract(JSON.parse(healthySystem.interface))
    .deploy({ data: healthySystem.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract HealthySystem deployed to', resultHS.options.address);

  console.log('Attempting to deploy AnalysisParameters from account', accounts[0]);

  const resultAP = await new web3.eth.Contract(JSON.parse(analysisParameters.interface))
    .deploy({ data: analysisParameters.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract AnalysisParameters deployed to', resultAP.options.address);
};
deploy();
