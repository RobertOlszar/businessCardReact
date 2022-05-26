import React from "react";
import twitterIcon from "../images/twitterIcon.svg";
import facebookIcon from "../images/facebookIcon.svg";
import instagramIcon from "../images/instagramIcon.svg";
import githubIcon from "../images/githubIcon.svg";

export default function Footer() {
    return (
        <footer>
            <img src={twitterIcon}/>
            <img src={facebookIcon}/>
            <img src={instagramIcon}/>
            <img src={githubIcon}/>
        </footer>
    )
}
