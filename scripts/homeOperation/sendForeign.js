const { ethers } = require('hardhat')
const config = require("./config.json")

async function main() {
  const [admin] = await ethers.getSigners()
  console.log(admin.address)

  const erc20 = await ethers.getContractAt("TaisysERC20Mock", config.foreign.token);
  const mediator = await ethers.getContractAt("ForeignAMBErc677ToErc677", config.foreign.mediator);
  // const fBV = await ethers.getContractAt("BridgeValidator", config.foreign.bridgeValidator);

  let tx, rc;
  tx = await erc20.connect(admin).approve(config.foreign.mediator, 100);
  rc = await tx.wait();
  console.log(rc.status);
  tx = await mediator.connect(admin).relayTokens(admin.address, 100);
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

