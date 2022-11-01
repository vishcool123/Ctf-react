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
            <div style={{ display: "flex", justifyContent: "center", maxwidth: "768px" }}>
                <div className="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>
                    <ol style={{ textAlign: "left" }}>
                        <li> Go to  <a href="https://remix.ethereum.org/">Remix</a>.</li>
                        <li>Select <strong>Remix Vm London in</strong> the environment. .</li>
                        <li>Compile and deploy the contract</li>
                        <li>Missing Code</li>
                        <li>Analyze the output</li>
                    </ol>
                    <img src={task} width="80%" />
                </div>
            </div>
        </div >
    );
}
export default Task3;
