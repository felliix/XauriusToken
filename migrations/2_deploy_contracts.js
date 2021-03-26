var XauriusToken = artifacts.require("../build/contracts/XauriusToken");

module.exports = function(deployer) {
  deployer.deploy(XauriusToken, 1000);
};
