///<reference path="../library/JQuery/typings/globals/jquery/index.d.ts" />
window.onload = function() {
  audio();
  loading();
}

function loading(){
  const spinner = document.getElementById('loading');
  const logo = document.getElementById('loaded-logo');
  window.setTimeout(function(){
    spinner.classList.add('loaded');
  },3000);
  window.setTimeout(function(){
    logo.classList.add('loaded');
  },5000);
}
function audio(){
  const audio = document.getElementById('sound-file');
  audio.volume= 0.5;
}