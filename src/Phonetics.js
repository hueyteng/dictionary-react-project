import React from "react";

export default function Phonetics(props) {
    
    function playAudio(event) {
        event.preventDefault();
        let audioClip = document.getElementById("pronunciation");
        audioClip.play();
        };
    
    return (
        <div className="Phonetics">
            {" [ "}{props.phonetics.text} {" ]"} 
            <audio onLoad="auto" id="pronunciation">
                <source src={props.phonetics.audio} /></audio>
                <a href="/" rel="noreferrer" onClick={playAudio}>
                <i class="fas fa-volume-up"></i>
            </a>
            
        </div>
    );
}