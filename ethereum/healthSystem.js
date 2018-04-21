import web3 from './web3';
import HealthSystem from './build/HealthSystem.json';

const instance = new web3.eth.Contract(
  JSON.parse(HealthSystem.interface),
  '0x38EAf93a0F6C9E21831b58922B0359Ef1bC1145a'
);
// retrieved when run "node deploy.js"

export default instance;
