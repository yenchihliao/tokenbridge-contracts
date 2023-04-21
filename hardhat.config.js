require("@nomiclabs/hardhat-waffle");
require("hardhat-contract-sizer");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
require("solidity-coverage");

const privateKey = process.env.PRIVATE_KEY.split(", ");
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
const infuraProjectId = process.env.INFURA_PROJECT_ID;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    "vegas-testnet": {
      url: "https://testnet-rpc.vegas.one",
      chainId: 1272,
      accounts: privateKey,
    },
    test: {
      url: "https://lab-rpc.taisys.dev",
      chainId: 7777,
      accounts: privateKey,
    },
    dev: {
      url: "https://dev-rpc.taisys.dev",
      chainId: 1182,
      gas: 80000000,
      accounts: privateKey,
    },
    stg: {
      url: "https://stg-rpc.vegas.one",
      chainId: 1268,
      accounts: privateKey,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraProjectId}`,
      chainId: 5,
      accounts: privateKey,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraProjectId}`,
      chainId: 11155111,
      accounts: privateKey,
    },
    lab2: {
      url: `https://lab2-rpc.taisys.dev`,
      chainId: 2643,
      accounts: privateKey,
    },

  },
  etherscan: {
    apiKey: {
      "vegas-testnet": "api-key",
      stg: "api-key",
      goerli: etherscanApiKey,
    },
    customChains: [
    {
      network: "vegas-testnet",
      chainId: 1272,
      urls: {
        apiURL: "https://testnet-explorer.vegas.one/api",
        browserURL: "https://testnet-explorer.vegas.one"
      }
    },
    {
      network: "taisys",
      chainId: 1068,
      urls: {
        apiURL: "https://node.taisys.dev/api",
        browserURL: "https://node.taisys.dev/"
      }
    },
    {
      network: "sepolia",
      chainId: 11155111,
      urls: {
        apiURL: `https://sepolia.infura.io/v3/${infuraProjectId}`,
      }
    },
    {
      network: "lab2",
      chainId: 2643,
      urls: {
        apiURL: "https://lab2-rpc.taisys.dev",
      }
    },
    {
      network: "dev",
      chainId: 1182,
      urls: {
        apiURL: "https://dev-explorer.taisys.dev",
        browserURL: "https://dev-explorer.taisys.dev"
      }
    },
    {
      network: "stg",
      chainId: 1268,
      urls: {
        apiURL: "https://stg-explorer.vegas.one/api",
        browserURL: "https://stg-explorer.vegas.one/"
      }
    }
  ]
  },
  solidity: {
    compilers: [
      {
        version: "0.4.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

