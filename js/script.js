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


const deck = [

{
    id: 1,
    name: 'Bloodfire Colossus',
    manaCost: ['6','R', 'R'],
    convertedCost: 8,
    cardType: 'Creature',
    subType: 'Giant',
    expansion: {
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

},
{
    id: 2,
    name: 'Body Double',
    manaCost: ['4','U'],
    convertedCost: 5,
    cardType: 'Creature',
    subType: 'Shapeshifter',
    expansion: {
        name: 'Planar Chaos',
        rarity: 'Rare'
    },

    abilities: [
        {
            activeCost: '0',
            description: 'You may have Body Double enter the battlefield as a copy of any creature card in a graveyard.'
        }
    ],

    flavourText: {
        quote: 'Where the dead outnumbered the living, mimics scavenged faces from the fallen.',
        author: ''
    },
    collectionNr: '35/432',
    toughness: '0',
    strength: '0',
    borderColor: '#000',

    illustration: {                           
        author: 'Greg Staples',
        source: 'img/pic2.png'              
    },

    background: {                              
        color: 'red',
        source: 'img/pic.jpg'
    }

},
{
    id: 3,
    name: 'Bathe in Dragonfire',
    manaCost: ['2','R'],
    convertedCost: 3,
    cardType: 'Sorcery',
    subType: '',
    expansion: {
        name: 'Fate Reforged',
        rarity: 'Common'
    },

    abilities: [
        {
            activeCost: '0',
            description: 'Bathe in Dragonfire deals 4 damage to target creature.'
        }
    ],

    flavourText: {
        quote: "L'odore di carne bruciata aleggia nel paesaggio annerito di Tarkir.",
        author: ''
    },
    collectionNr: '92/432',
    toughness: '',
    strength: '',
    borderColor: '#000',

    illustration: {                           
        author: 'Chris Rallis',
        source: 'img/pic3.png'              
    },

    background: {                              
        color: 'red',
        source: 'img/pic.jpg'
    }

}
];





// ┌────────────────────────────────────────────────────────────────┐
//*│                       Print on Page                            │
// └────────────────────────────────────────────────────────────────┘

const cardSection = document.getElementById('card');

renderDeck(deck);





// ┌──────────────────────────────────────────────────────────────────────────────┐
// │              ZONA DEL FILTRAGGIO                                             │
// └──────────────────────────────────────────────────────────────────────────────┘

//creo le variabili per collegare la sezione filter
const inputField = document.getElementById('search');
const selectField = document.getElementById('filter');
const button = document.getElementById('btn-src');

//menu a tendina intercettato
selectField.addEventListener('change', () =>{
    const currentValue = selectField.value;
    if(currentValue !== 'all'){
        inputField.classList.remove('hidden');
    } else{
        inputField.classList.add('hidden');
    }
})


button.addEventListener('click', () => {
    const inputValue = inputField.value;
    const selectValue = selectField.value;

    if(selectValue === 'all'){
        renderDeck(deck, cardSection);
        return;
    }

    const filteredDeck = [];
    for(let i = 0; i < deck.length; i++){
        const currentCard = deck[i];
        if(currentCard[selectValue] == inputValue){
            filteredDeck.push(currentCard);
        };
        switch(selectValue){
            case 'name':
            case 'convertedCost':
                if(currentCard[selectValue == inputValue]){
                    filteredDeck.push(currentCard);
                }
            case 'cardType':
                
        }
    }
    renderDeck(filteredDeck, cardSection);
})




// ┌──────────────────────────────────────────────────────────────────────────────┐
//*│                           Dichiarazione Funzione                             │
// └──────────────────────────────────────────────────────────────────────────────┘

function PrintCard(obj){

    //se non dovesse esserci un subType crea una stringa vuota
    const subType = obj.subType ? `- ${obj.subType} ` : '';

    //Se non ci sono effetti mostra il messaggio nel caso contrario gira dentro l'array delle abilità e stampane il contenuto
    let abilitiesContent = '<em>No abilities</em>';
    if(obj.abilities.length){
    abilitiesContent = '<ul class="sublist">';
    for(let i = 0; i < obj.abilities.length; i++){
        const currentAbilities = obj.abilities[i];
        abilitiesContent += `<li><strong>Description:</strong> ${currentAbilities.description} <strong></li><li>Effect Cost:</strong> ${currentAbilities.activeCost}</li>`
    }
    abilitiesContent += '</ul>'
}
    let cardTemplate = `
        <ul class="card">
            <li><strong>Nome:</strong> ${obj.name}</li>
            <li><strong>Mana Cost:</strong> ${obj.manaCost}</li>
            <li><strong>Converted Mana Cost:</strong> ${obj.convertedCost}</li>
            <li><strong>Type:</strong> ${obj.cardType} ${subType}</li>
            <li><strong>Expansion:</strong>
                <ul class="sublist">
                    <li>Name: ${obj.expansion.name}</li>
                    <li>Rarity: ${obj.expansion.rarity}</li>
                    <li>Collection Num: ${obj.collectionNr}</li>
                </ul>
            </li>  
            <li><strong>Abilities:</strong> ${abilitiesContent}</li>
            <li><strong>Flavour Text:</strong> ${obj.flavourText.quote} - <em>${obj.flavourText.author}</em></li>
            <li><strong>Toughness/Strenght:</strong> ${obj.toughness}/${obj.strength}</li>
            <li><strong>Illustrator:</strong><em> ${obj.illustration.author}<em></li>
            <li><strong>Illustration:</strong><br> <img src="${obj.illustration.source}"> </li>
        
        </ul> 
    `;
    return cardTemplate;

}



function renderDeck(deck){
    let deckTemplate = '';
    
    for(let i = 0; i < deck.length; i++){
        const currentCard = deck[i];
        const currentCardTemplate = PrintCard(currentCard);
        deckTemplate += currentCardTemplate
    
    };
    cardSection.innerHTML = deckTemplate;
    
    }
