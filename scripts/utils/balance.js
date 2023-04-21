const { ethers } = require('hardhat')

async function main() {
  const [admin, addr2, addr3, addr4] = await ethers.getSigners()

  const account = "0x06475252477feae5ad360f69e1a2a47dd9f31dbf";
  console.log(account);
  console.log(await ethers.provider.getBalance(account));
  console.log(admin.address);
  console.log(addr2.address);
  console.log(addr3.address);
  console.log(addr4.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

