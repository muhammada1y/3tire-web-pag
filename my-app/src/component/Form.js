import React, { useState } from "react";

function Form() {
    const [userName, setName] = useState("");
    const [userCNIC, setCnic] = useState("");
    const [picture, setPicture] = useState(null);
    const [previousT, setPreviusT] = useState("");
    const [previousN, setPreviusN] = useState("");

    const sendData = async () => {
        const formData = new FormData();
        formData.append("name", userName);
        formData.append("cnic", userCNIC);
        formData.append("picture", picture);
        formData.append("previous", previousT);
        formData.append("experience", previousN);

        try {
            const result = await fetch("http://localhost:3054/createCV", {
                method: "POST",
                body: formData,
            });

            if (result.ok) {
                setName("");
                setCnic("");
                setPicture("");
                setPreviusT("");
                setPreviusN("");
                alert("details successfully send");

            } else {
                console.error("Error submitting data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="sec3">
            <div className="top">
                <h1>Details Please</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="form">
                <form encType="multipart/form-data">
                    <div className="one">
                        <div className="fname">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={userName} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="lname">
                            <label htmlFor="cnic">CNIC Number:</label>
                            <input type="text" id="cnic" name="cnic" value={userCNIC} onChange={(e) => setCnic(e.target.value)} required />
                        </div>
                    </div>
                    <div className="two">
                        <div className="image-upload">
                            <label id="choose-image" htmlFor="picture">
                                Choose Passport Image
                            </label>
                            <input
                                type="file"
                                id="picture"
                                name="picture"
                                accept="image/*"
                                onChange={(e) => setPicture(e.target.files[0])}
                                required
                            />
                        </div>

                        <div className="three">
                            <label htmlFor="previous">Previous Travels:</label>
                            <textarea id="previous" name="previous" required value={previousT} onChange={(e) => setPreviusT(e.target.value)} ></textarea>

                            <label htmlFor="experience">Passport-no:</label>
                            <textarea id="experience" name="experience" required value={previousN} onChange={(e) => setPreviusN(e.target.value)}></textarea>
                        </div>
                        <button type="button" onClick={sendData}>
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
