const assert = require('assert');
const expect = require('chai').expect
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../ethereum/build/HealthSystem.json');

let accounts;
let healthSys;

describe ('Inbox', () => {
  beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy the contract
    healthSys = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: [] })
      .send({ from: accounts[0], gas: '1000000' });
  
    healthSys.setProvider(provider);
  });

  it('deploys a contract', () => {
    expect(healthSys.options.address).to.not.be.undefined;
  });

  /*
  it.skip('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!');
  });
  */
  it.skip('should add a doctor', async () => {
    // await healthSys.methods.setMessage('new message').send({ from: accounts[0] });
    await healthSys.methods.addDoctor(accounts[1]).send({ from: accounts[0] });
    // const message = await inbox.methods.message().call();
    const doctor = await healthSys.method.getDoctor(accounts[1]).call();
    expect()
  });
  
});
