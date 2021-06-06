// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract Token1 is ERC20 {

    constructor () ERC20("Token", "TKN1") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}
