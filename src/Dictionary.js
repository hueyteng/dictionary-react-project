import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    }

    function search() {
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelsApiKey =
            "563492ad6f91700001000001b5d9bd6b857a40d8aa2b8bd8392491e0";
        let  pexelsApiUrl = 
            `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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

            <Photos photos={photos} />
            </div>
        
    );
} else {
    load();
    return "Loading...";
}
}