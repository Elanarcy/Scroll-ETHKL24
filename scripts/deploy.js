async function main() {
    const initialMessage = "Hello, Scroll Sepolia!";
    const ContractFactory = await ethers.getContractFactory("MySimpleContract"); // Ensure this matches the contract name
    const contract = await ContractFactory.deploy(initialMessage);

    await contract.deployed();

    console.log(`Contract deployed to: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

