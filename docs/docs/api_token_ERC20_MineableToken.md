---
id: token_ERC20_MineableToken
title: MineableToken
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">contract</span> MineableToken</h2><p class="base-contracts"><span>is</span> <a href="token_ERC20_MintableToken.html">MintableToken</a></p><p class="description">ERC20 Token with Pos mining. The blockReward_ is controlled by a GDP oracle. This type of mining will be used during initial distribution period and when the growth is positive. For mining during negative growth period refer to MineableM5Token.sol Unlike standard erc20 token, the totalSupply is sum(all user balances) + totalStake instead of sum(all user balances).</p><div class="source">Source: <a href="https://github.com/Monetary-Foundation/MonetaryCoin/blob/v1.0.0/contracts/token/ERC20/MineableToken.sol" target="_blank">token/ERC20/MineableToken.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="token_ERC20_MineableToken.html#Commit">Commit</a></li><li><a href="token_ERC20_MineableToken.html#Withdraw">Withdraw</a></li><li><a href="token_ERC20_MineableToken.html#average">average</a></li><li><a href="token_ERC20_MineableToken.html#blockReward">blockReward</a></li><li><a href="token_ERC20_MineableToken.html#commit">commit</a></li><li><a href="token_ERC20_MineableToken.html#commitmentOf">commitmentOf</a></li><li><a href="token_ERC20_MineableToken.html#getCommitment">getCommitment</a></li><li><a href="token_ERC20_MineableToken.html#getReward">getReward</a></li><li><a href="token_ERC20_MineableToken.html#signedAverage">signedAverage</a></li><li><a href="token_ERC20_MineableToken.html#totalStake">totalStake</a></li><li><a href="token_ERC20_MineableToken.html#withdraw">withdraw</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="events"><h3>Events</h3><ul><li><div class="item event"><span id="Commit" class="anchor-marker"></span><h4 class="name">Commit</h4><div class="body"><code class="signature">event <strong>Commit</strong><span>(address from, uint value, uint atStake, int onBlockReward) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>from</code> - address</div><div><code>value</code> - uint</div><div><code>atStake</code> - uint</div><div><code>onBlockReward</code> - int</div></dd></dl></div></div></li><li><div class="item event"><span id="Withdraw" class="anchor-marker"></span><h4 class="name">Withdraw</h4><div class="body"><code class="signature">event <strong>Withdraw</strong><span>(address from, uint reward, uint commitment) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>from</code> - address</div><div><code>reward</code> - uint</div><div><code>commitment</code> - uint</div></dd></dl></div></div></li></ul></div><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="average" class="anchor-marker"></span><h4 class="name">average</h4><div class="body"><code class="signature">function <strong>average</strong><span>(uint256 a, uint256 b) </span><span>public </span><span>pure </span><span>returns  (uint256) </span></code><hr/><div class="description"><p>Calculate the average of two integer numbers, 1.5 will be rounded toward zero.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>a</code> - uint256</div><div><code>b</code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>An uint256 representing integer average</dd></dl></div></div></li><li><div class="item function"><span id="blockReward" class="anchor-marker"></span><h4 class="name">blockReward</h4><div class="body"><code class="signature">function <strong>blockReward</strong><span>() </span><span>public </span><span>view </span><span>returns  (int256) </span></code><hr/><div class="description"><p>The block reward.</p></div><dl><dt><span class="label-return">Returns:</span></dt><dd>the current block reward</dd></dl></div></div></li><li><div class="item function"><span id="commit" class="anchor-marker"></span><h4 class="name">commit</h4><div class="body"><code class="signature">function <strong>commit</strong><span>(uint256 _value) </span><span>public </span><span>returns  (uint256) </span></code><hr/><div class="description"><p>Commit _value for minning, the _value will be substructed from user balance and added to the stake. if user previously commited, add to an existing commitment. this is done by calling withdraw() then commit back previous commit + reward + new commit.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_value</code> - The amount to be commited.</div></dd><dt><span class="label-return">Returns:</span></dt><dd>the commit value: _value OR prevCommit + reward + _value</dd></dl></div></div></li><li><div class="item function"><span id="commitmentOf" class="anchor-marker"></span><h4 class="name">commitmentOf</h4><div class="body"><code class="signature">function <strong>commitmentOf</strong><span>(address _miner) </span><span>public </span><span>view </span><span>returns  (uint256) </span></code><hr/><div class="description"><p>Gets the commitment of the specified address.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_miner</code> - The address to query the the commitment Of</div></dd><dt><span class="label-return">Returns:</span></dt><dd>the amount commited.</dd></dl></div></div></li><li><div class="item function"><span id="getCommitment" class="anchor-marker"></span><h4 class="name">getCommitment</h4><div class="body"><code class="signature">function <strong>getCommitment</strong><span>(address _miner) </span><span>public </span><span>view </span><span>returns  (uint256, uint256, uint256, int256) </span></code><hr/><div class="description"><p>Gets the all fields for the commitment of the specified address.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_miner</code> - The address to query the the commitment Of</div></dd><dt><span class="label-return">Returns:</span></dt><dd>{ &quot;uint256 value&quot;: the amount commited. &quot;uint256 onBlockNumber&quot;: block number of commitment. &quot;uint256 atStake&quot;: stake when commited. &quot;int256 onBlockReward&quot;: block reward when commited. }</dd></dl></div></div></li><li><div class="item function"><span id="getReward" class="anchor-marker"></span><h4 class="name">getReward</h4><div class="body"><code class="signature">function <strong>getReward</strong><span>(address _miner) </span><span>public </span><span>view </span><span>returns  (uint256) </span></code><hr/><div class="description"><p>Calculate the reward if withdraw() happans on this block, The reward is calculated by the formula: (numberOfBlocks) * (effectiveBlockReward) * (commitment.value) / (effectiveStake) effectiveBlockReward is the average between the block reward during commit and the block reward during the call effectiveStake is the average between the stake during the commit and the stake during call (liniar aproximation).</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_miner</code> - address</div></dd><dt><span class="label-return">Returns:</span></dt><dd>An uint256 representing the reward amount</dd></dl></div></div></li><li><div class="item function"><span id="signedAverage" class="anchor-marker"></span><h4 class="name">signedAverage</h4><div class="body"><code class="signature">function <strong>signedAverage</strong><span>(int256 a, int256 b) </span><span>public </span><span>pure </span><span>returns  (int256) </span></code><hr/><div class="description"><p>Calculate the average of two signed integers numbers, 1.5 will be toward zero.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>a</code> - int256</div><div><code>b</code> - int256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>An int256 representing integer average</dd></dl></div></div></li><li><div class="item function"><span id="totalStake" class="anchor-marker"></span><h4 class="name">totalStake</h4><div class="body"><code class="signature">function <strong>totalStake</strong><span>() </span><span>public </span><span>view </span><span>returns  (uint256) </span></code><hr/><div class="description"><p>The total stake.</p></div><dl><dt><span class="label-return">Returns:</span></dt><dd>the total stake</dd></dl></div></div></li><li><div class="item function"><span id="withdraw" class="anchor-marker"></span><h4 class="name">withdraw</h4><div class="body"><code class="signature">function <strong>withdraw</strong><span>() </span><span>public </span><span>returns  (uint256, uint256) </span></code><hr/><div class="description"><p>Withdraw reward.</p></div><dl><dt><span class="label-return">Returns:</span></dt><dd>{ &quot;uint256 reward&quot;: the new supply &quot;uint256 commitmentValue&quot;: the commitment to be returned }</dd></dl></div></div></li></ul></div></div></div>