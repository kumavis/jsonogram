# jsonogram

[![Greenkeeper badge](https://badges.greenkeeper.io/kumavis/jsonogram.svg)](https://greenkeeper.io/)

cli tool to pretty print json.

```
npm install -g jsonogram
```

### usage

tired of ugly unreadable minifed json blobs

```
╭─kumavis@xyzs-MBP  ~/dev/jsonogram ‹node-v4.2.3›  (master*) 
╰─$ cat data.json
{"jsonrpc":"2.0","id":1,"result":{"difficulty":"0x363de8ace20a","extraData":"0xd78301040a844765746887676f312e362e32856c696e7578","gasLimit":"0x47e7c4","gasUsed":"0x5208","hash":null,"logsBloom":null,"miner":null,"nonce":null,"number":"0x1f71a6","parentHash":"0x41f448f5635a434c2ae030d15e5611d7b6914b2108a021bb0e794857f48ab13b","receiptRoot":"0x0a7272d563c860f3b106b39783cedc2182779281760ebc166f270e61b3ea092c","sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347","size":"0x28d","stateRoot":"0x0000000000000000000000000000000000000000000000000000000000000000","timestamp":"0x57ae45eb","totalDifficulty":null,"transactions":["0x755eedc1cac330f59428f050b6019c6124a0f8238fa935d3e9d068164fb15c25"],"transactionsRoot":"0x35745d4191113858fcb336aba07537020976dba0ca898170e33324c6df12c918","uncles":[]}}
```

me too. just `cat data.json | jsonogram`.

```
╭─kumavis@xyzs-MBP  ~/dev/jsonogram ‹node-v4.2.3›  (master*) 
╰─$ cat data.json | jsonogram
├─ jsonrpc: 2.0
├─ id: 1
└─ result
   ├─ difficulty: 0x363721c4a975
   ├─ extraData: 0xd78301040a844765746887676f312e362e32856c696e7578
   ├─ gasLimit: 0x47e7bb
   ├─ gasUsed: 0x5208
   ├─ hash
   ├─ logsBloom
   ├─ miner
   ├─ nonce
   ├─ number: 0x1f71a5
   ├─ parentHash: 0x6c224d1cc14b3e86afd14435fe3844d4a19cc087ca5d77e5a72d2caff2b92c6b
   ├─ receiptRoot: 0x5aeddc086ae39d1536a51b178bd2d4ee42292a0ad3fd0d178bc882dd875a290d
   ├─ sha3Uncles: 0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347
   ├─ size: 0x291
   ├─ stateRoot: 0x0000000000000000000000000000000000000000000000000000000000000000
   ├─ timestamp: 0x57ae45e7
   ├─ totalDifficulty
   ├─ transactions
   │  └─ 0: 0x086bc1cbc44693fed0ca1be49afe9b02484a139257c6d35f1aefeac81b8322c8
   ├─ transactionsRoot: 0x19335d27dd2751fac5e06b1ab8cdb632c80a496559f5e62163beaf951fbaad5d
   └─ uncles
```