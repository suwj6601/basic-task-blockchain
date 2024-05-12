/* 
With transaction has `0x719b0d5d78745059de009ed577d40c46d96f22ab0378c813722bbe8c326a4ec9` : https://etherscan.io/tx/0x719b0d5d78745059de009ed577d40c46d96f22ab0378c813722bbe8c326a4ec9, you need get following information:

- `blocknumber` of transaction
- `blocktime` of transaction
- get `status` of transaction (`success` of `failed`)

*/

const { provider, getBlockTime } = require("./utils");

const STATUS_TRANSACTION = {
  0: "Fail",
  1: "Success",
};

const getTransactionStatus = async (transHash) => {
  const transactionReceipt = await provider.getTransactionReceipt(transHash);

  return {
    transactionStatus: STATUS_TRANSACTION[transactionReceipt.status],
    transactionLogs: transactionReceipt.logs,
  };
};

const getTransactionInfomation = async (transHash) => {
  const currentTransaction = await provider.getTransaction(transHash);

  const blockNumber = currentTransaction.blockNumber;
  const blocktime = await getBlockTime(blockNumber);
  const { transactionStatus, transactionLogs } = await getTransactionStatus(
    transHash
  );

  console.log(
    `Block number of this transaction is: ${blockNumber} and blocktime: ${blocktime} and status: ${transactionStatus}`
  );

  console.log("-----------------Transaction Logs-----------------");
  console.log(transactionLogs);
  console.log("--------------------------------------------------");
};

const transactionHash =
  "0x719b0d5d78745059de009ed577d40c46d96f22ab0378c813722bbe8c326a4ec9";

getTransactionInfomation(transactionHash);
