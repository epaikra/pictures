import React from 'react';
import ImageShow from './ImageShow';

function ImageList({ characters }) {
    console.log(characters);
    

    return (
        <div className='image-list'>
            {characters.map((character) => (
                <ImageShow key={character.id} character={character} />
            ))}
        </div>
    );
}

export default ImageList;