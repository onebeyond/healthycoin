import web3 from './web3';
import AnalysisParameters from './build/AnalysisParameters.json';

const instance = new web3.eth.Contract(
  JSON.parse(AnalysisParameters.interface),
  '0x73dA3fA932CD83d3d44ab3ea315D9b356F3bE563'
);
// retrieved when run "node deploy.js"

export default instance;
