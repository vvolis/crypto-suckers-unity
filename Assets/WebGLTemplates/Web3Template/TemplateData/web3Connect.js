if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  // connect popup
  ethereum.enable();

  window.ethereum.on("accountsChanged", function () {
    location.reload();
  });

}

async function getBlock()
{
    console.log("Get block")
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    //const signer = provider.getSigner()
    var blockNr = await provider.getBlockNumber();
    console.log("Blocknr:", blockNr)
    window.unityInstance.SendMessage('GetBlockBtn', 'SetText', blockNr.toString());
}


async function getEns()
{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    var ensName = await provider.lookupAddress(web3.currentProvider.selectedAddress);
    var name = web3.currentProvider.selectedAddress;
    name = name.toString();
    if (ensName != null) {
        name = ensName;
    } else {
        ensName = "no ensname found";
    }

    window.unityInstance.SendMessage('GetEnsBtn', 'SetText', ensName);
    window.unityInstance.SendMessage('Launcher', 'SetName', name);
}