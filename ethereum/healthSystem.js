import web3 from './web3';
import HealthSystem from './build/HealthSystem.json';

const instance = new web3.eth.Contract(
  JSON.parse(HealthSystem.interface),
  '0xe8DBd7A251eFEebff57ED0d99b829C2C93DCedc8'
);
// retrieved when run "node deploy.js"

export default instance;
