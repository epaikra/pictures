import { useState } from "react";
import './SearchBar.css';
import searchImage from '../api';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const characters = await searchImage(term);
        onSubmit(characters);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="">Picture Search</label>
                <input onChange={handleChange} value={term} />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;