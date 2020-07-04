import React, { useRef } from "react";

import { ImageUrl, CancelUrl } from "../../constant"
import "./SideBar.css";

export default function SideBar({ handleTick, backgroundImg }) {

    const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const fileRef = useRef();

    return (
        <div className="component-sidebar">
            <select>
                <option value="100">100</option>
                <option value="75">75</option>
                <option value="50">50</option>
            </select>
            <div className="level-container">
                {levels.map((level, index) =>
                    <div className="level-btn" key={index}>{level}</div>
                )}

            </div>
            <div className="marking-container">
                <div className="level-btn success"
                    variant="outlined"
                    onClick={(e) => {
                        handleTick(`${ImageUrl}`)
                    }}>
                    Ok
              </div>
                <div className="level-btn cancel"
                    variant="outlined"
                    onClick={(e) => {
                        handleTick(`${CancelUrl}`)
                    }}>
                    X
              </div>
            </div>
            <div className="upload-img" onClick={(e) => {
                fileRef.current.click()
            }}>Upload</div>
            <input type="file" style={{ display: "none" }} onChange={(e) => backgroundImg(e)} ref={fileRef} />
        </div>
    )
}