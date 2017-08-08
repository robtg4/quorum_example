// File: `./migrations/2_deploy_simplestorage.js`
var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  //this is passing 42 from node1 (us or localhost) to node 7 (in this example)
  //all other nodes on chain wont have details of transaction
  deployer.deploy(SimpleStorage, 42, {privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]})
};
