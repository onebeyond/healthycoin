import web3 from './web3';
import HealthSystem from './build/HealthSystem.json';

const instance = new web3.eth.Contract(
  JSON.parse(HealthSystem.interface),
  '0x8D53402611004640cE1F6569C24927cEfd4Fb3F1'
);
// retrieved when run "node deploy.js"

export default instance;
