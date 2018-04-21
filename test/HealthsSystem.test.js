const assert = require('assert');
const expect = require('chai').expect
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../ethereum/build/HealthSystem.json');

let accounts;
let healthSys;

describe ('HealthSystem', () => {
  beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy the contract
    healthSys = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: [] })
      .send({ from: accounts[0], gas: '1200000' });
    // console.log(`accounts: ${accounts}`);
    healthSys.setProvider(provider);

    await healthSys.methods.addAdmin(accounts[1]).send({ from: accounts[0] });
    await healthSys.methods.addDoctor(accounts[2]).send({ from: accounts[1] });
    await healthSys.methods.addPatient(accounts[3]).send({ from: accounts[2] });
  });

  it('deploys a contract', () => {
    // expect(healthSys.options.address).to.not.be.undefined;
    assert.ok(healthSys.options.address);
  });
  
  it('should get right roles', async () => {
    const adminRole = await healthSys.methods.getMyRole().call({ from: accounts[1] });
    const doctorRole = await healthSys.methods.getMyRole().call({ from: accounts[2] });
    const patientRole = await healthSys.methods.getMyRole().call({ from: accounts[3] });
    // console.log(`admin: ${JSON.stringify(adminRole)}, doctor: ${doctorRole}, patient: ${patientRole}`);
    expect(adminRole).to.equal('1');
    expect(doctorRole).to.equal('2');
    expect(patientRole).to.equal('3');
  });

  it('should add an analysis', async () => {
    // [1, 2], [100, 200], '0x583031d1113ad414f02576bd6afabfb302140225', 10, 10, 2020, 258, 8
    await healthSys.methods.addAnalysis([1, 2], [100, 200], accounts[3], 10, 10, 2020, 258, 8).send({ from: accounts[2], gas: 289445 });
    const analysisCount = await healthSys.methods.getNumberAnalysis(accounts[3]).call({ from: accounts[3] });
    expect(parseInt(analysisCount, 10)).equal(1);

    const analysis = await healthSys.methods.getAnalysis(accounts[3], 0).call({ from: accounts[2] });
    expect(analysis).not.to.be.undefined;
    expect(analysis['2']).equal(accounts[2]);
  });

  
});
