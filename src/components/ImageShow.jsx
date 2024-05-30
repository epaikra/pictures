import React from 'react';

function ImageShow({ character }) {
    Console.log('coco');
    
    return (
        <div>
            <div className="col-md-4" key={character.id}>
                <img src={character.image} alt={character.name} />
                <p>Name: {character.name}</p>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
            </div>
        </div>
    );
}

export default ImageShow;