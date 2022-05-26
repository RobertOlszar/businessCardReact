import React from "react";
import userPhoto from "../images/photo.jpeg";
import mailIcon from "../images/mailIcon.svg";
import linkedinIcon from "../images/linkedinIcon.svg";

export default function Header() {
    return (
        <header>
            <img src={userPhoto} className="user-photo"/>
            <h1 className="name-heading">Robert Olszar</h1>
            <h3 className="position-heading">Frontend Developer</h3>
            <p className="website-name">robertolszar.website</p>
            <div className="header__buttons">
                <button className="btn btn--white"><img src={mailIcon}/>Email</button>
                <button className="btn btn--blue"><img src={linkedinIcon}/>LinkedIn</button>
            </div>
        </header>
    )
}
