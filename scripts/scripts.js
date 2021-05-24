///<reference path="../library/JQuery/typings/globals/jquery/index.d.ts" />
window.onload = function() {
  SoundBtn();
  loading();
  modal();
  slide();
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

var isBtn = true;
function SoundBtn(){
  document.getElementById('SoundBtn').addEventListener('click',function(){
    const audio = document.getElementById('sound-file');
    if(!isBtn){
      document.getElementById('SoundBtn-text').textContent='ON'; 
      audio.play();
      audio.volume=0.5
      isBtn = true;
    }else if(isBtn === true){
      document.getElementById('SoundBtn-text').textContent='OFF';
      audio.pause();
      audio.volume=0.5
      isBtn = false;
    }
  });
}

function modal(){
  $('.open').click(function(){
    const bgm = document.getElementById('sound-file');
    document.getElementById('SoundBtn-text').textContent='OFF';
    bgm.pause();
    $('.modal').fadeIn();
    $('.mask').fadeIn();
  });
  $('.close').click(function(){
    $('.modal').fadeOut();
    $('.mask').fadeOut();
  });
}

function slide(){
  var slideCurrent = 0;
  const slideWidth = $('.slide').outerWidth();
  const slideNum = $('.slide').length;
  const slideSetWidth = slideWidth * slideNum;
  $('.slideSet').css('width',slideSetWidth);

  const sliding = function(){
    if( slideCurrent < 0 ){
      slideCurrent = slideNum - 1;
    }else if( slideCurrent > slideNum - 1){ 
      slideCurrent = 0;
    }

    $('.slideSet').animate({
      left: slideCurrent * -slideWidth
    });
  }

  $('.slider-prev').click(function(){
    slideCurrent--;
    sliding();
  });
  $('.slider-next').ready(function(){
    $('.slider-next').click(function(){
      slideCurrent++;
      sliding();
    })
    setInterval(() => {
      slideCurrent++;
      sliding();
    }, 10000);
  })
}