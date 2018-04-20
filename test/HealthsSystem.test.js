const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../ethereum/build/HealthSystem.json');

let accounts;
let inbox;

describe ('Inbox', () => {
  beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: [] })
      .send({ from: accounts[0], gas: '1000000' });
  
    inbox.setProvider(provider);
  });

  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });

  /*
  it.skip('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!');
  });

  it.skip('it sets a new message', async () => {
    await inbox.methods.setMessage('new message').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'new message');
  });
  */
});
