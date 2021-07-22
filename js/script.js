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
            activeCost: ['R',],
            description: 'Sacrifice Bloodfire Colossus: Bloodfire Colossus deals 6 damage to each creature and each player.'
        }
    ],

    flavourText: {
        quote: 'It took all its strength to contain the fire within.',
        author: ''
    },
    collectionNr: '124/432',
    toughness: '6',
    strength: '6',
    borderColor: '#000',

    illustration: {                           
        author: 'Greg Staples',
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
let abilitiesContent = '<em>No abilities</em>';
if(card.abilities.length){
    abilitiesContent = '<ul class="sublist">';
    for(let i = 0; i < card.abilities.length; i++){
        const currentAbilities = card.abilities[i];
        abilitiesContent += `<li><strong>Description:</strong> ${currentAbilities.description} - <strong></li><li>Effect Cost:</strong> ${currentAbilities.activeCost}</li>`
    }
    abilitiesContent += '</ul>'
}

//Stampa finale
let cardTemplate = `
<ul class="card">
    <li><strong>Nome:</strong> ${card.name}</li>
    <li><strong>Mana Cost:</strong> ${card.manaCost}</li>
    <li><strong>Converted Mana Cost:</strong> ${card.convertedCost}</li>
    <li><strong>Type:</strong> ${card.cardType} ${subType}</li>
    <li><strong>Expansion:</strong>
        <ul class="sublist">
            <li>Reprint: ${card.expansion.reprintId}</li>
            <li>Name: ${card.expansion.name}</li>
            <li>Rarity: ${card.expansion.rarity}</li>
            <li>Collection Num: ${card.collectionNr}</li>
        </ul>
    </li>  
    <li><strong>Abilities:</strong> ${abilitiesContent}</li>
    <li><strong>Flavour Text:</strong> ${card.flavourText.quote} - <em>${card.flavourText.author}</em></li>
    <li><strong>Toughness/Strenght:</strong> ${card.toughness}/${card.strength}</li>
    <li><strong>Illustrator:</strong><em> ${card.illustration.author}<em></li>
    <li><strong>Illustration:</strong><br> <img src="./img/pic.png"></li>

</ul>
`;

cardSection.innerHTML = cardTemplate

