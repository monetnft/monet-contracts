import { HardhatUserConfig } from "hardhat/config"

import "@nomiclabs/hardhat-waffle"

const config: HardhatUserConfig = {
  solidity: {
    version: "0.5.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/${API_KEY}",
      accounts: ["${PRIVATE_KEYS}"]
    }
  }
}
export default config;