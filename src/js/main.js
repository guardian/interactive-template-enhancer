var container = document.createElement('div');
container.className = 'gv-loop';

var containerInner = document.createElement('div');
containerInner.className = 'gv-loop-inner';

var el = document.querySelector('header.content__head.content__head--interactive .gs-container, .android .article__header');

if(el){
  el.appendChild(container);
  container.appendChild(containerInner);
}
