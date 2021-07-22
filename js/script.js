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
        source: 'img/pic.png'              
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


PrintCard(card);






// ┌──────────────────────────────────────────────────────────────────────────────┐
//*│                           Dichiarazione Funzione                             │
// └──────────────────────────────────────────────────────────────────────────────┘

function PrintCard(carta){
    const cardSection = document.getElementById('card');

    //se non dovesse esserci un subType crea una stringa vuota
    const subType = carta.subType ? `- ${carta.subType} ` : '';

    //Se non ci sono effetti mostra il messaggio nel caso contrario gira dentro l'array delle abilità e stampane il contenuto
    let abilitiesContent = '<em>No abilities</em>';
    if(carta.abilities.length){
    abilitiesContent = '<ul class="sublist">';
    for(let i = 0; i < carta.abilities.length; i++){
        const currentAbilities = carta.abilities[i];
        abilitiesContent += `<li><strong>Description:</strong> ${currentAbilities.description} <strong></li><li>Effect Cost:</strong> ${currentAbilities.activeCost}</li>`
    }
    abilitiesContent += '</ul>'
}
    let cardTemplate = `
    <ul class="card">
        <li><strong>Nome:</strong> ${carta.name}</li>
        <li><strong>Mana Cost:</strong> ${carta.manaCost}</li>
        <li><strong>Converted Mana Cost:</strong> ${carta.convertedCost}</li>
        <li><strong>Type:</strong> ${carta.cardType} ${subType}</li>
        <li><strong>Expansion:</strong>
            <ul class="sublist">
                <li>Reprint: ${carta.expansion.reprintId}</li>
                <li>Name: ${carta.expansion.name}</li>
                <li>Rarity: ${carta.expansion.rarity}</li>
                <li>Collection Num: ${carta.collectionNr}</li>
            </ul>
        </li>  
        <li><strong>Abilities:</strong> ${abilitiesContent}</li>
        <li><strong>Flavour Text:</strong> ${carta.flavourText.quote} - <em>${carta.flavourText.author}</em></li>
        <li><strong>Toughness/Strenght:</strong> ${carta.toughness}/${carta.strength}</li>
        <li><strong>Illustrator:</strong><em> ${carta.illustration.author}<em></li>
        <li><strong>Illustration:</strong><br> <img src="${carta.illustration.source}"> </li>
    
    </ul>
    `;
    cardSection.innerHTML = cardTemplate;

}
