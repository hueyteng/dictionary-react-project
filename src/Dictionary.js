import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
    setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }



    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Search">
            <form onSubmit={search}>
                    <input 
                        type="search" 
                        placeholder="Look up a word"
                        autocomplete="off"
                        onChange={handleKeywordChange} 
                    />
            </form>
            <div className="card">
            <Results results={results} />
            </div>
        </div>
    );
}