const { ethers } = require("ethers");

function timeDiff(timestamp1, timestamp2) {
  var t1 = new Date(timestamp1 * 1000);
  var t2 = new Date(timestamp2 * 1000);

  var diff = Math.abs(t2 - t1);

  var hours = Math.floor(diff / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  var result = "";
  if (hours > 0) {
    result += hours + " hour(s), ";
  }
  if (minutes > 0) {
    result += minutes + " minute(s), ";
  }
  if (seconds > 0) {
    result += seconds + " second(s)";
  }
  if (result === "") {
    result = "0 seconds";
  }

  return result;
}

const getBlockTime = async (currentBlockNumber) => {
  const currentBlock = await provider.getBlock(currentBlockNumber);
  const previousBlock = await provider.getBlock(currentBlockNumber - 1);

  const blocktime = timeDiff(currentBlock.timestamp, previousBlock.timestamp);
  return blocktime;
};

const provider = new ethers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/5ee506b89bee4971ada8e59c95da958f"
);

module.exports = { provider, getBlockTime };
