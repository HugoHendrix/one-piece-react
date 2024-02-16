import React from 'react';

function CharacterList() {
    const characters = [
        {id: 1, name: 'Monkey D. Luffy', role: 'Capitão'},
        {id: 2, name: 'Roronoa Zoro', role: 'Espadachim'},
        {id: 3, name: 'Nami', role: 'Navegadora'},
        {id: 4, name: 'Usopp', role: 'Atirador'},
        {id: 5, name: 'Sanji', role: 'Cozinheiro'},
        {id: 6, name: 'Tony Tony Chopper', role: 'Médico'},
        {id: 7, name: 'Nico Robin', role: 'Arqueóloga'},
        {id: 8, name: 'Brook', role: 'Músico'},
        {id: 9, name: 'Franky', role: 'Carpinteiro'},
        {id: 10, name: 'Jinbe', role: 'Timoneiro'}
    ];

    return (
        <div>
            <h2>Personagens Principais</h2>
            <ul>
                {characters.map(character => (
                <li key={character.id}>
                    <strong>{character.name}</strong> - {character.role}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default CharacterList;
