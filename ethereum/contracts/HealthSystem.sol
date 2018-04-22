pragma solidity ^0.4.0;

contract HealthSystem {

    uint constant WEIS_PER_VALID_INDICATOR = 1;

    enum Role {
      Owner,
      Admin,
      Doctor,
      Patient
    }

    struct PatientData {
      Analysis[] history;
      bool valid;
      uint totalReward;
    }

    struct Results {
      uint[] indicatorIds;
      uint[] values;
    }

    struct Date {
      uint year;
      uint month;
      uint day;
    }

    struct Analysis {
      Results results;
      address doctor;
      uint score;
      uint reward;
      Date date;
    }

    struct Indicator{
      string name;
      uint min;
      uint max;
      uint weight; //between 0 and 100
      bool valid;
    }

    enum Compared {
      High,
      Healthy,
      Low
    }

    address owner;
    mapping(address => bool) admins;
    mapping(address => bool) doctors;
    mapping(address => PatientData) patients;

    mapping(uint => Indicator) indicators;

    uint numAdmins;
    uint numDoctors;
    uint numPatients;
    uint numAnalysis;
    uint numIndicators;


    function HealthSystem() public{
      owner = msg.sender;

      addAdmin(0xdC966970783D1c3c53077B0222f96261E841673c);
      addAdmin(0xCaE72709cBb872d3Eb77E7295CF432CB0c67343a);
      addAdmin(0xa8dE78B6828BB1F32D31C0d99361eA382626C0C8);
      addAdmin(0xbBD3d6308D7dd09D897e2Bd52BA8da07659Ec725);
      addAdmin(0xD5E4eB1CF3Fa61e168C4f92d0a0335a4Da012BC2);
      addAdmin(0x49cE8B03D57004Bdca44B5504912B8d23fFe92CC);

      addDoctor(0xcEb53A5d0b45865329b04d904639B21950730d7A);
      addDoctor(0xfB1614AdAD764738Ba4B2f93C641Af94bE28C717);
      addDoctor(0x5dc247cc19ee69e372fa229cfae3bfc1b22ecbd7);
      addDoctor(0xCaE72709cBb872d3Eb77E7295CF432CB0c67343a);
      addDoctor(0xaC091E9F113229996C479193cd3c0f41B934e9F7);

      addPatient(0x378D963Ac7708aBDc0349BC43DDeB9f741ea49c0);
      addPatient(0x4c96933df32BF4fD6F70165Bf303fcb57f14929d);
      addPatient(0xb1deccb2f3c3a78d97106224e06f974146d009fa);
      addPatient(0xB318a668a32b4f5b13b9E47c67B7dB566312624B);

      createIndicator(1, "Cholesterol", 0, 100, 100);
      createIndicator(2, "Sugar", 0, 100, 100);
      createIndicator(3, "Blood Pressure", 0, 100, 100);
      createIndicator(4, "Heart Rate", 0, 100, 100);
      createIndicator(5, "Saturated Fat", 0, 100, 100);
      createIndicator(6, "Hematocrits", 0, 100, 100);
      createIndicator(7, "Chreatin", 0, 100, 100);
      createIndicator(8, "Hemoglobin", 0, 100, 100);

    }

    /*--------------------- START ROLES ----------------------------------*/

    modifier isDoctorOrOwner() {
        require(doctors[msg.sender] || owner == msg.sender);
        _;
    }

    modifier isAdminOrOwner() {
        require(admins[msg.sender] || owner == msg.sender);
        _;
    }

    modifier isOwner() {
        require(owner == msg.sender);
        _;
    }

    function addPatient(address patient) public isAdminOrOwner{
        require(!patients[patient].valid);
        patients[patient].valid = true;
        numPatients++;
    }

    function addDoctor(address doctor) public isAdminOrOwner{
        require(!doctors[doctor]);
        doctors[doctor] = true;
        numDoctors++;
    }

    function addAdmin(address admin) public isOwner{
        require(!admins[admin]);
        admins[admin] = true;
        numAdmins++;
    }

    function getMyRole() public view returns (Role) {
        if(owner == msg.sender) {
            return Role.Owner;
        }
        else if(admins[msg.sender]) {
            return Role.Admin;
        }
        else if(doctors[msg.sender]) {
            return Role.Doctor;
        }
        else if(patients[msg.sender].valid) {
            return Role.Patient;
        }
        throw;
    }

    function getNumAdmins() public view returns (uint) {
      return numAdmins;
    }

    function getNumDoctors() public view returns (uint) {
      return numDoctors;
    }

    function getNumPatients() public view returns (uint) {
      return numPatients;
    }
    /*--------------------- END ROLES ----------------------------------*/

    /*--------------------- START ANALYSIS ----------------------------------*/

    function addAnalysis(uint[] indicatorIds, uint[] values, address patient, uint day, uint month, uint year) public isDoctorOrOwner{
      require(patients[patient].valid);

      Analysis memory analysis;
      analysis.results.indicatorIds = indicatorIds;
      analysis.results.values = values;
      analysis.doctor = msg.sender;
      analysis.date.day = day;
      analysis.date.month = month;
      analysis.date.year = year;

      //calculate score y reward
      analysis.score = 0;
      analysis.reward = 0;
      Indicator storage indicator;
      for (uint i=0; i < indicatorIds.length; i++) {
        indicator = indicators[indicatorIds[i]];
        if (values[i]>= indicator.min && values[i] <= indicator.max){
          analysis.score++;
          analysis.reward += indicator.weight * WEIS_PER_VALID_INDICATOR;
        }
      }

      patients[patient].history.push(analysis);

      numAnalysis++;
    }

    function getAnalysis(address patient,uint myIndex) public view returns (uint[], uint[], address, uint, uint, uint, uint, uint)  {
      require(patients[patient].valid);
      require(doctors[msg.sender] || patients[msg.sender].valid || owner == msg.sender); //only doctor or patient for the analysis can read
      require(patients[patient].history.length > myIndex);
      Analysis storage analysis = patients[patient].history[myIndex];
      return (analysis.results.indicatorIds, analysis.results.values, analysis.doctor, analysis.date.day, analysis.date.month, analysis.date.year, analysis.score, analysis.reward);
    }

    function getMyAnalysis(uint myIndex)  public view returns (uint[], uint[], address, uint, uint, uint, uint, uint){
      return getAnalysis(msg.sender, myIndex);
    }

    function getNumberAnalysis(address patient) public view returns (uint){
      require(patients[patient].valid);
      require(doctors[msg.sender] || msg.sender == patient || owner == msg.sender); //only doctor or patient for the analysis can read
      return patients[patient].history.length;
    }

    function getMyNumberAnalysis()  public view returns (uint){
      return getNumberAnalysis(msg.sender);
    }

    function getTotalNumberAnalysis() public view returns (uint) {
      return numAnalysis;
    }
    /*--------------------- END ANALYSIS ----------------------------------*/


    /*--------------------- START INDICATORS ----------------------------------*/

    function createIndicator(uint _id, string _name, uint _min, uint _max, uint _weight) public isAdminOrOwner {
      require(!indicators[_id].valid);
      Indicator memory indicator = Indicator(_name, _min, _max, _weight, true);
      indicators[_id] = indicator;
      numIndicators++;
    }

    function updateIndicatorMin(uint _id, uint _min) public isAdminOrOwner {
      require(indicators[_id].valid);
      indicators[_id].min = _min;
    }

    function updateIndicatorMax(uint _id, uint _max) public  isAdminOrOwner {
      require(indicators[_id].valid);
      indicators[_id].max = _max;
    }

    function updateIndicatorWeight (uint _id, uint _weight) public isAdminOrOwner {
      require(indicators[_id].valid);
      indicators[_id].weight = _weight;
    }

    function getIndicator(uint _id) public view returns (uint, string, uint, uint, uint){
      Indicator storage indicator = indicators[_id];
      require(indicator.valid);
      return (_id, indicator.name, indicator.min, indicator.max, indicator.weight);
    }

    /*---------------- END INDICATORS -------------------*/
}
