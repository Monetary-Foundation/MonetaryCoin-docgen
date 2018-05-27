---
id: deploy_MCoin
title: MCoin
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">contract</span> MCoin</h2><p class="base-contracts"><span>is</span> <a href="token_ERC20_MineableM5Token.html">MineableM5Token</a></p><p class="description">The MonetaryCoin contract allows the creation of a new monetary coin. The supply of the coin is defined by GDP oracle of the same country. Example: If the GDP of a given country grows by 3%, there will be 3% more coins available for mining Proof of stake forging is defined by the MineableToken.sol contract. Initially, the coins will be distributed by the proof of stake forging mechanism. After the distribution is over, new coins will be created at the same rate as the economy growths.</p><div class="source">Source: <a href="https://github.com/Monetary-Foundation/MonetaryCoin/blob/v1.0.0/contracts/deploy/MCoin.sol" target="_blank">deploy/MCoin.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="deploy_MCoin.html#">cosntructor</a></li><li><a href="deploy_MCoin.html#toDecimals">toDecimals</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="fallback" class="anchor-marker"></span><h4 class="name">cosntructor</h4><div class="body"><code class="signature">function <strong></strong><span>(string tokenName, string tokenSymbol, uint256 blockReward, address GDPOracle, address upgradeManager) </span><span>public </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>tokenName</code> - string</div><div><code>tokenSymbol</code> - string</div><div><code>blockReward</code> - uint256</div><div><code>GDPOracle</code> - address</div><div><code>upgradeManager</code> - address</div></dd></dl></div></div></li><li><div class="item function"><span id="toDecimals" class="anchor-marker"></span><h4 class="name">toDecimals</h4><div class="body"><code class="signature">function <strong>toDecimals</strong><span>(uint256 _value) </span><span>internal </span><span>pure </span><span>returns  (int256) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_value</code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>int256</dd></dl></div></div></li></ul></div></div></div>