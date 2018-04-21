const assert = require('assert');
const expect = require('chai').expect
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../ethereum/build/AnalysisParameters.json');

let accounts;
let analysisParams;

describe ('AnalysisParameters', () => {
  beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy the contract
    analysisParams = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: [] })
      .send({ from: accounts[0], gas: '1200000' });
    // console.log(`accounts: ${accounts}`);
    analysisParams.setProvider(provider);
  });

  it('should deploy a contract', () => {
    // expect(healthSys.options.address).to.not.be.undefined;
    assert.ok(analysisParams.options.address);
  });

  it('should add an indicator', async () => {
    let countIndicators = await analysisParams.methods.numIndicators().call();
    expect(countIndicators).not.to.be.undefined;
    expect(parseInt(countIndicators, 10)).equal(0);
    
    await analysisParams.methods.setIndicator('sugar', 20, 100, 5).send({ from: accounts[1], gas: 124487 });
    countIndicators = await analysisParams.methods.numIndicators().call();
    expect(parseInt(countIndicators)).equal(1);
    
    const sugar = await analysisParams.methods.getIndicator(0).call();
    expect(sugar['0']).equal('sugar');
  });

  it('should check the value in range', async () => {
    await analysisParams.methods.setIndicator('sugar', 20, 100, 5).send({ from: accounts[1], gas: 124487 });
    
    let sugarVal = 110;
    let check = await analysisParams.methods.checkValue(0, sugarVal).call();
    expect(parseInt(check, 10)).equal(0);
    sugarVal = 80;
    check = await analysisParams.methods.checkValue(0, sugarVal).call();
    expect(parseInt(check, 10)).equal(1);
    sugarVal = 10;
    check = await analysisParams.methods.checkValue(0, sugarVal).call();
    expect(parseInt(check, 10)).equal(2);
  });
});