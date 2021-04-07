import React from "react";

export default function Phonetics(props) {
    return (
        <div className="Phonetics">
            {" [ "}{props.phonetics.text} {" ]"} 
           <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
                <i class="fas fa-volume-up"></i>
            </a>
            
        </div>
    );
}