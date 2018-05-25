---
id: monetarycoin
title: MonetaryCoin smart contracts
---

Go to [API Documentation](deploy_MCoin.html)

MonetaryCoin is an ERC20 token defined by the Monetary Protocol (see white paper for details).

Besides standard ERC20 functionality, the token contract has these major features:

* Proof of stake forging - the initial amount will be distributed using this mechanism.

* After initial distribution, changes in supply rate will be controlled using external GDP oracle maintained by the Monetary foundation. Can be seen in [GDPOraclizedToken.sol](token_ERC20_GDPOraclizedToken.html).

* In periods of positive growth (GDP is positive), the new supply will be fairly distributed using POS mechanism. See [MineableToken.sol](token_ERC20_MineableToken.html) for details.

* In case of negative growth (GDP is negative), M5 mining mechanism will be triggered. See `M5LogicMock3.sol` and `M5tokenMock.sol` for reference implementation.

* After M5 mining is fully defined, the contract will we upgraded to support negative mining as well. See [MineableM5Token.sol](token_ERC20_MineableM5Token.html) for details. The upgrade will be done prior to initial distribution finish.

* Users can prove ownership of an address to comply with AML-KYC regulations using the [ComplianceStore.sol](storage_ComplianceStore.html) contract - a separate contract, defined by the Monetary Protocol.

* Pre-distribution of the tokens is done via the [MCoinDistribution](distribution_MCoinDistribution.html) contract. 

ERC20 standard token based on the openzeppelin-solidity repository, rest of functionality is custom made and [audited](https://github.com/TokenAudits/MonetaryCoin-Audit/releases/).

## Installation

* Clone repository.

* Change `deploy` variable in 2_migration.js to 'true'.

* In 2_migration.js, change `initialAccount, GDPOracle, upgradeManager` variables to the desired addresses.

* Run `truffle --network testrpc compile --all` followed by `truffle --network testrpc migrate` to deploy to testrpc.

Available networks can be seen / changed in truffle.js.

## License
Code released under the MIT LICENCE


Procced to [API Documentation](deploy_MCoin.html)