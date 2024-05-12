/* 
With wallet address: `0xa7a93fd0a276fc1c0197a5b5623ed117786eed06` : https://etherscan.io/address/0xa7a93fd0a276fc1c0197a5b5623ed117786eed06
*/

const { ethers } = require("ethers");
const { provider } = require("./utils");

const tokenAddresses = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const walletAddress = "0xa7a93fd0a276fc1c0197a5b5623ed117786eed06";
const tokenABI = [
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const getBalanceToken = async () => {
  const tokenContract = new ethers.Contract(tokenAddresses, tokenABI, provider);
  const tokenName = await tokenContract.name();

  const balanceTokenOfAddress = await tokenContract.balanceOf(walletAddress);
  const decimals = await tokenContract.decimals();
  const readableBalance = ethers.formatUnits(balanceTokenOfAddress, decimals);

  console.log(
    `Balance of ${walletAddress} in ${tokenName} is: ${readableBalance}`
  );
};

getBalanceToken();
