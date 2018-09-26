$(function () {
  $('#calc').click(function () {
    var h = $('#height').val(),
        w = $('#weight').val(),
        a = $('#age').val(),
        s = $('#sex').val();

  if (h=='' || w=='' || a=='') {
    alert('請輸入您的性別、身高(公尺)、體重(公斤)和年齡！');
  } else if ( h>3 ) {
    alert('身高請輸入公尺單位！');
  }else if (a <= 0) {
    alert('請輸入大於等於一歲的年齡！');
  }else {
    var bmi = w/(h*h);
    $('#bmiresult').val(bmi);

    var bodyfat =( 1.2*bmi )+( 0.23*a-5.4 )-(10.8*s);
    $('#bodyfatresult').val(bodyfat)
  };
});

  $('#reset').click(function () {
    window.location.reload("https://brianwu291.github.io/lession11/index02.html");
  });
});
