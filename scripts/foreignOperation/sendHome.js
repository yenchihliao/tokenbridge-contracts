const { ethers } = require('hardhat')
const config = require("./config.json")

async function main() {
  const [admin] = await ethers.getSigners()
  console.log(admin.address)

  const erc20 = await ethers.getContractAt("TaisysERC20Mock", config.token);
  const mediator = await ethers.getContractAt("ForeignAMBErc677ToErc677", config.mediator);
  // const fBV = await ethers.getContractAt("BridgeValidator", config.bridgeValidator);
  const ONE_ETHER = "1000000000000000000";

  let tx, rc;
  tx = await erc20.connect(admin).approve(config.mediator, ONE_ETHER);
  rc = await tx.wait();
  console.log(rc.status);
  tx = await mediator.connect(admin).relayTokens(admin.address, ONE_ETHER);
  rc = await tx.wait();
  console.log(rc.status);
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

