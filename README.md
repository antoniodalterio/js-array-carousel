Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

1. creare una variabile array per contenere le immagini.

2) creare una variabile "Items" e selezionare l'elemento all'interno del html.

3) formare un ciclo lungo quanto la larghezza del array creato in precedenza.
   - creare un elemento html "div" e assegnare la classe "item"
   - appendere o inserire l'elemento alla variabile "items"
   - creare una classe "img" e appenderlo all'elemento div creato con classe "item"
   - associare all'img un'immagine tramite la variabile array.img/01.jpg

MILESTONE 2
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

1. creare una funzione che al click della freccia in su l'immagine torna a quella precedente

   - se currentItem decrementa
   - active viene eliminata dall'elemento attuale
   - passa all'elemento precedente

2. creare una funzione che al click della freccia in giu l'immagine passa alla successiva

   - se currentItem incrementa
   - active viene eliminata dall'elemento attuale
   - passa all'elemento successivo

3. creare variabile "currentItem" che assegna la classe "active" alla variabile "item"

4) creare una variabile che seleziona tutti gli elementi con classe "items"

# BONUS 1:

Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

1. creare una condizione loop avanti.

   - ALTRIMENTI SE la currentItem è uguale all'ultima immagine della nodeselection "allItem"
     - currenteItem è uguale alla prima immagine della nodeselection "allItem"

2)  creare una condizione loop indietro

- ALTRIMENTI SE la currentItem è uguale alla prima immagine della nodeselection "allItem"
  - currenteItem è uguale all'ultima immagine della nodeselection "allItem"

# BONUS 2:

Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
BONUS 3:
Al click sulla thumbnail, viene visualizzata l'immagine selezionata;
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:

1. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
2. Al momento giusto rispondete a questa domanda: "Quanti cicli servono?"
   Buon lavoro, buon weekend e buon divertimento! :faccia_leggermente_sorridente:
