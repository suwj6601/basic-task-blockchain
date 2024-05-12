/* 
# 1. Task 1
What is blocktime? 
  - Use ethers to get blocktime of block `19480580`: https://etherscan.io/block/19480580
*/

const { provider, getBlockTime } = require("./utils");

const displayBlockTime = async (blockNumber) => {
  const blocktime = await getBlockTime(blockNumber);
  console.log(`Blocktime of block is ${blockNumber}: ${blocktime}`);
};

const blockNumber = 19480580;
displayBlockTime(blockNumber);

module.exports = { provider, getBlockTime };
