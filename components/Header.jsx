import React from "react";

export default function Header(){
    return(
        <div className="info-container">
            <img className="my-image" src="./src/assets/business-card-picture2.png" />
                <div className="my-infos-container">
                         <h2>Joachim James</h2>
                         <p>Frontend Developer</p>
                         <p id="website-label">simplycomplex.website</p>
                </div>
                    <div className="my-buttons-container">
                         <button>
                            <img className="email-icon" src="./images/emailIcon.png"/>
                            <p>E-mail</p>
                            </button>
                         <button className="linkedIn-btn">
                         <img className="linkedIn-icon" src="./images/linkedIn.png"/>
                            LinkedIn
                            </button>
                </div>
        </div>
    )
}