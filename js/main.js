'use strict';

// Dichiarazioni variabili
const images = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg',
];
const items = document.querySelector('.items');

// Ciclo for conteggio = larghezza Array(images)
for (let i = 0; i < images.length; i++) {
  // elemento creato div
  const div = document.createElement('div');
  div.classList.add('item');

  items.append(div);

  // elemento creato img
  const img = document.createElement('img');
  div.append(img);
  img.src = images[i];
}
