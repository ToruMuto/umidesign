// ハンバーガーメニューをクリックした時
$('.hamburger').on('click', function () {
  // ハンバーガーメニューの共通処理を呼び出す
  hamburger();
});
// メニューのリンクをクリックした時
$('.header_list a').on('click', function () {
  // ハンバーガーメニューの共通処理を呼び出す
  hamburger();
});
/*=================================================
ハンバーガ―メニュー共通処理
===================================================*/
// ハンバーガーメニューをクリックした時とメニュー内のリンクをクリックした時の
// 処理が同じなので処理を共通化する
function hamburger() {
  // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  $('.hamburger').toggleClass('active');
  if ($('.hamburger').hasClass('active')) {

    $('.header_list2').addClass('active');
    $('.header_list').delay(200).queue(function (next) {
      $(this).addClass('active');
      next();
    });
    $('.menu').delay(500).queue(function (next) {
      $(this).addClass('active');
      next();
    });
  } else {

    $('.menu').removeClass('active');
    $('.header_list').delay(300).queue(function (next) {
      $(this).removeClass('active');
      next();
    });
    $('.header_list2').delay(500).queue(function (next) {
      $(this).removeClass('active');
      next();
    });
  }
}

// ======================================
// form
const btn = document.querySelector('.btn');


btn.addEventListener('click', function () {
  // company==========================
  val = document.forms['form'].elements['company'].value;
  const company = new add_fp1('.company .fp1');
  company.toggle_on();
  // name================================
  val = document.forms['form'].elements['name'].value;
  const namae = new add_fp1('.name .fp1');
  namae.toggle_on();
  // tel================================
  val = document.forms['form'].elements['tel'].value;
  const tel = new add_fp1('.tel .fp1');
  tel.toggle_on();
  // not_tel================================
  const not_tel = new add_fp1('.tel .fp_tel');
  val1 = document.forms['form'].elements['tel'].value;
  reg = /^0[789]0-[0-9]{4}-[0-9]{4}$/;
  not_tel.toggle_on2();
  // mail================================
  val = document.forms['form'].elements['mail'].value;
  const mail = new add_fp1('.mail .fp1');
  mail.toggle_on();
  // not_mail================================
  const not_mail = new add_fp1('.mail .fp_mail');
  val1 = document.forms['form'].elements['mail'].value;
  reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
  not_mail.toggle_on2();
  // textarea================================
  val = document.forms['form'].elements['message'].value;
  const textarea = new add_fp1('.form_textarea .fp1');
  textarea.toggle_on();

  const fp3 = new add_fp1('.form_bottom .fp3');
  fp3.toggle_on3();
})


class add_fp1 {
  constructor(el) {
    this.el = document.querySelector(el);
  }
  toggle_on() {
    if (val == "") {
      //値が空の場合
      this.el.classList.add('error');  //エラーメッセージを出力
      return false;    //送信ボタン本来の動作をキャンセルします
    } else {
      //値が入力されている場合
      this.el.classList.remove('error');
      return true;    //送信ボタン本来の動作を実行します
    }
  }

  toggle_on2() {
    if (reg.test(val1)) {
      //値が正しいの場合
      this.el.classList.remove('error');  //エラーメッセージを解除
      return false;    //送信ボタン本来の動作をキャンセルします
    } else {
      //値が間違っている場合
      this.el.classList.add('error');//エラーメッセージを出力
      return true;    //送信ボタン本来の動作を実行します
    }
  }
  toggle_on3() {
    if ($('.fp1').hasClass('error') ||
      $('.fp2').hasClass('error') ||
      $('.fp_tel').hasClass('error') ||
      $('.fp_mail').hasClass('error')) {
      //値が空の場合
      this.el.classList.add('error');  //エラーメッセージを出力
      return false;    //送信ボタン本来の動作をキャンセルします
    } else {
      //値が入力されている場合
      this.el.classList.remove('error');
      return true;    //送信ボタン本来の動作を実行します
    }
  }
}


// ===============================================
// slick

const windowWidth = $(window).width();
const windowSp = 750;

if (windowWidth <= windowSp) {
  //   // ウィンドウサイズが 750px以下の場合のコードをここに

  $('.slick').on('afterChange', function () {
    let left = document.querySelector('.slick-current');
    let center = left.nextElementSibling;


    left.classList.remove('center', 'right');

    center.classList.add('right');
    center.classList.remove('center');
  });
} else {
  //   // ウィンドウサイズが 750px以上の場合のコードをここに
  $('.slick').on('afterChange', function () {

    let left = document.querySelector('.slick-current');
    let center = left.nextElementSibling;
    let right = center.nextElementSibling;

    left.classList.remove('center', 'right');

    center.classList.add('center');
    center.classList.remove('right');

    right.classList.add('right');
    right.classList.remove('center');

  });
}




// =======================================
// アニメーション
// =======================================
$(function () {
  $('.header_bottom_text h1').on('inview', function () {
    //表示領域に入った時
    $(this).addClass('slideup');
  });

  $('.header_bottom_text p').on('inview', function () {
    //表示領域に入った時
    $(this).addClass('slideup');
  });

  $('.title').on('inview', function () {
    $(this).addClass('slideup');
  });

  $('.work_circle').on('inview', function () {
    $(this).addClass('scale');
    $('.work_img').delay(200).queue(function (next) {
      $(this).addClass('scale');
      next();
    });
  });

  $('.design_text').on('inview', function () {
    $(this).addClass('slideup');
  });

  $('.ft1').on('inview', function () {
    $(this).delay(1000).queue(function (next) {
      $(this).addClass('under_line');
      next();
    });
    $('.ft1 img').delay(1300).queue(function (next) {
      $(this).addClass('slideup');
      next();
    });
    $('.ftt1').delay(1400).queue(function (next) {
      $(this).addClass('slideup');
      next();
    });
  });
  $('.ft2').on('inview', function () {
    $(this).delay(1000).queue(function (next) {
      $(this).addClass('under_line');
      next();
    });
    $('.ft2 img').delay(1300).queue(function (next) {
      $(this).addClass('slideup');
      next();
    });
    $('.ftt2').delay(1400).queue(function (next) {
      $(this).addClass('slideup');
      next();
    });
  });
  $('.ft3').on('inview', function () {
    $(this).delay(1000).queue(function (next) {
      $(this).addClass('under_line');
      next();
    });
    $('.ft3 img').delay(1300).queue(function (next) {
      $(this).addClass('slideup');
      next();
    });
    $('.ftt3').delay(1400).queue(function (next) {
      $(this).addClass('slideup');
      next();
    });
  });

});

const mailfa = document.querySelector('.mail');
mailfa.addEventListener('mouseover', function () {
  document.querySelector('i').classList.add('my-color');
})
mailfa.addEventListener('mouseout', function () {
  document.querySelector('i').classList.remove('my-color');
})

//ワーク説明文の動き
function work_text(wc, ex) {
  document.querySelector(wc).addEventListener('click', function () {
    if ($(ex).not('ex_fade')) {
      $(ex).addClass('ex_fade');
      $('.work_ex_wrap').addClass('ex_wrap_fade');
    } else {
    }
  });
  document.querySelector('.work_ex_wrap').addEventListener('click', function () {
    $(this).removeClass('ex_wrap_fade');
    $(ex).removeClass('ex_fade');
  });
};

// const wcv = ['.wc1, .work_ex_website', '.wc2, .work_ex_wordpress', '.wc3, .work_ex_lp', '.wc4, .work_ex_webconsul', '.wc5, .work_ex_poster', '.wc6, .work_ex_panf', '.wc7, .work_ex_dm', '.wc8, .work_ex_il'];



// console.log(wcv[1]);
// work_text(wcv[0]);
// work_text(wcv[1]);
// work_text(wcv[2]);
// work_text(wcv[3]);
// work_text(wcv[4]);
// work_text(wcv[5]);
// work_text(wcv[6]);
// work_text(wcv[7]);


const wc1 = '.wc1';
const wc2 = '.wc2';
const wc3 = '.wc3';
const wc4 = '.wc4';
const wc5 = '.wc5';
const wc6 = '.wc6';
const wc7 = '.wc7';
const wc8 = '.wc8';
const website = '.work_ex_website';
const wordpress = '.work_ex_wordpress';
const lp = '.work_ex_lp';
const webconsul = '.work_ex_webconsul';
const poster = '.work_ex_poster';
const panf = '.work_ex_panf';
const dm = '.work_ex_dm';
const il = '.work_ex_il';

work_text(wc1, website);
work_text(wc2, wordpress);
work_text(wc3, lp);
work_text(wc4, webconsul);
work_text(wc5, poster);
work_text(wc6, panf);
work_text(wc7, dm);
work_text(wc8, il);


// -----------------------------------------
// 波の動き
// -----------------------------------------

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("wave-item-01");
    canvas.width = 2000;
    //Canvasのwidthをウィンドウの幅に合わせる
    canvas.height = 90;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);//与えられた数値以下の最大の整数を返す
    yAxis = 0;
    draw();
  }
  function draw() {
    // clearRect(x, y, w, h)は四角形の形状に切り抜かれて透明になります
    //x,yは要素左上端からの距離で、w,hは四角形の幅と高さ
    context.clearRect(0, 0, width, height);
    //波を描画 下で定義
    drawWave("#fff", 1, 3, 0);
    // Update the time and draw again
    draw.seconds = draw.seconds + 0.008;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  // drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();//パスの開始
    drawSine(draw.t / 0.5, zoom, delay);//下で定義
    context.lineTo(width + 10, height);//パスをCanvasの右下へ
    context.lineTo(0, height);//パスをCanvasの左下へ
    context.closePath();//パスを閉じる
    context.fill();//塗りつぶす
  }
  //drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
  function drawSine(t, zoom, delay) {
    var x = t;//時間を横の位置とする
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);//スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

// gray
(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init_gray() {
    canvas = document.getElementById("wave-item-02");
    canvas.width = 2000;
    canvas.height = 90;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#edf2f4", 1, 3, 0);
    draw.seconds = draw.seconds + 0.0065;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init_gray();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("wave-item-03");
    canvas.width = 2000;
    canvas.height = 90;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#fff", 1, 3, 0);
    draw.seconds = draw.seconds + 0.008;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("wave-item-04");
    canvas.width = 2000;
    canvas.height = 90;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#fff", 1, 3, 0);
    draw.seconds = draw.seconds + 0.008;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("wave-item-05");
    canvas.width = 2000;
    canvas.height = 90;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#fff", 1, 3, 0);
    draw.seconds = draw.seconds + 0.0065;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("wave-item-06");
    canvas.width = 2000;
    canvas.height = 90;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#fff", 1, 3, 0);
    draw.seconds = draw.seconds + 0.0065;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();

(function () {
  /* prettier-ignore */
  var unit = 100, canvas, context, canvas2, context2, height, width, xAxis, yAxis, draw;
  // white
  function init() {
    canvas = document.getElementById("wave-item-07");
    canvas.width = 2000;
    canvas.height = 90;
    context = canvas.getContext("2d");
    height = canvas.height;
    width = canvas.width;
    xAxis = Math.floor(height / 2);
    yAxis = 0;
    draw();
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    drawWave("#edf2f4", 1, 3, 0);
    draw.seconds = draw.seconds + 0.0065;
    draw.t = draw.seconds * Math.PI;
    setTimeout(draw, 35);
  }
  draw.seconds = 0;
  draw.t = 0;
  function drawWave(color, alpha, zoom, delay) {
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(draw.t / 0.5, zoom, delay);
    context.lineTo(width + 10, height);
    context.lineTo(0, height);
    context.closePath();
    context.fill();
  }
  function drawSine(t, zoom, delay) {
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (i = yAxis; i <= width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
})();





// =====================================
// 練習
// =====================================
