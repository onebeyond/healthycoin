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
        Result[] results;
        address doctor;
        uint score;
        uint reward;
        Date date;
    }
    
    struct Result{
        uint indicator; 
        uint value;
    }
    
    struct Date{
        uint year;
        uint month;
        uint day;
    }
        
    function HealthSystem() public{
        owner = msg.sender;
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
         
         Result[] results;
         for (uint i = 0; i < indicators.length; i++){
            Result memory result;
            result.indicator = indicators[i];
            result.value = values[i];
            results.push(result);
         }
         
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
    
        
}