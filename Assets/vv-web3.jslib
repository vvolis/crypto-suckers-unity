// web3.jslib

mergeInto(LibraryManager.library, {
    WalletAddress: function () {
        getEns();
        var returnStr
        try {
            // get address from metamask
            returnStr = web3.currentProvider.selectedAddress
        } catch (e) {
            returnStr = ""
        }
        var returnStr = web3.currentProvider.selectedAddress;
        var bufferSize = lengthBytesUTF8(returnStr) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(returnStr, buffer, bufferSize);
        return buffer;
    },

    GetBlock: function () {
        getBlock();
    },

    GetEns: function () {
        getEns();
    }
});