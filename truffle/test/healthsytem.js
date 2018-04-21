var HealthSystem = artifacts.require("./HealthSystem.sol");

contract('HealthSystem', function (accounts) {

  it("add users", function () {
    var contrato;


    return HealthSystem.deployed().then(function (instance) {
      contrato = instance;
      return contrato.addAdmin(accounts[1], { from: accounts[0] });
    }).then(function () {
      return contrato.getMyRole.call({ from: accounts[1] })
    }).then(function (role) {
      console.log("Rol cuenta 1: " + role.toNumber());
      return contrato.addDoctor(accounts[2], { from: accounts[1] });
    }).then(function () {
      return contrato.getMyRole.call({ from: accounts[2] })
    }).then(function (role) {
      console.log("Rol cuenta 2: " + role.toNumber());
      return contrato.addPatient(accounts[3], { from: accounts[2] });
    }).then(function () {
      return contrato.getMyRole.call({ from: accounts[3] });
    }).then(function (role) {
      console.log("Rol cuenta 3: " + role.toNumber());
    });
  });

  it("add and retrieve indicator", function () {
    var contrato;

    return HealthSystem.deployed().then(function (instance) {
      contrato = instance;
      return contrato.setIndicator("Indicator 1", 10, 100, 30, { from: accounts[1] });
    }).then(function () {
      return contrato.getNumberIndicators.call({ from: accounts[2] });
    }).then(function (numberIndicators) {
      console.log("Number of indicators: " + numberIndicators.toNumber());
      return contrato.getIndicator.call(0, { from: accounts[0] });
    }).then(function (indicator) {
      console.log("Indicator 0: " + indicator[0] + ", " + indicator[1] + ", " + indicator[2] + ", " + indicator[3]);
    });
  });

  it("add and retrieve analysis", function () {
    var contrato;


    return HealthSystem.deployed().then(function (instance) {
      contrato = instance;

      var indicators = [1, 2, 3, 5];
      var values = [34, 56, 65, 190];
      return contrato.addAnalysis(indicators, values, accounts[3], 31, 1, 2018, 10, 30, { from: accounts[2] });
    }).then(function () {
      return contrato.getNumberAnalysis(accounts[3], { from: accounts[2] });
    }).then(function (numberAnalysis) {
      console.log("Numero de analysis: " + numberAnalysis.toNumber());
    }).then(function () {
      return contrato.getAnalysis(accounts[3], 0, { from: accounts[2] });
    }).then(function (analysis) {
      console.log("Analysis 0: {indicator:" + analysis[0][0] + ", valor: " + analysis[1][0] + ", doctor: " + analysis[2] + ", dia:" + analysis[3] + ", mes:" + analysis[4] + ", año:" + analysis[5] + ", score:" + analysis[6] + ", reward:" + analysis[7]);
    });
  });
});
