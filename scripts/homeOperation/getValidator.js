const { ethers } = require('hardhat')
const config = require("./config.json")

async function main() {
  const [admin, addr2] = await ethers.getSigners()
  console.log(admin.address)

  const bridge = await ethers.getContractAt("HomeAMB", config.bridge);

  let tx, rc;
  // get validator contract and its attributes
  validatorAddress = await bridge.validatorContract();
  const validator = await ethers.getContractAt("BridgeValidators", validatorAddress);
  console.log(await validator.validatorList());
  console.log(await validator.requiredSignatures());

  // change those attributes
  // tx = await validator.addValidator(addr2.address); rc = await tx.wait(); console.log(rc.status);
  // tx = await validator.setRequiredSignatures(2); rc = await tx.wait(); console.log(rc.status);

  // visulize changes
  // console.log(await validator.validatorList());
  // console.log(await validator.requiredSignatures());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

