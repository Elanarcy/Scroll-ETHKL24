async function main() {
  const ContractFactory = await ethers.getContractFactory("manok"); // Replace with your contract name
  const contract = await ContractFactory.deploy(); // Add constructor parameters if needed

  await contract.deployed();

  console.log(`Contract deployed to: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

