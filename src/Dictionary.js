import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for definition of "${keyword}"`);
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