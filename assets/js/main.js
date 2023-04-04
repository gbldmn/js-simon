// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Visualizzare in pagina 5 numeri casuali

let box = document.querySelector('.box');
console.log(box)

let array = [];

function numeriRandom(){
     let b = Math.floor( Math.random() * 100 )-1
     return b
}

//let numeri = numeriRandom();

box.innerHTML = 'i numeri sono';
for (i=0; i<5; i++) {
     let numero_rand = numeriRandom();
     array.push(numero_rand);
     //let risultato = 
     box.innerHTML += ` ${numero_rand}`;
     console.log(numero_rand)
}

console.log(array)
let tempo = setTimeout( function(){
     console.log('ciao')
     
     box.innerHTML = '';

     // convalida = [];
     // convalida.push(parseInt(prompt('inserisci primo numero')));
     // convalida.push(parseInt(prompt('inserisci secondo numero')));
     // convalida.push(parseInt(prompt('inserisci terzo numero')));
     // convalida.push(parseInt(prompt('inserisci quarto numero')));
     // convalida.push(parseInt(prompt('inserisci quinto numero')));
     
     // let quali = [];
     
     // for (i=0; i<5; i++) {
     //      if (array[i] == convalida[i])
     //           quali.push(array[i])
     // }
     
     // let quanti = quali.length;
     // box.innerHTML = `i numeri sono ${quanti} e sono ${quali}`;
     
     

},5000 )

let tempo2 = setTimeout( function(){

      convalida = [];
      convalida.push(parseInt(prompt('inserisci primo numero')));
      convalida.push(parseInt(prompt('inserisci secondo numero')));
      convalida.push(parseInt(prompt('inserisci terzo numero')));
      convalida.push(parseInt(prompt('inserisci quarto numero')));
      convalida.push(parseInt(prompt('inserisci quinto numero'))); 



      
      let quali = [];
     
      for (i=0; i<5; i++) {
           if (array[i] == convalida[i])
                quali.push(array[i])
      }
     
      let quanti = quali.length;
           if(quanti = quali.length) {
          box.innerHTML = `la quantita  numeri che hai preso e: ${quanti} e sono ${quali}`;
     } else {
          box.innerHTML = 'mi dispiace non hai una buona memoria!';
     }

     

},6000)

     
