pragma solidity ^0.4.0;
contract HealthSystem {

    enum Role {
        Owner,
        Admin,
        Doctor,
        Patient
    }
    address owner;
    mapping(address => bool) admins;
    mapping(address => bool) doctors;
    mapping(address => PatientData) patients;
    
    
    struct PatientData {
        Analysis[] history;
        bool valid;
        uint totalReward;
    }
    
    struct Analysis{
        Results results;
        address doctor;
        uint score;
        uint reward;
        Date date;
    }
    
    struct Results{
        uint[] indicators; 
        uint[] values;
    }
    
    struct Date{
        uint year;
        uint month;
        uint day;
    }
        
    function HealthSystem() public{
        owner = msg.sender;
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

        PatientData storage data;
        data.valid = true;
        data.totalReward = 50;
        
        patients[patient] = data;
    }
    
    function addDoctor(address doctor) public isAdmin{
        require(!doctors[doctor]);
        doctors[doctor] = true;
    }
    
    function addAdmin(address admin) public isOwner{
        require(!admins[admin]);
        admins[admin] = true;
    }
    
    function addAnalysis(uint[] indicators, uint[] values, address patient,uint day, uint month, uint year, uint score, uint reward) public isDoctor{
         require(patients[patient].valid);
         Analysis storage analysis;
         
     
        Results memory results;
        results.indicators = indicators;
        results.values = values;
            
         analysis.results = results;
         
         analysis.doctor = msg.sender;
         analysis.reward = reward;
         analysis.score = score;
         
         Date memory date = Date(
             day,
             month,
             year
             );
         analysis.date = date;
         patients[patient].history.push(analysis);
         
    }
    
    //getRole(address)
        // 0 owner
        // 1 admin
        // 2 doctor
        // 3 patient
        // -1 error
    function getRole(address user) returns (Role) {
        if(owner == msg.sender) {
            return Role.Owner;
        }
        else if(admins[user]) {
            return Role.Admin;
        }
        else if(doctors[user]) {
            return Role.Doctor;
        }
        else if(patients[user].valid) {
            return Role.Patient;
        }
        throw;
    }
    
    function getAnalysis(address patient,uint myIndex) isDoctorOrPatient(msg.sender) returns (uint[] indicators, uint[] values,uint day, uint month, uint year, uint score, uint reward)  {
        require(patients[patient].valid);
        require(patients[patient].history.length > myIndex);
        Analysis analysis = patients[patient].history[myIndex];
        return (
            analysis.results.indicators,
            analysis.results.values,
            analysis.date.day,
            analysis.date.month,
            analysis.date.year,
            analysis.score,
            analysis.reward);
    }
    
    function getNumberAnalysis(address patient) isDoctorOrPatient(msg.sender) returns (uint){
        require(patients[patient].valid);
        return patients[patient].history.length;
    }
    
    function getMyNumberAnalysis()  returns (uint){
        return getNumberAnalysis(msg.sender);
    }
    
    function getMyAnalysis(uint myIndex)  returns (uint[] indicators, uint[] values,uint day, uint month, uint year, uint score, uint reward){
        return getAnalysis(msg.sender, myIndex);
    }
    
        
}