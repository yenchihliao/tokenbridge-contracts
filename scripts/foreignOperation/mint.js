const { ethers } = require('hardhat')
const config = require("./config.json")

async function main() {
  const [admin] = await ethers.getSigners()
  console.log(admin.address)

  const erc20 = await ethers.getContractAt("TaisysERC20Mock", config.token);
  // const fBV = await ethers.getContractAt("BridgeValidator", config.foreign.bridgeValidator);
  const SAccount = "0x8215bafd0C6a13E13467e490AB4420Ee61936f50"

  let tx, rc;
  tx = await erc20.mint(admin.address, "100000000000000000000");
  rc = await tx.wait();
  console.log(rc.status);
  tx = await erc20.balanceOf(admin.address);
  console.log(tx);
  // tx = await BV.setDevWhitelist(devList.address);
  // rc = await tx.wait();
  // console.log(rc['status']);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

