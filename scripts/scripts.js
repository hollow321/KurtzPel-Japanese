///<reference path="../library/JQuery/typings/globals/jquery/index.d.ts" />
window.onload = function() {
  load();
  audio();
}

function load(){
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

function audio(){
  const audio = document.getElementById('sound-file');
  audio.volume= 0.5;
}