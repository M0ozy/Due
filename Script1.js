// JavaScript source code
// definisci l'array dei prodotti
const prodotti = [
    { nome: 'Prodotto 1', prezzo: 10.00 },
    { nome: 'Prodotto 2', prezzo: 20.00 },
    { nome: 'Prodotto 3', prezzo: 30.00 }
];

// definisci l'array del carrello
const carrello = [];

// funzione per mostrare i prodotti disponibili
function mostraProdotti() {
    console.log('Prodotti disponibili:');
    for (let i = 0; i < prodotti.length; i++) {
        console.log(i + 1 + '. ' + prodotti[i].nome + ' - €' + prodotti[i].prezzo);
    }
}

// funzione per aggiungere un prodotto al carrello
function aggiungiAlCarrello() {
    let scelta = parseInt(prompt('Seleziona un prodotto da aggiungere al carrello: '));
    if (!isNaN(scelta) && scelta >= 1 && scelta <= prodotti.length) {
        carrello.push(prodotti[scelta - 1]);
        console.log(prodotti[scelta - 1].nome + ' aggiunto al carrello.');
    } else {
        console.log('Scelta non valida.');
    }
}

// funzione per rimuovere un prodotto dal carrello
function rimuoviDalCarrello() {
    let scelta = parseInt(prompt('Seleziona un prodotto da rimuovere dal carrello: '));
    if (!isNaN(scelta) && scelta >= 1 && scelta <= carrello.length) {
        let prodottoRimosso = carrello.splice(scelta - 1, 1);
        console.log(prodottoRimosso[0].nome + ' rimosso dal carrello.');
    } else {
        console.log('Scelta non valida.');
    }
}
function mostraCarrello() {
    console.log('Carrello della spesa:');
    if (carrello.length === 0) {
        console.log('Il carrello è vuoto.');
    } else {
        for (let i = 0; i < carrello.length; i++) {
            console.log(`${i + 1}. ${carrello[i].nome} - €${carrello[i].prezzo}`);
        }
        console.log(`Totale: €${calcolaTotaleCarrello()}`);
    }
}

// funzione per calcolare il totale del carrello
function calcolaTotaleCarrello() {
    let totale = 0;
    for (let i = 0; i < carrello.length; i++) {
        totale += carrello[i].prezzo;
    }
    return totale.toFixed(2); // arrotonda il totale a 2 cifre decimali
}