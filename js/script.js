// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.


var studente = {

    "Nome": "Mario",

    "Cognome": "Rossi",

    "Eta": 21

};

console.log(studente);

for (var key in studente) {

    console.log(key + ": " + studente[key]);

}

// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome


var studenti = [

    studente_1 = {

        "Nome": "Antonio",

        "Cognome": "Bianchi",

        "Eta": 22

    },

    studente_2 = {

        "Nome": "Lorenzo",

        "Cognome": "Moretti",

        "Eta": 25

    },

    studente_3 = {

        "Nome": "Gianluca",

        "Cognome": "Rinaldi",

        "Eta": 27

    },

    studente_4 = {

        "Nome": "Fabrizio",

        "Cognome": "Marini",

        "Eta": 28

    },

]

console.log(studenti);

for (var i = 0; i < studenti.length; i++) {

    console.log(studenti[i].Nome, studenti[i].Cognome);

}


// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.

var n = prompt("Inserisci Nome");

var c = prompt("Inserisci Cognome");

var input = capitalizeFirstLetter(n, c);

var e;

var studente_5 = {

    "Nome": capitalizeFirstLetter(n),

    "Cognome": capitalizeFirstLetter(c),

    "Eta": richiestaEta()

}

// do {

//     e = parseInt(prompt("Inserisci Età"));

//     console.log(e);

// } while (isNaN(e))


// studente_5.Eta = e;


studenti.push(studente_5);

console.log(studenti);



// ---FUNCTIONS---


function richiestaEta() {

    do {

        e = parseInt(prompt("Inserisci Età"));

        console.log(e);

    } while (isNaN(e))

    return e;

}


function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
}

