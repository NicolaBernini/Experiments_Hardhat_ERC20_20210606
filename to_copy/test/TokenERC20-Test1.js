const { expect } = require("chai");
const { ethers } = require("hardhat");

// Test Purpose: check if the contract can be deployed and works with a basic test case
describe("Token1Deploy", function() {
  it("Deploy Test", async function() {
    
    // Getting the Factory for `contracts/Token1.sol` contract
    const SC = await ethers.getContractFactory("Token1");

    // The Factory allows to `deploy()` 
    const token1 = await SC.deploy();
    
    // Check the deployment was successful
    await token1.deployed();


    // Check the decimals 
    expect(await token1.decimals()).to.equal(18);
  });
});


