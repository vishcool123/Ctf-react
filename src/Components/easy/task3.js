import React, { useEffect } from "react";
import ConnectWallet from "../ConnectWallet";
// import './style1.css'
import styles from "./task1.css";
import task from "./images/task3.PNG";
function Task3(props) {

    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "50%", marginLeft: "25%" }}>

                <div className="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <ol style={{ textAlign: "left" }}>
                        <h3 style={{ textAlign: "left" }}> What is Goerli? </h3>
                        <p style={{ textAlign: "left" }}> Goerli is one of the largest and most active Ethereum testnets, and the last to transition to proof-of-stake (PoS). In our contract, there are several transactions which are deployed on Goerli network.. From the reference link identify the transaction and get the flag.</p>
                        <br />
                        <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>
                        <li> Find the block no 772xxx8, and find the value of the token transfered for the same. </li>

                        <li><strong>Token : 0x8a37df3d6b05e71a225b2b5cc7270a110c1fe55f</strong></li>
                        <li> For reference visit <a href="https://goerli.etherscan.io/token/">Etherscan.io</a></li>
                    </ol>
                    <img src={task} width="80%" />
                </div>
            </div>
        </div >
    );
}
export default Task3;
