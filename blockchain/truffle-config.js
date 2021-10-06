const solcStable = {
  version: '^0.8.0',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};

module.exports = {
  networks: {
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 8555,
    },
  },

  compilers: {
    solc: solcStable,
  },
  plugins: ['solidity-coverage'],
};
