pragma solidity ^0.4.0;
contract HealthSystem {

   address owner;
   mapping(address => bool) admins;
   mapping(address => bool) doctors;
   mapping(address => PatientData) patients;
   
   
   struct PatientData {
       Analysis[] history;
       bool valid;
       uint totalReward;
   }
   
   struct Analysis {
       Result[] results;
       address doctor;
       uint score;
       uint reward;
       Date date;
   }
   
   struct Result {
       uint indicator;
       uint value;
   }
   
   struct Date {
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
}