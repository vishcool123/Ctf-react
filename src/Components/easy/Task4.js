import React, { useEffect } from "react";
import ConnectWallet from "../ConnectWallet";
// import './style1.css'
import styles from "./task1.css";
import task from "./images/task4.PNG";
function Task4(props) {

    return (
        <div>
            <div>
                <ConnectWallet />
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "50%", marginLeft: "25%" }}>

                <div className="f4 dark-gray fw3 lh-copy lekton" style={{ textAlign: "left" }}>
                    <ol style={{ textAlign: "left" }}>
                        <h3 style={{ textAlign: "left" }}>What is Gas Value in Smart Contract?</h3>
                        <p style={{ textAlign: "left" }}> Gas is the fee required to successfully conduct a transaction or execute a contract on the Ethereum blockchain platform. Fees are priced in tiny fractions of the cryptocurrency ether (ETH)—denominations called gwei (10-9 ETH). </p>
                        <strong> Why I need to pay Gas? </strong>
                        <p style={{ textAlign: "left" }}>The Ethereum gas fee exists to pay network validators for their work securing the blockchain and network. Without the fees, there would be few reasons to stake ETH and become a validator. The network would be at risk without validators and the work they do. Parameter in ethereum transactions like transaction hash, block, timestamp, value, fees etc. User need to find value of Gas price and Transaction fees</p>
                        <p style={{ textAlign: "left" }}>To complete this challenge, you need to:</p>
                        <li >Find the Gas price and Transaction fees from deployed contract address.</li>

                        <li> Deployed Address 0xA9A84621A9b93B8E4Befed02461096787fe0AcCF</li>
                    </ol>
                    <img src={task} width="80%" />
                </div>
            </div>
        </div >
    );
}
export default Task4;
