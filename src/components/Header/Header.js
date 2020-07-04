import React from "react";

import CountDownTimer from "../CountDownTimer/CountDownTimer"
import InternetSpeed from "../InternetSpeed/InternetSpeed"

import "./Header.css"

function Header(props) {

    return (
        <div className="component-header">
            <div className="header-content-left">
                <button>Back Me</button>
                <div className="test-container">
                    <div className="test-id-no">ID:</div>
                    <div className="test-id-text">8994</div>
                </div>
                <div className="test-container">
                    <div className="test-id-no">Subject:</div>
                    <div className="test-id-text">Demo</div>
                </div>
            </div>
            <div className="timer-container">
                <div>Time Taken</div>
                <CountDownTimer hours={60} minutes={10} seconds={60}
                />
            </div>
            <div className="header-content-right">
                <div className="internet-speed-container">
                    <div className="internet-speed-text">Speed</div>
                    <div className="internet-speed-text"><InternetSpeed /></div>
                </div>
            </div>
        </div>

    )
}

export default Header;