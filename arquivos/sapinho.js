var c = document.getElementById("tela");
var context = c.getContext("2d");

function desenhaMapinha() {
  context.fillStyle = "#302f27";
  context.fillRect(0, 0, 442, 476);
  context.fillStyle = "#1d0087";
  context.fillRect(0, 68, 442, 170);
  context.drawImage(fim, 0, 51, 442, 54);
  context.drawImage(planta , 15,70);
  context.drawImage(planta , 110,70);
  context.drawImage(planta , 205,70);
    context.drawImage(planta , 300,70);
    context.drawImage(planta , 390,70);


  context.drawImage(ground, 0, 238, 445, 34);
  context.drawImage(ground, 0, 408, 445, 34);
}

function desenhaTextinho() {
  context.font = "30px Arial";
  context.fillStyle = "#ffe200";
  context.fillText("Level: " + level, 20, 35);
  context.fillText("Score: " + score, 290, 35);
  context.fillText("Time: " + time, 20, 470);
  context.fillText("Live: " + vidas, 300, 470);
  if (!run) {
    context.fillText("GAME OVER", 60, 340);
  }
}

function desenhaSapo() {
  context.save();
  context.translate(posX, posY);
  context.rotate(90 * side * Math.PI / 180);
  if (animSapo > 6) {
    context.drawImage(sapo, -24 / 2, -24 / 2, 24, 24);
  } else {
    context.drawImage(sapoAni, -24 / 2, -24 / 2, 24, 24);
  }
  context.restore();
  animSapo++;
}

function desenhaSapoCerto() {
  for (a = 0; a < 5; a++) {
    if (posCerto[5 + a] == 1) {
      context.drawImage(sapoFinal, sapGanhou[a] + 7, 70, 32, 30);
    }
  }
}

function desenhaArvore() {
  for (a = 2; a < 5; a++) {
    context.drawImage(arvore, arvoreInfo[0][a], arvoreInfo[0][0]);
  }
  for (a = 2; a < 4; a++) {
    context.drawImage(arvore, arvoreInfo[1][a], arvoreInfo[1][0]);
  }
}

function desenhaCar() {
  for (a = 2; a < 5; a++) {
    context.drawImage(carro1, carInfo[0][a], carInfo[0][0]);
    context.drawImage(carro2, carInfo[1][a], carInfo[1][0]);
  }
  for (a = 2; a < 4; a++) {
    context.drawImage(carro3, carInfo[2][a], carInfo[2][0]);
    context.drawImage(carro4, carInfo[3][a], carInfo[3][0]);
  }
}

function desenhaTartTres() {
  for (a = 2; a < 5; a++) {
    if (tarViva[0]) {
      context.drawImage(tartaruga_tres[animTartOrdem[0]], tarInfo[0][a],
                        tarInfo[0][0]);
    }
  }
}

function desenhaTartDois() {
  for (a = 2; a < 4; a++) {
    if (tarViva[1]) {
      context.drawImage(tarDupla[animTartOrdem[1]], tarInfo[1][a],
                        tarInfo[1][0]);
    }
  }
}

var level = 1;
var vidas = 3;
var time = 30;
var seconds = 0;
var score = 0;
var aumenSpeed = 0.1;

var posX = 221;
var posY = 425;
var side = 1;
var run = true;

var naAgua = true;
var noTopo = true;

sapo = new Image();
sapoAni = new Image();
sapoFinal = new Image();
ground = new Image();
fim = new Image();
planta = new Image();
carro1 = new Image();
carro2 = new Image();
carro3 = new Image();
carro4 = new Image();
arvore = new Image();
tartaruga_tres = [
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image()
];
tarDupla = [
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image()
];

sapo.src = "sapo1.png";
sapoAni.src = "sapo2.png";
sapoFinal.src = "sapo3.png";
ground.src = "ground.png";
fim.src = "fim.png";
carro1.src = "car1.png";
carro2.src = "car2.png";
carro3.src = "car3.png";
carro4.src = "car4.png";
arvore.src = "arvore.png";
planta.src = "planta.png";
tartaruga_tres[0].src = "t1.png";
tartaruga_tres[1].src = "t2.png";
tartaruga_tres[2].src = "t3.png";
tartaruga_tres[3].src = "t4.png";
tartaruga_tres[4].src = "t5.png";
tartaruga_tres[5].src = "t4.png";
tartaruga_tres[6].src = "t3.png";
tartaruga_tres[7].src = "t2.png";
tartaruga_tres[8].src = "t1.png";

tarDupla[0].src = "d1.png";
tarDupla[1].src = "d2.png";
tarDupla[2].src = "d3.png";
tarDupla[3].src = "d4.png";
tarDupla[4].src = "d5.png";
tarDupla[5].src = "d4.png";
tarDupla[6].src = "d3.png";
tarDupla[7].src = "d2.png";
tarDupla[8].src = "d1.png";

var animSapo = 31;
var posCerto = [ 23, 117, 211, 303, 400, 0, 0, 0, 0, 0 ];
var sapGanhou = [ 8, 100, 194, 286, 383 ];

var carInfo = [
  [ 374, 1, 147.3, 294.6, 441.9 ],
  [ 340, -1, 158, 316, 476 ],
  [ 306, 1.3, 221, 442 ],
  [ 272, -1.3, 221, 442 ]
];

var arvoreInfo = [ [ 209.5, 1.6, 70, 256, 442 ], [ 141.5, 0.9, 163, 442 ] ];

var tarInfo = [ [ 170, -0.9, 70, 256, 442 ], [ 102, -1.6, 163, 442 ] ];
var animTart = [ 8, 60 ];
var animTartOrdem = [ 0, 0 ];
var tarViva = [ true, true ];

function calculaAvore() {
  for (a = 2; a < 5; a++) {
    arvoreInfo[0][a] += arvoreInfo[0][1];
    if (arvoreInfo[0][a] > 442) {
      arvoreInfo[0][a] = -116;
    }
  }
  for (a = 2; a < 4; a++) {
    arvoreInfo[1][a] += arvoreInfo[1][1];
    if (arvoreInfo[1][a] > 442) {
      arvoreInfo[1][a] = -116;
    }
  }
}

function calculaTart() {
  for (a = 2; a < 5; a++) {
    tarInfo[0][a] += tarInfo[0][1];
    if (tarInfo[0][a] < -116) {
      tarInfo[0][a] = 442;
    }
  }
  for (a = 2; a < 4; a++) {
    tarInfo[1][a] += tarInfo[1][1];
    if (tarInfo[1][a] < -116) {
      tarInfo[1][a] = 442;
    }
  }
}

function calculaCar() {
  for (a = 2; a < 5; a++) {
    carInfo[0][a] += carInfo[0][1];
    if (carInfo[0][a] > 442) {
      carInfo[0][a] = -36;
    }
  }
  for (a = 2; a < 5; a++) {
    carInfo[1][a] -= carInfo[0][1];
    if (carInfo[1][a] < -34) {
      carInfo[1][a] = 442;
    }
  }
  for (a = 2; a < 4; a++) {
    carInfo[2][a] += carInfo[0][1];
    if (carInfo[2][a] > 442) {
      carInfo[2][a] = -36;
    }
  }
  for (a = 2; a < 4; a++) {
    carInfo[3][a] -= carInfo[0][1];
    if (carInfo[3][a] < -34) {
      carInfo[3][a] = 442;
    }
  }
}

function animaTart() {
  animTart[0]++;
  animTart[1]++;
  for (a = 0; a < 11; a++) {
    if ((animTart[1] / 25) > a && a <= 8) {
      animTartOrdem[1] = a;
      tarViva[1] = true;
    } else if (a >= 9 && ((animTart[1] / 25) > a)) {
      tarViva[1] = false;
    }
  }
  for (a = 0; a < 11; a++) {
    if ((animTart[0] / 25) > a && a <= 8) {
      animTartOrdem[0] = (a);
      tarViva[0] = true;
    } else if (a >= 9 && ((animTart[0] / 25) > a)) {
      tarViva[0] = false;
    }
  }
  if (animTart[0] > 275) {
    animTart[0] = 0;
  }
  if (animTart[1] > 275) {
    animTart[1] = 0;
  }
}

function update() {
  if (run) {
    getTime();
    desenhaMapinha();
    desenhaCar();
    desenhaArvore();
    desenhaSapoCerto();
	animaTart();
    desenhaTartTres();
    desenhaTartDois();
    desenhaSapo();
    calculaAvore();
    calculaCar();
    calculaTart();
    desenhaTextinho();
    checkPosition();
    gameOver();
  } else {
    desenhaMapinha();
    desenhaTextinho();
  }
}

function getTime() {
  seconds++;
  if (seconds > 60) {
    seconds = 0;
    time--;
  }
  if (time <= 0) {
    menosVida();
  }
}

function checkPosition() {
  checkCar();
  checkArvore();
  checkTart();
  noTopo = true;
  for (a = 0; a < 5; a++) {
    if (posX >= posCerto[a] && posX <= (posCerto[a] + 15.6) && posY == 85 &&
        posCerto[5 + a] == 0) {
      posCerto[5 + a] = 1;
      noTopo = false;
      winScore();
    }
  }
  if (posX <= 0 || posX >= 476 || (noTopo && posY == 85) ||
      (naAgua && (posY < 255 && posY > 85))) {
    menosVida()
  }
}

function checkArvore() {
  naAgua = true;
  for (a = 2; a < 5; a++) {
    var somaX = (arvoreInfo[0][a] + 58) - posX;
    if (somaX < 0) {
      somaX *= (-1);
    }
    var somaY = (arvoreInfo[0][0] + 11.5) - posY;
    if (somaY == 0 && somaX < 60) {
      naAgua = false;
      posX += ((posX + arvoreInfo[0][1]) - posX);
    }
  }
  for (a = 2; a < 4; a++) {
    var somaX = (arvoreInfo[1][a] + 58) - posX;
    if (somaX < 0) {
      somaX *= (-1);
    }
    var somaY = (arvoreInfo[1][0] + 11.5) - posY;
    if (somaY == 0 && somaX < 60) {
      naAgua = false;
      posX += ((posX + arvoreInfo[1][1]) - posX);
    }
  }
}

function checkTart() {
  for (a = 2; a < 5; a++) {
    var somaX = (tarInfo[0][a] + 58) - posX;
    if (somaX < 0) {
      somaX *= (-1);
    }
    var somaY = (tarInfo[0][0] + 17) - posY;
    if (somaY == 0 && somaX < 60) {
      naAgua = false;
      posX += ((posX + tarInfo[0][1]) - posX);
    }
  }
  for (a = 2; a < 4; a++) {
    var somaX = (tarInfo[1][a] + 30) - posX;
    if (somaX < 0) {
      somaX *= (-1);
    }
    var somaY = (tarInfo[1][0] + 17) - posY;
    if (somaY == 0 && somaX < 60) {
      naAgua = false;
      posX += ((posX + tarInfo[1][1]) - posX);
    }
  }
}

function checkCar() {
  for (a = 0; a < 2; a++) {
    for (b = 2; b < 5; b++) {
      var somaX = (carInfo[a][b] + 17) - posX;
      var somaY = (carInfo[a][0] + 17) - posY;
      if (Math.sqrt((somaX * somaX) + (somaY * somaY)) < 20) {
        menosVida();
      }
    }
  }
  for (a = 2; a < 4; a++) {
    for (b = 2; b < 4; b++) {
      var somaX = (carInfo[a][b] + 17) - posX;
      var somaY = (carInfo[a][0] + 17) - posY;
      if (Math.sqrt((somaX * somaX) + (somaY * somaY)) < 20) {
        menosVida();
      }
    }
  }
}

function changeLevel() {
  for (a = 0; a < 4; a++) {
    if (carInfo[a][1] > 0) {
      carInfo[a][1] += aumenSpeed;
    } else {
      carInfo[a][1] -= aumenSpeed;
    }
  }
  for (a = 0; a < 2; a++) {
    arvoreInfo[a][1] += aumenSpeed;
    tarInfo[a][1] += aumenSpeed;
  }
  for (a = 0; a < 5; a++) {
    posCerto[5 + a] = 0;
  }

  level++;
}

function menosVida() {
  posY = 425;
  posX = 221;
  side = 1;
  time = 30;
  vidas--;
}

function winScore() {
  var check = true;
  for (a = 5; a < 10; a++)
    if (posCerto[a] != 1) {
      check = false;
    }

  if (check) {
    changeLevel();
  }

  score += 10;
  posY = 425;
  posX = 221;
  side = 1;
  time = 30;
}

function gameOver() {
  if (vidas < 1) {
    run = false;
  }
}

window.onkeydown = function(b) {
  var key = b.keyCode ? b.keyCode : b.which;

  if (key == 37 && run) {
    side = 0;
    posX -= 34;
    animSapo = 0;
  }
  if (key == 38 && run) {
    side = 1;
    posY -= 34;
    animSapo = 0;
  }
  if (key == 39 && run) {
    side = 2;
    posX += 34;
    animSapo = 0;
  }
  if (key == 40 && run) {
    side = 3;
    posY += 34;
    animSapo = 0;
  }
}

sapo.onload = function() { setInterval(update, 35); }