
const hre = require("hardhat");

async function main() {

  const GameItem = await hre.ethers.getContractFactory("AINFT");
  const gameitem = await GameItem.deploy("AiNftMinter", "AINFT");

  await gameitem.deployed();

  console.log("Greeter deployed to:", gameitem.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
