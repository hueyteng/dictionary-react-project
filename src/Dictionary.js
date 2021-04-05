import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
    console.log(response.data[0]);
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
                <div className="mb-3">
                    <input 
                        type="search" 
                        size="35"
                        placeholder="Look up a word"
                        autocomplete="off"
                        onChange={handleKeywordChange} />
                <button className="btn btn-info" type="submit" id="search-button">
                    Search
                </button>
                </div>
            </form>
        </div>
    );
}