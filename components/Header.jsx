import React from "react";

export default function Header(){
    return(
        <div className="info-container">
            <img className="my-image" src="/business-card-picture2.png" alt="picture of Joachim James smiling at the camera."/>
            <div className="my-infos-container">
                <h2>Joachim James</h2>
                <p>Frontend Developer</p>
                <p id="website-label">simplycomplex.website</p>
            </div>
            <div className="my-buttons-container">
                <a href="mailto:simplycomplex64@gmail.com">
                    <button>
                        <img className="email-icon" src="/emailIcon.png" alt="contact via email icon"/>
                        <p>E-mail</p>
                    </button>
                </a>
                <a href="https://linkedin.com/in/james-joachim-565890289">
                    <button className="linkedIn-btn">
                        <img className="linkedIn-icon" src="/linkedIn.png" alt="link to Joachim James linked in account."/>
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}
