require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture street crawl mirror coast hard light army ghost'; 
let testAccounts = [
"0xb9d1abe6d94738f48b873caeefbed722d0871804a1cab720a2ea815c07889b67",
"0x47ab3274bdd2fca84abed2c2eeaa8188a5b8041bc8e3ed07bd0d0d6ae5c5f2ca",
"0x1d3e00c6dbfe6a0cb578d9cbd5df7a7b021cf34ddcdb30d9bdb58144ede4e038",
"0x1df63385e3e80a8309e26c3e7eb1f1c1157da90201ff21ec054e824440124235",
"0x0d3c8f81839d506b858a8c7fb420683262de2c7965303d037cce785264a46368",
"0x3fdc9697dea220a40986f0f1f73600738b4258d61c418ab6c306b8aa5f7e7f28",
"0xc2de9d5d37520777e97305be126579fe30ee4c761525e4a548a043a855f9f132",
"0x7f5bdcaa053501f40e808310b530aa85322fcdbaa061e9445f88fb216373f70c",
"0xdf584aeb2fa6594e944f04fc6b5b37f9652334efe700167d30272c6d5be3f3da",
"0xb7910595b2d7155d41bed6a243252214a0a503ef0ae1b26ab12a1a1a9fa5d0c1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

