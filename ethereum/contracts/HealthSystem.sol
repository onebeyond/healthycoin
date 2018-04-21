pragma solidity ^0.4.0;

contract HealthSystem {

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

    struct Analysis{
        uint[] indicatorIds;
        uint[] values;
        address doctor;
        uint score;
        uint reward;
        uint year;
        uint month;
        uint day;
    }

    struct Indicator{
      string name;
      uint min;
      uint max;
      uint weight;
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
    uint nextIndicatorId;



    function HealthSystem() public{
        owner = msg.sender;
        nextIndicatorId = 0;
    }

    modifier isDoctorOrPatient(address user) {
        require(doctors[user] || patients[user].valid);
        _;
    }

    modifier isDoctor() {
        require(doctors[msg.sender]);
        _;
    }

    modifier isAdmin() {
        require(admins[msg.sender]);
        _;
    }

    modifier isOwner() {
        require(owner == msg.sender);
        _;
    }

    function addPatient(address patient) public isDoctor{
        require(!patients[patient].valid);
        patients[patient].valid = true;
    }

    function addDoctor(address doctor) public isAdmin{
        require(!doctors[doctor]);
        doctors[doctor] = true;
    }

    function addAdmin(address admin) public isOwner{
        require(!admins[admin]);
        admins[admin] = true;
    }

    function addAnalysis(uint[] indicatorIds, uint[] values, address patient, uint day, uint month, uint year, uint score, uint reward) public isDoctor{
        require(patients[patient].valid);

        Analysis memory analysis;
        analysis.indicatorIds = indicatorIds;
        analysis.values = values;
        analysis.doctor = msg.sender;
        analysis.day = day;
        analysis.month = month;
        analysis.year = year;
        analysis.score = score;
        analysis.reward = reward;

        patients[patient].history.push(analysis);
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

    function getAnalysis(address patient,uint myIndex) public view isDoctorOrPatient(msg.sender) returns (uint[], uint[], address, uint, uint, uint, uint, uint)  {
        require(patients[patient].valid);
        require(patients[patient].history.length > myIndex);
        Analysis storage analysis = patients[patient].history[myIndex];
        return (analysis.indicatorIds, analysis.values, analysis.doctor, analysis.day, analysis.month, analysis.year, analysis.score, analysis.reward);
    }

    function getMyAnalysis(uint myIndex)  public view returns (uint[], uint[], address, uint, uint, uint, uint, uint){
        return getAnalysis(msg.sender, myIndex);
    }

    function getNumberAnalysis(address patient) public view isDoctorOrPatient(msg.sender) returns (uint){
        require(patients[patient].valid);
        return patients[patient].history.length;
    }

    function getMyNumberAnalysis()  public view returns (uint){
        return getNumberAnalysis(msg.sender);
    }

    //---------------------- INDICATORS -------------------------------------------

    function setIndicator(string _name, uint _min, uint _max, uint _weight) public isAdmin {
        Indicator memory indicator = Indicator(_name, _min, _max, _weight);
        indicators[nextIndicatorId] = indicator;
        nextIndicatorId ++;
    }

    function updateIndicatorMin(uint _index, uint _min) public isAdmin {
        indicators[_index].min = _min;
    }

    function updateIndicatorMax(uint _index, uint _max) public  isAdmin {
        indicators[_index].max = _max;
    }

    function updateIndicatorWeight (uint _index, uint _weight) public isAdmin {
        indicators[_index].weight = _weight;
    }

    function getIndicator(uint _index) public view returns (string, uint, uint, uint){
        require(_index < nextIndicatorId);
        Indicator storage indicator = indicators[_index];
        return (indicator.name, indicator.min, indicator.max, indicator.weight);
    }

    function checkIndicatorValue(uint _index, uint _value) public view returns (Compared){
        require(_index < nextIndicatorId);
        if (_value< indicators[_index].min) {
            return Compared.Low;
        }else if (_value < indicators[_index].max){
            return Compared.Healthy;
        }else if (_value > indicators[_index].max){
            return Compared.High;
        }
    }

    function getNumberIndicators() public view returns (uint) {
      return nextIndicatorId;
    }
}