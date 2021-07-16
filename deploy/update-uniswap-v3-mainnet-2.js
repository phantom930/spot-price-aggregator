const hre = require('hardhat');
const { getChainId, ethers } = hre;

module.exports = async ({ getNamedAccounts, deployments }) => {
    console.log('running deploy script');
    console.log('network id ', await getChainId());

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const OffchainOracle = await ethers.getContractFactory('OffchainOracle');
    const offchainOracle = OffchainOracle.attach((await deployments.get('OffchainOracle')).address);


    const uniswapV3Oracle = await deploy('UniswapV3Oracle', {
        from: deployer,
        skipIfAlreadyDeployed: false,
    });

    const oldUniswapV3OracleAddress = '0x050F7Dd645dd081024afeb8b693E459A9852cb04';

    const txn1 = await offchainOracle.removeOracle(oldUniswapV3OracleAddress, '0');
    const txn2 = await offchainOracle.addOracle(uniswapV3Oracle.address, '0');
    await Promise.all([txn1, txn2]);

    await hre.run('verify:verify', {
        address: uniswapV3Oracle.address,
    });
};

module.exports.skip = async () => true;
