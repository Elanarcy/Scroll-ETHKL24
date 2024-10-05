require('@nomiclabs/hardhat-ethers');
require('dotenv').config();
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: "0.8.0",
  networks: {
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 534351,
    },
  },
  etherscan: {
    apiKey: {
      scrollSepolia: '7NHZ1Z8RZXGE8S1TRW2U4UI7E73Y94NT5N', // Add your Etherscan API key for verification
    },
    customChains: [
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://api-sepolia.scrollscan.com/api',
          browserURL: 'https://sepolia.scrollscan.com/',
        },
      },
    ],
  },
};

