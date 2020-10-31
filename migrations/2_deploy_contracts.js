var RequestOrgan = artifacts.require('./RequestOrgan.sol');

module.exports = function (deployer) {
  deployer.deploy(RequestOrgan);
};
