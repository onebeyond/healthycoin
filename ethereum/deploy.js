const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const healthSystem = require('./build/HealthSystem.json');

const provider = new HDWalletProvider(
  'select wage version shield surge fringe crater silk pass tip course plug',
  'https://rinkeby.infura.io/GN6SwkKdQHdRUH9fRO3Y'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy HealthSystem from account', accounts[0]);

  const resultHS = await new web3.eth.Contract(JSON.parse(healthSystem.interface))
    .deploy({ data: healthSystem.bytecode })
    .send({ gas: '5000000', from: accounts[0] });

  console.log('Contract HealthSystem deployed to', resultHS.options.address);
};
deploy();
