// File: `truffle.js` (edited for 7nodes example)
//connecting to Quorum network of nodes
/*
Because of the magic of VirtualBox and Vagrant, the node running
inside the virtual machine is made available to us via local ports,
so connecting via localhost and 22000 will work just fine.
*/
// File: `truffle.js`
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 22000, // was 8545
      network_id: "*" // Match any network id
    },
    nodefour:  {
      host: "localhost",
      port: 22003,
      network_id: "*" // Match any network id
    },
    nodeseven:  {
      host: "localhost",
      port: 22006,
      network_id: "*" // Match any network id
    }
  }
};
