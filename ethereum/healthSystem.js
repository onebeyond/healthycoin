import web3 from './web3';
import HealthSystem from './build/HealthSystem.json';

const instance = new web3.eth.Contract(
  JSON.parse(HealthSystem.interface),
  '0x6cedA9432b7dae10B10621ebad39FD8e20d85843'
);
// retrieved when run "node deploy.js"

export default instance;
