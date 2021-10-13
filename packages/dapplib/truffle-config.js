require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stool crawl office purity gentle light army gentle'; 
let testAccounts = [
"0x219eaa6e69f9d6fe45f5b55bece687dd91ae2f8c8296b694f8470f51a2d06ece",
"0x3ea7f1c533bb95b6800f96615c3bff3fb29e419514d8dbd931ce4eab76da2144",
"0x861366537c08b56e76f0640cf29208ccbd0c9ed8d4214c625ebf35a5c6e32656",
"0x229ff7260a9d129bfcff59595d9b9549ff7da55990f3b42890daaea221bd5c73",
"0xe7ac6d1fc0d720ed3cdcf744f02b864853b32d91d6a46b30b150c2d3a6031b54",
"0x0ce42ea5273c7dce6ddcad117e9c883f302290da48a946740e77303471f2995b",
"0x35b94500c0a63ab379a3e7f6cd65b40267ddde4094d9995877a9b1ec75c4d943",
"0x64de915898c24cb1fd5579a372db3eedd2c525af9a323f627bee4c4581421179",
"0x29360fe6fa3b3cb2aade2ac725387d6607213cafc1bfc6f69e26a926d60e4e23",
"0xe70d4697d55a46f60fe9378a297657ab984e2afe1f18b67d5aa27c5c9c57fb9b"
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

