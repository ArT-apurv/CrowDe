import ContractInfo from "./../artifacts/contracts/Campaign.sol/CampaignFactory.json";
const { web3 } = require("./web3API");

const Instance = new web3.eth.Contract(
  ContractInfo.abi,
  "0x5FbDB2315678afecb367f032d93F642f64180aa3"
);

export default Instance;
