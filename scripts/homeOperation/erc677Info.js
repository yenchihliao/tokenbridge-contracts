const { ethers } = require('hardhat')
const config = require("./config.json")

async function main() {
  const [admin, addr2] = await ethers.getSigners()

  const erc677 = await ethers.getContractAt("PermittableToken", config.token);
  // const fBV = await ethers.getContractAt("BridgeValidator", config.foreign.bridgeValidator);
  const SAccount = "0x8215bafd0C6a13E13467e490AB4420Ee61936f50"

  console.log(await erc677.balanceOf(admin.address));
  console.log(await erc677.balanceOf(addr2.address));
  console.log(await erc677.balanceOf(SAccount));
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

