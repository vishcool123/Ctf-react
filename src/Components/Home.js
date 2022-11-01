import React, { useEffect } from "react";
import './Home.css'
import metamask from "../images//metamask-icon.png";
import Challenges from "./Challenges";
function Home(props) {
    useEffect(() => {
        // document.title("Connect MetaMask")
    }, []);

    return (
        <div>

            {/*  */}
            <Challenges />
        </div>

    );
}
export default Home;
