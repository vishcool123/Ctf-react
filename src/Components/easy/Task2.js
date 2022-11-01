import React, { useEffect } from "react";
import ConnectWallet from "../ConnectWallet";
// import './style1.css'
import styles from "./task1.css";
import task from "./images/task2.PNG";
function easyTask1(props) {
    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "50%", marginLeft: "25%" }}>
                <div className="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <p style={{ textAlign: "left" }}><strong>Description :</strong> There is a token contract named secops you have to find the owner's wallet address.</p>
                    <p style={{ textAlign: "left" }}><strong>Hint :</strong> Get the wallet address of the owner from the deployed contract.</p>
                    <p style={{ textAlign: "left" }}><strong>Flag :</strong> {"vnm{Owner Address}"}</p>
                    <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>

                    <ol>
                        <li> Go to  <a href="https://remix.ethereum.org/">Remix</a>.</li>
                        <li>Select <strong>Remix Vm London in</strong> the environment. .</li>
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
