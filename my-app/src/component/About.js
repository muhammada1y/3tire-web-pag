import React from "react";
import img1 from "../img/sec 1/Beverly.png";
import img2 from "../img/sec 1/Ellipse.png";
import img3 from "../img/sec 1/unnamed.png";
import img4 from "../img/sec 2/Vector-1.png";
import img5 from "../img/sec 2/Vector.png";

function About() {
    return (
        <div>
            <div className="sec1">
                <div className="left">
                    <span className="lady">
                        <img src={img1} alt="" />
                    </span>
                    <h1>About us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Lorem, ipsum dolor.
                    </p>{" "}
                    <br /> <br /> <br />
                </div>
                <div className="right">
                    <img src={img3} alt="" />
                    <img className="point" src={img2} alt="" />
                </div>
            </div>
            <div className="sec2">
                <div className="font">
                    <p>Follow us</p>
                    <ul style={{ display: 'flex' }}>
                        <li className="fa fa-facebook" aria-hidden="true"></li> <br />
                        <li className="fa fa-instagram" aria-hidden="true" style={{ marginLeft: '10px' }}></li> <br />
                        <li><a href="./contac.html" style={{ color: "rgb(51, 51, 145)" }}>TRAVEL WITH US</a></li>
                        <li className="fa fa-twitter" aria-hidden="true" style={{ marginLeft: '10px' }}></li> <br />
                    </ul>
                </div>
                <div className="num"><p><span><img src={img4} alt="" /></span>+91 9267454888</p> </div>
                <div className="location"><p> <span><img src={img5} alt="" /></span> Lorem ipsum dolor, <br /> sit amet consectetur adipisicing.</p></div>
            </div>
        </div>
    );
}

export default About;
