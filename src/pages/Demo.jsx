import './Demo.css'
import React, { useState } from "react";
// images 
import arrow from "../assets/arrow.png";
import user from "../assets/user.png";
import watch from "../assets/watch.png";
import down from "../assets/down.png";
import circle from "../assets/circle.png";
import half from "../assets/half.png";

const Demo = () => {
    // dropdown
    const [isOpen, setIsOpen] = useState(false);
    const [select, setSelect] = useState("");

    const dropdownHandler = () => {
        // setIsOpen(!isOpen)
    };
    return (
        <div className='containers'>
            <div className="backContainer">
                <div className="arrow">
                    <img src={arrow} />
                </div>
                <div className="user">
                    <img src={user} alt="" />
                </div>

            </div>

            {/* your fitness trakcer  */}
            <div className="tracker">
                <div className="trackerText">
                    <h1>
                        your <br /> fitness trakcer{" "}
                    </h1>
                </div>

                <div className="devicesContainer">
                    <div className="device">
                        <h1>Connected devices</h1>
                    </div>
                    <div className="statistic">
                        <h1>statistic</h1>
                    </div>
                </div>
            </div>
            {/* wathc card  */}
            <div className="watchContainer">
                <div className="pinkContainer">.</div>
                <div className="lightPinkContainer">.</div>
                <div className="black">
                    <div className="blackContainerTop">
                        <h5>Smart watch</h5>
                        <h3>Fire Bolt</h3>
                    </div>
                    <div className="blackContainerCenter">
                        <p>
                            Scan the device <br /> QR to connect
                        </p>
                    </div>
                    <div className="blackContainerBottom">
                        <div className="scan">
                            <p>Scan</p>
                        </div>
                    </div>
                    <div className="watchImage">
                        <img src={watch} alt="" />
                    </div>
                </div>
                <div className="blur"></div>
            </div>

            {/* task container */}
            <div className="trackerContainer">
                <div className="trackerLeft">
                    <div className="stepContainer">
                        <img className='circleImage' src={circle} alt="" />

                        <div className="steps">
                            <h3>5233</h3>
                            <p>Steps</p>
                        </div>
                        <img className="halfImage" src={half} alt="" />
                    </div>
                </div>
                <div className="trackerRight">
                    <div className="calorires">
                        <p>Calories</p>
                        <h5>1200 kcal</h5>
                    </div>
                    <div className="calorires">
                        <p>Water</p>
                        <h5>1.8 Ltrs</h5>
                    </div>
                </div>
            </div>
            {/* details  */}
            <div className="detailContainer">
                <h1>Add Details</h1>
                <form>
                    <input type="text" placeholder="Name" className="nameInput" />
                    <div className="ageContainer">
                        <input type="number" placeholder="Age" />
                        <input type="number" placeholder="Height" />
                    </div>
                    <div className="dropdown">
                        <div className="dropdownMenu" onClick={dropdownHandler}>
                            <h5>Are you a gym member?</h5>
                            <h1>{select}</h1>
                            <img src={down} alt="" />
                        </div>
                        {isOpen ? (
                            <div className="dropdownItems">
                                <li
                                    value={select}
                                    onChange={(e) => setSelect(e.target.value)}
                                    className="dropdownItems"
                                >
                                    Yes
                                </li>
                                <li
                                    value={select}
                                    onChange={(e) => setSelect(e.target.value)}
                                    className="dropdownItems"
                                >
                                    No
                                </li>
                            </div>
                        ) : null}
                    </div>
                    <div className="dropdown">
                        <div className="dropdownMenu" onClick={dropdownHandler}>
                            <h5>Do you eat meat?</h5>
                            <h1>{select}</h1>
                            <img src={down} alt="" />
                        </div>
                        {isOpen ? (
                            <div className="dropdownItems">
                                <li
                                    value={select}
                                    onChange={(e) => setSelect(e.target.value)}
                                    className="dropdownItems"
                                >
                                    Yes
                                </li>
                                <li
                                    value={select}
                                    onChange={(e) => setSelect(e.target.value)}
                                    className="dropdownItems"
                                >
                                    No
                                </li>
                            </div>
                        ) : null}
                    </div>
                    <div className="dropdown">
                        <div className="dropdownMenu" onClick={dropdownHandler}>
                            <h5>Are you a cyclist?</h5>
                            <h1>{select}</h1>
                            <img src={down} alt="" />
                        </div>
                        {isOpen ? (
                            <div className="dropdownItems">
                                <li
                                    value={select}
                                    onChange={(e) => setSelect(e.target.value)}
                                    className="dropdownItems"
                                >
                                    Yes
                                </li>
                                <li
                                    value={select}
                                    onChange={(e) => setSelect(e.target.value)}
                                    className="dropdownItems"
                                >
                                    No
                                </li>
                            </div>
                        ) : null}
                    </div>
                    <button className="saveBtn">Save Details</button>
                </form>
            </div>


        </div>
    )
}

export default Demo
