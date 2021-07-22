// ┌──────────────────────────────────────────────────────────────────────────────┐
// │                          Analisi Carta                                       │
// └──────────────────────────────────────────────────────────────────────────────┘
//* 1 NOME CARTA
//* 2 COSTO MANA
//* 3 TIPOLOGIA DELLA CARTA
//* 4 NUMERO ESPANSIONE
//* 5 ABILITA'
//* 6 TESTO SECONDARIO
//* 7 FORZA E COSTITUZIONE
//* 8 NUMERO DELLA COLLEZIONE
//* 9 ILLUSTRAZIONE E ILLUSTRATORE

//  --------------------------------------------------------------------------------------


const card = {
    id: 1,
    name: 'Bloodfire Colossus',
    manaCost: ['6','R', 'R'],
    convertedCost: 8,
    cardType: 'Creature',
    subType: 'Giant',
    expansion: {
        reprintId: 9,
        name: 'Ninth Edition',
        rarity: 'Rare'
    },

    abilities: [
        {
            activeCost: ['R', 'T'],
            description: 'Effetto Abilità Numero 1'
        },
        {
            activeCost: ['R', 'R', 'T'],
            description: 'Effetto Abilità Numero 2'
        }
    ],

    flavourText: {
        quote: 'Flavour Text Qui',
        author: 'John Fitzgerald'
    },
    collectionNr: '124/432',
    toughness: '4',
    strength: '2',
    borderColor: '#000',

    illustration: {                           
        author: 'Jim McKully',
        source: 'img/pic.jpg'              
    },

    background: {                              
        color: 'red',
        source: 'img/pic.jpg'
    }

}

console.table(card);

// ┌────────────────────────────────────────────────────────────────┐
//*│                       Print on Page                            │
// └────────────────────────────────────────────────────────────────┘

const cardSection = document.getElementById('card');

//se non dovesse esserci un subType crea una stringa vuota
const subType = card.subType ? `- ${card.subType} ` : '';
const flavourText = card.flavourText ? `-${card.flavourText}`: '';

//Se non ci sono effetti mostra il messaggio nel caso contrario gira dentro l'array delle abilità e stampane il contenuto
let abilitiesContent = '<em>nessuna abilità</em>';
if(card.abilities.length){
    abilitiesContent = '<ul>';
    for(let i = 0; i < card.abilities.length; i++){
        const currentAbilities = card.abilities[i];
        abilitiesContent += `<li>Descrizione: ${currentAbilities.description} - Costo Effetto: ${currentAbilities.activeCost}</li>`
    }
    abilitiesContent += '</ul>'
}

//Stampa finale
let cardTemplate = `
<ul class="card">
    <li><strong>Nome:</strong> ${card.name}</li>
    <li><strong>Mana Cost:</strong> ${card.manaCost}</li>
    <li><strong>Converted Mana Cost:</strong> ${card.convertedCost}</li>
    <li><strong>Type:</strong> ${card.cardType} - ${subType}</li>
    <li><strong>Expansion:</strong>
        <ul>
            <li>Reprint: ${card.expansion.reprintId}</li>
            <li>Name: ${card.expansion.name}</li>
            <li>Rarity: ${card.expansion.rarity}</li>
            <li>Collection Num: ${card.collectionNr}</li>
        </ul>
    </li>  
    <li><strong>Abilities:</strong> ${abilitiesContent}</li>
    <li><strong>Flavour Text:</strong> ${card.flavourText.quote} - <em>${card.flavourText.author}</em></li>
    <li><strong>Toughness/Strenght:</strong> ${card.toughness}/${card.strength}</li>
    <li><strong>Illustrator:</strong><em>${card.illustration.author}<em></li>
    <li><strong>Illustration:</strong><br> <img src="./img/pic.png"></li>

</ul>
`;

cardSection.innerHTML = cardTemplate

