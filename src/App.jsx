import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchCharacter from './api';
import './App.css';

function App() {
    const [character, setCharacter] = useState(null);

    const handleSubmit = async (term) => {
        console.log('Searching for:', term);
        const result = await searchCharacter(term);
        setCharacter(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            {character ? (
                <div>
                    <h2>Character Information</h2>
                    <img src={character.image} alt={character.name} />
                    <p>Name: {character.name}</p>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                </div>
            ) : (
                <p>No character found</p>
            )}
        </div>
    );
}

export default App;