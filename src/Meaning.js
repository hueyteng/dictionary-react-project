import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>
                        {definition.definition}
                        <br />
                        <div className="Example">
                        <em>"{definition.example}"</em>
                        </div>
                    
                        <Synonyms synonyms={definition.synonyms} />
                        <hr />
                        </p>
                    </div>
                );
                })}
        </div>
    );
}