import axios from 'axios';
const searchCharacter = async (query) => {
    try {
        if (typeof query !== 'string') {
            // Manejar el caso donde query no es una cadena de texto
            return [];
        }

        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        const filteredCharacters = response.data.results.filter(character =>
            character.name.toLowerCase() === query.toLowerCase() || character.id.toString() === query
        );
        return filteredCharacters;
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
};
export default searchCharacter;