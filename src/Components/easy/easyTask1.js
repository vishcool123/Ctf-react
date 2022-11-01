import React, { useEffect } from "react";
import ConnectWallet from "../ConnectWallet";
// import './style1.css'
import styles from "./task1.css";
import task from "./images/task1.PNG";
function easyTask1(props) {
    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "50%", marginLeft: "25%" }}>
                <div className="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <p style={{ textAlign: "left" }}><strong>Description :</strong> There is a ERC 20 token named secops , read the code execute as per hint.</p>
                    <p style={{ textAlign: "left" }}><strong>Hint :</strong>
                        {"Find the address of deployed contract and get the balance of the owner's wallet. Deployment address 0xa23ce0ca6bd58f779c0f8e9c0e513c80a79a8350198dcab7cafec7415cdc01b6"}
                    </p>
                    <p style={{ textAlign: "left" }}><strong>Flag :</strong> {"vnm{Token balance}"}</p>
                    <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>

                    <ol>
                        <li> Go to  <a href="https://remix.ethereum.org/">Remix</a>.</li>
                        <li>Select <strong>Remix Vm London in</strong> the environment .</li>
                        <li>Select injected provider in the environment</li>
                        <li>Select {"(Goerli Testnet Network)"}</li>
                        <li>Load the contract</li>
                        <li>Get the flag value</li>
                    </ol>
                    <img src={task} width="100%" />
                </div>
            </div>
        </div >
    )
}
export default easyTask1;
