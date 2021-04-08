import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
    setResults(response.data[0]);
    }

    function search() {
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                    <input 
                        type="search" 
                        placeholder="Enter another word to look it up"
                        autocomplete="off"
                        onChange={handleKeywordChange} 
                    />
            </form>
            <div className="card">
            <Results results={results} />
            </div>
        </div>
    );
} else {
    load();
    return "Loading...";
}
}