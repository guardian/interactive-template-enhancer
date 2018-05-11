var container = document.createElement('div');
container.className = 'gv-loop';

var containerInner = document.createElement('div');
containerInner.className = 'gv-loop-inner';

var el = document.querySelector('header.content__head.content__head--interactive .gs-container, .article__header');
console.log(el)
if(el){
  el.appendChild(container);
  container.appendChild(containerInner);
}