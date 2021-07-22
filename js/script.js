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
            description: 'bla bla bla'
        },
        {
            activeCost: ['R', 'R', 'T'],
            description: 'bla bla'
        }
    ],

    flavourText: {
        quote: 'bla in corsivo',
        author: 'John Fitzgerald'
    },
    collectionNr: '124/432',
    constitution: '4',
    streight: '2',
    borderColor: '#000',

    illustration: {                           
        author: {
            id: 1,                            
            name: 'Marchino'                   
        },
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

const subType = card.subType ? `- ${card.subType} ` : '';

let abilitiesContent = '<em>nessuna abilità</em>';
if(card.abilities.length){
    abilitiesContent = '<ul>';
    for(let i = 0; i < card.abilities.length; i++){
        const currentAbilities = card.abilities[i];
        abilitiesContent += `<li>Descrizione: ${currentAbilities.description} - Costo Effetto: ${currentAbilities.activeCost}</li>`
    }
    abilitiesContent += '</ul>'
}


let cardTemplate = `
<ul class="card">
    <li><strong>Nome:</strong> ${card.name}</li>
    <li><strong>Mana Cost:</strong> ${card.manaCost}</li>
    <li><strong>Converted Mana Cost:</strong> ${card.convertedCost}</li>
    <li><strong>Type:</strong> ${card.cardType} - ${card.subType}</li>
    <li><strong>Expansion:</strong>
        <ul>
            <li>Reprint: ${card.expansion.reprintId}</li>
            <li>Name: ${card.expansion.name}</li>
            <li>Rarity: ${card.expansion.rarity}</li>
            <li>Numero: ${card.collectionNr}</li>
        </ul>
    </li>  
    <li><strong>Abilità:</strong> ${abilitiesContent}</li>
      


</ul>
`;

cardSection.innerHTML = cardTemplate

