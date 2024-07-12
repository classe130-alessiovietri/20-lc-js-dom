// const myTitle = document.getElementById('main-title');
// console.log('myTitle', myTitle, typeof myTitle);

const myTitle = document.querySelector('h1');

myTitle.innerHTML = 'Ciao raghi';

console.log('myTitle', myTitle, typeof myTitle);
console.log('myTitle.outerHTML', myTitle.outerHTML, typeof myTitle.outerHTML);

console.log('myTitle.classList', myTitle.classList, typeof myTitle.classList);
console.log('myTitle.className', '-> ' + myTitle.className + ' <-', typeof myTitle.className);

// myTitle.className = myTitle.className + 'bordered';
// myTitle.className += ' bordered';

// myTitle.innerHTML = myTitle.innerHTML + '!';
myTitle.innerHTML += '!'

myTitle.style.color = 'blue';
myTitle.style.backgroundColor = 'greenyellow';


const infoForm = document.querySelector('form');
infoForm.addEventListener(
    'submit',          // 1° argomento: evento da ascoltare/intercettare
    function (event) { // 2° argomento: definizione di una funzione anonima che verrà eseguita solo quando si verificherà l'evento sull'elemento 
        /* 
            Blocco di codice da eseguire quando si verifica l'evento selezionato
        */
       
        console.log('event', event, typeof event);

        event.preventDefault();

        const nameInput = document.getElementById('name');
        // console.log('nameInput', nameInput, typeof nameInput);
        console.log('nameInput.value', nameInput.value, typeof nameInput.value);

        const ageInput = document.getElementById('age');
        // console.log('ageInput', ageInput, typeof ageInput);
        console.log('ageInput.value', ageInput.value, typeof ageInput.value);
    }
);

const uselessButton = document.querySelector('h1 + button');
uselessButton.addEventListener('click', function () {
    // if (myTitle ha la classe bordered) {
    // if (myTitle.classList.contains('bordered')) {
    //     myTitle.classList.remove('bordered');
    // }
    // else {
    //     myTitle.classList.add('bordered');
    // }
    /* OPPURE */
    // myTitle.classList.toggle('bordered');

    const uselessContainer = document.getElementById('useless-container');
    // uselessContainer.innerHTML += '<p>Un altro lorem ipsum</p>';
    /* NON E' LA STESSA COSA DI: */
    uselessContainer.append('<p>Un altro lorem ipsum</p>');
});

/* 

    questoEUnNome     -> variabile

    questoEUnAltroNome()    -> funzione

    questoEUnAltroNome(a, b, c)    -> funzione con 3 argomenti (a, b e c)

    function() {}           -> funzione ANONIMA

*/