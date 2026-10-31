import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import luffyImage from "../image/luffy.png";
import zoroImage from "../image/zoro.png";
import namiImage from "../image/nami.png";
import usoppImage from "../image/usopp.png";
import sanjiImage from "../image/sanji.png";
import chopperImage from "../image/chopper.png";
import robinImage from "../image/robin.png";
import brookImage from "../image/brook.png";
import frankyImage from "../image/franky.png";
import jinbeImage from "../image/jinbe.png";
import merryImage from "../image/merry.jpg";
import sunnyImage from "../image/sunny.png";

function CharacterList() {
  const characters = [
    {
      id: 1,
      name: "Monkey D. Luffy",
      role: "Capitão",
      history:
        "Luffy, o capitão dos Piratas do Chapéu de Palha, é o protagonista da série de mangá e anime One Piece.",
      image: luffyImage,
    },

    {
      id: 2,
      name: "Roronoa Zoro",
      role: "Espadachim",
      history:
        "Zoro foi a primeira pessoa que Luffy recrutou para a sua tripulação e ele é o segundo membro mais forte do bando depois de seu capitão.",
      image: zoroImage,
    },

    {
      id: 3,
      name: "Nami",
      role: "Navegadora",
      history:
        "Nami é a navegadora do navio e apenas luta usando armas, igual a Usopp, por não ter uma especialidade em combate ou poderes de Akuma no Mi.",
      image: namiImage,
    },

    {
      id: 4,
      name: "Usopp",
      role: "Atirador",
      history:
        "Usopp também é um dos primeiros membros que entrou nos Piratas do Chapéu de Palha e ele é um dos amigos mais próximos de Luffy.",
      image: usoppImage,
    },

    {
      id: 5,
      name: "Sanji",
      role: "Cozinheiro",
      history:
        "Sanji é um dos melhores lutadores dos Piratas do Chapéu de Palha, mas o seu papel na tripulação é de cozinheiro.",
      image: sanjiImage,
    },

    {
      id: 6,
      name: "Tony Tony Chopper",
      role: "Médico",
      history:
        "Chopper é considerado o mascote dos Piratas do Chapéu de Palha, mas ele tem uma das funções mais importantes do bando como médico.",
      image: chopperImage,
    },

    {
      id: 7,
      name: "Nico Robin",
      role: "Arqueóloga",
      history:
        "Robin é a arqueóloga da tripulação e um dos membros mais valiosos já que é a única pessoa viva no mundo que sabe decifrar os Poneglyphs atualmente. ",
      image: robinImage,
    },

    {
      id: 8,
      name: "Brook",
      role: "Músico",
      history:
        "Brook é o músico dos Piratas do Chapéus de Palha e o membro mais velho entre eles. Ele fazia parte dos Piratas Rumbar, que morreram há muitos anos atrás, mas Brook foi ressuscitado com o poder da Yomi Yomi no Mi.",
      image: brookImage,
    },

    {
      id: 9,
      name: "Franky",
      role: "Carpinteiro",
      history:
        "Franky é o carpinteiro dos Chapéus de Palha e construiu o navio Thousand Sunny para a tripulação continuar sua jornada após a perda do Going Merry.",
      image: frankyImage,
    },

    {
      id: 10,
      name: "Jinbe",
      role: "Timoneiro",
      history:
        "Jinbe é o timoneiro dos Chapéus de Palha e o último membro que se juntou ao grupo até o momento. Ele conheceu Luffy em Impel Down e lutou em Marineford para ajudá-lo a salvar Ace. ",
      image: jinbeImage,
    },

    {
        id: 11,
        name: "O Going Merry",
        role: "Merry, o Navio dos Chapéus de Palha",
        history:
          "O Going Merry, carinhosamente apelidado de Merry, era o navio dos Chapéus de Palha durante a primeira metade da Grand Line em One Piece. Mais do que um meio de transporte, o Merry era um símbolo da união e do sonho da tripulação, representando a jornada e as aventuras que eles compartilharam. ",
        image: merryImage,
      },

      {
        id: 12,
        name: "Thousand Sunny",
        role: "Navio Atual do Bando",
        history:
          "O Thousand Sunny é o segundo navio dos Chapéus de Palha em One Piece, substituindo o Going Merry após sua despedida em Water 7. Construído por Franky, o Sunny é uma embarcação tecnológica e poderosa que acompanha a tripulação em suas aventuras pela Grand Line.",
        image: sunnyImage,
      },
  ];

  return (
    <div className="container pb-5">
      <h1
        class="mt-5 mb-4"
        aria-label="Bando do Chapéu de Palha (Mugiwara no Ichimi)"
      >
        麦わらの一味 - Mugiwara no Ichimi
      </h1>
      <p className="h5 mb-5">(Bando do Chapéu de Palha)</p>
      <div className="row">
        {characters.map((character) => (
          <div key={character.id} className="col-lg-4 mb-4">
            <div className="card">
              <img
                src={character.image}
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body roudend shadow">
                <h2 className="card-title">{character.name}</h2>
                <p className="card-text">
                  <strong>Função no bando: </strong>
                  {character.role}
                </p>
                <p className="card-text m-2 p-2">
                  <strong> </strong>
                  {character.history}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
