# Offchain Price Oracle

Price oracle that shows liquidity-weighted average of spot prices of multiple dexes. The oracle can be easily manipulated inside transaction so it should ONLY be used offchain. See Examples section below.

## Wrappers

Price Oracle handles wrapped tokens like WETH, cDAI, aDAI, etc. using custom wrapper smart contracts that wrap/unwrap tokens with latest wrapping exchange rate.

## Connectors

As some tokens do not have direct liquidity pairs oracle uses connector tokes to find prices for such tokens.

## Supported Deployments

### Ethereum Mainnet

#### Oracle [0x07D91f5fb9Bf7798734C3f606dB065549F6893bb](https://etherscan.io/address/0x07D91f5fb9Bf7798734C3f606dB065549F6893bb)

#### Supported DEXes

* Mooniswap
* 1inch Liquidity Protocol V1.1
* Uniswap V1
* Uniswap V2
* Sushiswap
* Equalizer.fi

#### Supported wrappers

* Aave V1
* Aave V2
* Compound
* Fulcrum V1
* Fulcrum V2
* WETH
* Cream

#### Supported connectors

* ETH
* WETH
* DAI
* USDC
* USDT
* WBTC
* 1INCH

### Binance Smart Chain

#### Oracle [0xfbD61B037C325b959c0F6A7e69D8f37770C2c550](https://bscscan.com/address/0xfbD61B037C325b959c0F6A7e69D8f37770C2c550)

#### Supported DEXes

* 1inch Liquidity Protocol V1.1
* Pancakeswap
* Streetswap
* Bakeryswap
* Julswap
* Demaxswap

#### Supported wrappers

* Venus
* WBNB

#### Supported connectors

* BNB
* WBNB
* ETH
* DAI
* USDC
* USDT
* BUSD

### Kovan

#### Oracle [0x29BC86Ad68bB3BD3d54841a8522e0020C1882C22](https://kovan.etherscan.io/address/0x29BC86Ad68bB3BD3d54841a8522e0020C1882C22)

#### Supported DEXes

* 1inch Liquidity Protocol V1.1
* Uniswap V2
* Uniswap V1

#### Supported wrappers

* Venus
* WETH

#### Supported connectors

* ETH
* WETH

## Examples

* [Single token-to-ETH price usage](https://github.com/1inch-exchange/offchain-oracle/blob/master/examples/single-price.js)

* [Multiple token-to-ETH prices usage](https://github.com/1inch-exchange/offchain-oracle/blob/master/examples/multiple-prices.js)
