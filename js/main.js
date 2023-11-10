'use strict';

const images = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg',
];
const items = document.querySelector('.items');

for (let i = 0; i < images.length; i++) {
  const div = document.createElement('div');
  items.append(div);
  div.classList.add('item');
  const img = document.createElement('img');
  div.append(img);
  img.src = images[i];
}
