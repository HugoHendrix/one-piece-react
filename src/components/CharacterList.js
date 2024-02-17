import React from 'react';
import luffyImage from '../image/luffy.png';
import zoroImage from '../image/zoro.png';
import namiImage from '../image/nami.png'
import usoppImage from '../image/usopp.png';
import sanjiImage from '../image/sanji.png';
import chopperImage from '../image/chopper.png';
import robinImage from '../image/robin.png';
import brookImage from '../image/brook.png';
import frankyImage from '../image/franky.png';
import jinbeImage from '../image/jinbe.png';

function CharacterList() {
    const characters = [
        {id: 1, name: 'Monkey D. Luffy', role: 'Capitão', history: 'Luffy, o capitão dos Piratas do Chapéu de Palha, é o protagonista da série de mangá e anime One Piece. Sua jornada começou no East Blue, onde, ainda um novato, ele conquistou uma recompensa de 30 milhões de berries após derrotar piratas poderosos da região.', image: luffyImage},

        {id: 2, name: 'Roronoa Zoro', role: 'Espadachim', history: 'Zoro foi a primeira pessoa que Luffy recrutou para a sua tripulação e ele é o segundo membro mais forte do bando depois de seu capitão. Sua primeira recompensa foi de 60,000,000 de berries e ele foi o primeiro pirata do Chapéu de Palha que ganhou uma recompensa depois de Luffy.', image: zoroImage},

        {id: 3, name: 'Nami', role: 'Navegadora', history: 'Nami é a navegadora do navio e apenas luta usando armas, igual a Usopp, por não ter uma especialidade em combate ou poderes de Akuma no Mi. Ela  navegou com Luffy antes de Usopp e Sanji, mas só começou a viajar com eles oficialmente como uma companheira depois de Arlong Park. Sua primeira recompensa foi de 16,000,000 de berries e ela ficou conhecida como a “Gata Ladra”.', image: namiImage},

        {id: 4, name: 'Usopp', role: 'Atirador', history: 'Usopp também é um dos primeiros membros que entrou nos Piratas do Chapéu de Palha e ele é um dos amigos mais próximos de Luffy. Ele tem a fama de ser um grande mentiroso desde o começo por inventar histórias exageradas sobre si mesmo. A primeira recompensa de Usopp foi de 30.000,000 de berries, mas seu cartaz de procurado se referia a ele pela sua outra identidade chamada Sogeking.', image:usoppImage},

        {id: 5, name: 'Sanji', role: 'Cozinheiro', history:'Sanji é um dos melhores lutadores dos Piratas do Chapéu de Palha, mas o seu papel na tripulação é de cozinheiro. Junto com Luffy e Zoro, Sanji é classificado como um membro do Trio Monstro, que são os três membros mais fortes da tripulação. Depois da batalha em Enies Lobby, Sanji ganhou sua primeira recompensa com o valor de 77,000,000 de berries.', image:sanjiImage},

        {id: 6, name: 'Tony Tony Chopper', role: 'Médico', history: 'Chopper é considerado o mascote dos Piratas do Chapéu de Palha, mas ele tem uma das funções mais importantes do bando como médico. Ele tem um grande conhecimento sobre medicina e consegue criar medicamentos para doenças mortais com muita agilidade. Sua primeira recompensa foi apenas de 50 berries porque a Marinha acha que ele é só um mascote.', image: chopperImage},

        {id: 7, name: 'Nico Robin', role: 'Arqueóloga', history:'Robin é a arqueóloga da tripulação e um dos membros mais valiosos já que é a única pessoa viva no mundo que sabe decifrar os Poneglyphs atualmente. Pelo fato de ser a última sobrevivente de Ohara, o Governo Mundial colocou uma recompensa de 79,000,000 em Robin, mesmo sendo uma criança, e a intitulou de “Criança Demônio”.', image: robinImage},

        {id: 8, name: 'Brook', role: 'Músico', history: 'Brook é o músico dos Piratas do Chapéus de Palha e o membro mais velho entre eles. Ele fazia parte dos Piratas Rumbar, que morreram há muitos anos atrás, mas Brook foi ressuscitado com o poder da Yomi Yomi no Mi. A Akuma no Mi que Brook comeu lhe deu o poder da ressurreição, mas, quando ele voltou à vida, só restavam ossos em seu corpo.', image: brookImage},

        {id: 9, name: 'Franky', role: 'Carpinteiro', history: 'Franky é o carpinteiro dos Chapéus de Palha e construiu o navio Thousand Sunny para a tripulação continuar sua jornada após a perda do Going Merry. Depois de sofrer um grave acidente, Franky reconstruiu o seu corpo com partes mecânicas e tornou-se um ciborgue. Quando Franky entrou para a tripulação de Luffy, ele já ganhou uma recompensa de 44,000,000 de berries.', image: frankyImage},

        {id: 10, name: 'Jinbe', role: 'Timoneiro', history: 'Jinbe é o timoneiro dos Chapéus de Palha e o último membro que se juntou ao grupo até o momento. Ele conheceu Luffy em Impel Down e lutou em Marineford para ajudá-lo a salvar Ace. Luffy criou um grande laço e amizade com Jinbe e o chamou para se juntar à tripulação na Ilha dos Tritões. Entretanto, Jinbe precisou resolver algumas questões antes de navegar com o grupo e se uniu a eles oficialmente só em Wano.', image: jinbeImage}
    ];

    return (
        <div>
            <h2>Personagens Principais</h2>
            <ul>
                {characters.map(character => (
                <li key={character.id}>
                    <strong>{character.name}</strong> - {character.role}
                    <p>{character.history}</p>
                    <img src={character.image} />
                </li>
                ))}
            </ul>
        </div>
    );
}

export default CharacterList;
