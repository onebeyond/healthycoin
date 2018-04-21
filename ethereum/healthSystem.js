import web3 from './web3';
import HealthSystem from './build/HealthSystem.json';

const instance = new web3.eth.Contract(
  JSON.parse(HealthSystem.interface),
  '0x4c732204FCbf51A7f4b853CA7e2Ee8dBeEE5cC1C'
);
// retrieved when run "node deploy.js"

export default instance;
