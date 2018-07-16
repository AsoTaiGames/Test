use strict;

var canvas, ctx;
var img_player;
var img_enemy;

// ページロード時に呼び出される処理
window.onload = function(){
  canvas = document.getElementById('screen');
  ctx = canvas.getContext('2d');

  /*
  ctx.fillStyle = '#fff';
  ctx.fillRect(8, 5, 20, 30);

  ctx.strokeStyle = '#f00';
  ctx.strokeRect(40, 55, 90, 10);
  */

  img_player = document.getElementById('player');
  img_enemy = document.getElementById('enemy');

  ctx.drawImage(img_player, 20, 50);
  ctx.drawImage(img_enemy,
                Math.random()*canvas.width,
                Math.random()*canvas.height);
};
