
// GetWalletAddress.cs

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
// use web3.jslib
using System.Runtime.InteropServices;

public class GetWalletAddress : MonoBehaviour
{
    // text in the button
    public Text ButtonText;
    // use WalletAddress function from web3.jslib
    [DllImport("__Internal")] private static extern string WalletAddress();

    [DllImport("__Internal")] private static extern string GetBlock();

    [DllImport("__Internal")] private static extern string GetEns();

    

    public void OnClick()
    {
        // get wallet address and display it on the button
        SetText(WalletAddress());
    }

    public void Block()
    {
        GetBlock();
    }

    public void RequestEns()
    {
        GetEns();
    }

    public void SetText(string btnText)
    {
        ButtonText.text = btnText;
    }
}