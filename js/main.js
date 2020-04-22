// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var student = {
    "nome": "Marco",
    "cognome": "Mancini",
    "età": 25
}

// Stampare a schermo attraverso il for in tutte le proprietà;
for (var key in student) {
    console.log(student[key]);
}


// Creare un array di oggetti di studenti.
var studentsList = [
    {
        "nome": "Matteo",
        "cognome": "Zanfini",
        "età": 21
    },

    {
        "nome": "Martina",
        "cognome": "Bianchi",
        "età": 23
    },

    {
        "nome": "Alessio",
        "cognome": "Verdi",
        "età": 22
    },

    {
        "nome": "Giovanni",
        "cognome": "Giallini",
        "età": 23
    },

]

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
for (var i = 0; i < studentsList.length; i++) {
  var student = studentsList[i];
  console.log(student.nome + " " + student.cognome);
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var insertFirstName = prompt("Inserisci nome");
var insertLastName = prompt("Inserisci cognome");
var insertAge = parseInt(prompt("Inserisci età"));

var newStudent = {
    "nome": insertFirstName,
    "cognome": insertLastName,
    "età": insertAge
}

// inserisco nuovo studente nella lista
studentsList.push(newStudent);

console.log(studentsList);
