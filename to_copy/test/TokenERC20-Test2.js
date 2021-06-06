const { expect } = require("chai");
const { ethers } = require("hardhat");

// Test Purpose: check if the deploying wallet is allowed with 100000 tokens according to the `Token1.sol` implementation
describe("Token1Deploy", function() {
  const w1 = ethers.Wallet.createRandom();
  it("Deploy Test", async function() {
  
    // Getting some Wallets
    const signers = await ethers.getSigners();
    console.log("Numer of wallets: " + signers.length);
    
    const w1 = signers[0];

    console.log(w1['address']);

    // Getting the SC Factory
    const SC = await ethers.getContractFactory("Token1", w1);

    const token1 = await SC.deploy();
    
    await token1.deployed();
    const decimals = await token1.decimals();
    const exp_minted_tokens = 1000000;
    console.log("Expected Value = " + exp_minted_tokens + " (Units)");
    const obs_minted_tokens = (await token1.balanceOf(w1['address'])) / 10**decimals; 
    expect(obs_minted_tokens).to.equal(exp_minted_tokens);
  });
});


