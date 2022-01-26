//시작시
var mode = 0;
var save = 0;
if(window.matchMedia('(orientation: portrait)').matches) { //세로
  $("body > *:nth-child(2)").animate({
    top: 5,
    left: -350
  }, 500);
  $("body > *:nth-child(3)").animate({
    top: 0,
    left: 210
  }, 500);
  $("body > *:nth-child(10)").animate({
    top: 35,
    left: 0
  }, 500);
  $("body > *:nth-child(11)").animate({
    top: 35,
    left: 70
  }, 500);
  $("body > *:nth-child(12)").animate({
    top: 35,
    left: 140
  }, 500);
  $("body > *:nth-child(13)").animate({
    top: 35,
    left: 210
  }, 500);
  $("body > *:nth-child(20)").animate({
    top: 70,
    left: 0
  }, 500);
  $("body > *:nth-child(21)").animate({
    top: 70,
    left: 70
  }, 500);
  $("body > *:nth-child(22)").animate({
    top: 70,
    left: 140
  }, 500);
  $("body > *:nth-child(23)").animate({
    top: 70,
    left: 210
  }, 500);
  $("body > *:nth-child(30)").animate({
    top: 105,
    left: 0
  }, 500);
  $("body > *:nth-child(31)").animate({
    top: 105,
    left: 70
  }, 500);
  $("body > *:nth-child(32)").animate({
    top: 105,
    left: 140
  }, 500);
  $("body > *:nth-child(33)").animate({
    top: 105,
    left: 210
  }, 500);
  $("body > *:nth-child(40)").animate({
    top: 140,
    left: 0
  }, 500);
  $("body > *:nth-child(41)").animate({
    top: 140,
    left: 70
  }, 500);
  $("body > *:nth-child(42)").animate({
    top: 140,
    left: 140
  }, 500);
  $("body > *:nth-child(43)").animate({
    top: 140,
    left: 210
  }, 500);
  $("body > *:nth-child(50)").animate({
    top: 175,
    left: 0
  }, 500);
  $("body > *:nth-child(51)").animate({
    top: 175,
    left: 140
  }, 500);
  $("body > *:nth-child(52)").animate({
    top: 175,
    left: 210
  }, 500);
} else { //가로
  $("body > *:nth-child(2)").animate({
    top: 5,
    left: 50
  }, 500);
  $("body > *:nth-child(3)").animate({
    top: 0,
    left: 630
  }, 500);
  $("body > *:nth-child(4)").animate({
    top: 35,
    left: 0
  }, 500);
  $("body > *:nth-child(5)").animate({
    top: 35,
    left: 70
  }, 500);
  $("body > *:nth-child(6)").animate({
    top: 35,
    left: 140
  }, 500);
  $("body > *:nth-child(7)").animate({
    top: 35,
    left: 210
  }, 500);
  $("body > *:nth-child(8)").animate({
    top: 35,
    left: 280
  }, 500);
  $("body > *:nth-child(9)").animate({
    top: 35,
    left: 350
  }, 500);
  $("body > *:nth-child(10)").animate({
    top: 35,
    left: 420
  }, 500);
  $("body > *:nth-child(11)").animate({
    top: 35,
    left: 490
  }, 500);
  $("body > *:nth-child(12)").animate({
    top: 35,
    left: 560
  }, 500);
  $("body > *:nth-child(13)").animate({
    top: 35,
    left: 630
  }, 500);
  $("body > *:nth-child(14)").animate({
    top: 70,
    left: 0
  }, 500);
  $("body > *:nth-child(15)").animate({
    top: 70,
    left: 70
  }, 500);
  $("body > *:nth-child(16)").animate({
    top: 70,
    left: 140
  }, 500);
  $("body > *:nth-child(17)").animate({
    top: 70,
    left: 210
  }, 500);
  $("body > *:nth-child(18)").animate({
    top: 70,
    left: 280
  }, 500);
  $("body > *:nth-child(19)").animate({
    top: 70,
    left: 350
  }, 500);
  $("body > *:nth-child(20)").animate({
    top: 70,
    left: 420
  }, 500);
  $("body > *:nth-child(21)").animate({
    top: 70,
    left: 490
  }, 500);
  $("body > *:nth-child(22)").animate({
    top: 70,
    left: 560
  }, 500);
  $("body > *:nth-child(23)").animate({
    top: 70,
    left: 630
  }, 500);
  $("body > *:nth-child(24)").animate({
    top: 105,
    left: 0
  }, 500);
  $("body > *:nth-child(25)").animate({
    top: 105,
    left: 70
  }, 500);
  $("body > *:nth-child(26)").animate({
    top: 105,
    left: 140
  }, 500);
  $("body > *:nth-child(27)").animate({
    top: 105,
    left: 210
  }, 500);
  $("body > *:nth-child(28)").animate({
    top: 105,
    left: 280
  }, 500);
  $("body > *:nth-child(29)").animate({
    top: 105,
    left: 350
  }, 500);
  $("body > *:nth-child(30)").animate({
    top: 105,
    left: 420
  }, 500);
  $("body > *:nth-child(31)").animate({
    top: 105,
    left: 490
  }, 500);
  $("body > *:nth-child(32)").animate({
    top: 105,
    left: 560
  }, 500);
  $("body > *:nth-child(33)").animate({
    top: 105,
    left: 630
  }, 500);
  $("body > *:nth-child(34)").animate({
    top: 140,
    left: 0
  }, 500);
  $("body > *:nth-child(35)").animate({
    top: 140,
    left: 70
  }, 500);
  $("body > *:nth-child(36)").animate({
    top: 140,
    left: 140
  }, 500);
  $("body > *:nth-child(37)").animate({
    top: 140,
    left: 210
  }, 500);
  $("body > *:nth-child(38)").animate({
    top: 140,
    left: 280
  }, 500);
  $("body > *:nth-child(39)").animate({
    top: 140,
    left: 350
  }, 500);
  $("body > *:nth-child(40)").animate({
    top: 140,
    left: 420
  }, 500);
  $("body > *:nth-child(41)").animate({
    top: 140,
    left: 490
  }, 500);
  $("body > *:nth-child(42)").animate({
    top: 140,
    left: 560
  }, 500);
  $("body > *:nth-child(43)").animate({
    top: 140,
    left: 630
  }, 500);
  $("body > *:nth-child(44)").animate({
    top: 175,
    left: 0
  }, 500);
  $("body > *:nth-child(45)").animate({
    top: 175,
    left: 70
  }, 500);
  $("body > *:nth-child(46)").animate({
    top: 175,
    left: 140
  }, 500);
  $("body > *:nth-child(47)").animate({
    top: 175,
    left: 210
  }, 500);
  $("body > *:nth-child(48)").animate({
    top: 175,
    left: 280
  }, 500);
  $("body > *:nth-child(49)").animate({
    top: 175,
    left: 350
  }, 500);
  $("body > *:nth-child(50)").animate({
    top: 175,
    left: 420
  }, 500);
  $("body > *:nth-child(51)").animate({
    top: 175,
    left: 560
  }, 500);
  $("body > *:nth-child(52)").animate({
    top: 175,
    left: 630
  }, 500);
}
window.addEventListener('resize', function () {
  if(window.matchMedia('(orientation: portrait)').matches) { //세로
    $("body > *:nth-child(2)").animate({
      top: 5,
      left: -350
    }, 500);
    $("body > *:nth-child(3)").animate({
      top: 0,
      left: 210
    }, 500);
    $("body > *:nth-child(10)").animate({
      top: 35,
      left: 0
    }, 500);
    $("body > *:nth-child(11)").animate({
      top: 35,
      left: 70
    }, 500);
    $("body > *:nth-child(12)").animate({
      top: 35,
      left: 140
    }, 500);
    $("body > *:nth-child(13)").animate({
      top: 35,
      left: 210
    }, 500);
    $("body > *:nth-child(20)").animate({
      top: 70,
      left: 0
    }, 500);
    $("body > *:nth-child(21)").animate({
      top: 70,
      left: 70
    }, 500);
    $("body > *:nth-child(22)").animate({
      top: 70,
      left: 140
    }, 500);
    $("body > *:nth-child(23)").animate({
      top: 70,
      left: 210
    }, 500);
    $("body > *:nth-child(30)").animate({
      top: 105,
      left: 0
    }, 500);
    $("body > *:nth-child(31)").animate({
      top: 105,
      left: 70
    }, 500);
    $("body > *:nth-child(32)").animate({
      top: 105,
      left: 140
    }, 500);
    $("body > *:nth-child(33)").animate({
      top: 105,
      left: 210
    }, 500);
    $("body > *:nth-child(40)").animate({
      top: 140,
      left: 0
    }, 500);
    $("body > *:nth-child(41)").animate({
      top: 140,
      left: 70
    }, 500);
    $("body > *:nth-child(42)").animate({
      top: 140,
      left: 140
    }, 500);
    $("body > *:nth-child(43)").animate({
      top: 140,
      left: 210
    }, 500);
    $("body > *:nth-child(50)").animate({
      top: 175,
      left: 0
    }, 500);
    $("body > *:nth-child(51)").animate({
      top: 175,
      left: 140
    }, 500);
    $("body > *:nth-child(52)").animate({
      top: 175,
      left: 210
    }, 500);
  } else { //가로
    $("body > *:nth-child(2)").animate({
      top: 5,
      left: 50
    }, 500);
    $("body > *:nth-child(3)").animate({
      top: 0,
      left: 630
    }, 500);
    $("body > *:nth-child(4)").animate({
      top: 35,
      left: 0
    }, 500);
    $("body > *:nth-child(5)").animate({
      top: 35,
      left: 70
    }, 500);
    $("body > *:nth-child(6)").animate({
      top: 35,
      left: 140
    }, 500);
    $("body > *:nth-child(7)").animate({
      top: 35,
      left: 210
    }, 500);
    $("body > *:nth-child(8)").animate({
      top: 35,
      left: 280
    }, 500);
    $("body > *:nth-child(9)").animate({
      top: 35,
      left: 350
    }, 500);
    $("body > *:nth-child(10)").animate({
      top: 35,
      left: 420
    }, 500);
    $("body > *:nth-child(11)").animate({
      top: 35,
      left: 490
    }, 500);
    $("body > *:nth-child(12)").animate({
      top: 35,
      left: 560
    }, 500);
    $("body > *:nth-child(13)").animate({
      top: 35,
      left: 630
    }, 500);
    $("body > *:nth-child(14)").animate({
      top: 70,
      left: 0
    }, 500);
    $("body > *:nth-child(15)").animate({
      top: 70,
      left: 70
    }, 500);
    $("body > *:nth-child(16)").animate({
      top: 70,
      left: 140
    }, 500);
    $("body > *:nth-child(17)").animate({
      top: 70,
      left: 210
    }, 500);
    $("body > *:nth-child(18)").animate({
      top: 70,
      left: 280
    }, 500);
    $("body > *:nth-child(19)").animate({
      top: 70,
      left: 350
    }, 500);
    $("body > *:nth-child(20)").animate({
      top: 70,
      left: 420
    }, 500);
    $("body > *:nth-child(21)").animate({
      top: 70,
      left: 490
    }, 500);
    $("body > *:nth-child(22)").animate({
      top: 70,
      left: 560
    }, 500);
    $("body > *:nth-child(23)").animate({
      top: 70,
      left: 630
    }, 500);
    $("body > *:nth-child(24)").animate({
      top: 105,
      left: 0
    }, 500);
    $("body > *:nth-child(25)").animate({
      top: 105,
      left: 70
    }, 500);
    $("body > *:nth-child(26)").animate({
      top: 105,
      left: 140
    }, 500);
    $("body > *:nth-child(27)").animate({
      top: 105,
      left: 210
    }, 500);
    $("body > *:nth-child(28)").animate({
      top: 105,
      left: 280
    }, 500);
    $("body > *:nth-child(29)").animate({
      top: 105,
      left: 350
    }, 500);
    $("body > *:nth-child(30)").animate({
      top: 105,
      left: 420
    }, 500);
    $("body > *:nth-child(31)").animate({
      top: 105,
      left: 490
    }, 500);
    $("body > *:nth-child(32)").animate({
      top: 105,
      left: 560
    }, 500);
    $("body > *:nth-child(33)").animate({
      top: 105,
      left: 630
    }, 500);
    $("body > *:nth-child(34)").animate({
      top: 140,
      left: 0
    }, 500);
    $("body > *:nth-child(35)").animate({
      top: 140,
      left: 70
    }, 500);
    $("body > *:nth-child(36)").animate({
      top: 140,
      left: 140
    }, 500);
    $("body > *:nth-child(37)").animate({
      top: 140,
      left: 210
    }, 500);
    $("body > *:nth-child(38)").animate({
      top: 140,
      left: 280
    }, 500);
    $("body > *:nth-child(39)").animate({
      top: 140,
      left: 350
    }, 500);
    $("body > *:nth-child(40)").animate({
      top: 140,
      left: 420
    }, 500);
    $("body > *:nth-child(41)").animate({
      top: 140,
      left: 490
    }, 500);
    $("body > *:nth-child(42)").animate({
      top: 140,
      left: 560
    }, 500);
    $("body > *:nth-child(43)").animate({
      top: 140,
      left: 630
    }, 500);
    $("body > *:nth-child(44)").animate({
      top: 175,
      left: 0
    }, 500);
    $("body > *:nth-child(45)").animate({
      top: 175,
      left: 70
    }, 500);
    $("body > *:nth-child(46)").animate({
      top: 175,
      left: 140
    }, 500);
    $("body > *:nth-child(47)").animate({
      top: 175,
      left: 210
    }, 500);
    $("body > *:nth-child(48)").animate({
      top: 175,
      left: 280
    }, 500);
    $("body > *:nth-child(49)").animate({
      top: 175,
      left: 350
    }, 500);
    $("body > *:nth-child(50)").animate({
      top: 175,
      left: 420
    }, 500);
    $("body > *:nth-child(51)").animate({
      top: 175,
      left: 560
    }, 500);
    $("body > *:nth-child(52)").animate({
      top: 175,
      left: 630
    }, 500);
  }
});

//버튼 클릭시
function add(char) {
  if(char in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '(', ')']) {
    if(document.getElementById('display_result').value == '0') document.getElementById('display_result').value = char;
    else document.getElementById('display_result').value += char;
  }
  else document.getElementById('display_result').value += char;
}
function set(char) {
  document.getElementById('display_result').value = char;
}
function del() {
  var l = document.getElementById('display_result').value.length;
  if(document.getElementById('display_result').value == "0") return false;
  var result = "";
  for(var i = 0;i < l-1;i++) result += document.getElementById('display_result').value[i];
  document.getElementById('display_result').value = result;
}
function change() {
  var list = document.getElementsByClassName('etc1');
  if(mode) {
    mode = 0;
    document.getElementsByClassName('change')[0].textContent = "2nd";
    document.getElementsByClassName('change')[0].style.backgroundColor = "rgb(35, 35, 35)";
    document.getElementsByClassName('change')[0].style.color = "white";
    list[0].textContent = "e^x";
    list[0].setAttribute("onclick", "e_multiple()");
    list[1].textContent = "10^x";
    list[1].setAttribute("onclick", "ten_multiple()");
    list[2].textContent = "In";
    list[2].setAttribute("onclick", "alert('기능없음')");
    list[3].textContent = "log₁₀";
    list[3].setAttribute("onclick", "alert('기능없음')");
    list[4].textContent = "sin";
    list[4].setAttribute("onclick", "addsin(0)");
    list[5].textContent = "cos";
    list[5].setAttribute("onclick", "addcos(0)");
    list[6].textContent = "tan";
    list[6].setAttribute("onclick", "addtan(0)");
    list[7].textContent = "sinh";
    list[7].setAttribute("onclick", "addsinh(0)");
    list[8].textContent = "cosh";
    list[8].setAttribute("onclick", "addcosh(0)");
    list[9].textContent = "tanh";
    list[9].setAttribute("onclick", "addtanh(0)");
  } else {
    mode = 1;
    document.getElementsByClassName('change')[0].textContent = "1nd";
    document.getElementsByClassName('change')[0].style.backgroundColor = "darkgray";
    document.getElementsByClassName('change')[0].style.color = "black";
    list[0].textContent = "y^x";
    list[0].setAttribute("onclick", "alert('기능없음')");
    list[1].textContent = "2^x";
    list[1].setAttribute("onclick", "two_multiple()");
    list[2].textContent = "logʸ";
    list[2].setAttribute("onclick", "alert('기능없음')");
    list[3].textContent = "log₂";
    list[3].setAttribute("onclick", "alert('기능없음')");
    list[4].textContent = "sin-";
    list[4].setAttribute("onclick", "addsin(1)");
    list[5].textContent = "cos-";
    list[5].setAttribute("onclick", "addcos(1)");
    list[6].textContent = "tan-";
    list[6].setAttribute("onclick", "addtan(1)");
    list[7].textContent = "sinh-";
    list[7].setAttribute("onclick", "addsinh(1)");
    list[8].textContent = "cosh-";
    list[8].setAttribute("onclick", "addcosh(1)");
    list[9].textContent = "tanh-";
    list[9].setAttribute("onclick", "addtanh(1)");
  }
}
function m_clear() {
  save = 0;
}
function m_save() {
  var display = document.getElementById('display_result');
  display.value = eval(display.value) + save;
}
function m_plus() {
  var display = document.getElementById('display_result');
  save = eval(display.value);
}
function m_minus() {
  var display = document.getElementById('display_result');
  save = eval(display.value)*-1;
}
function percent() {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  document.getElementById('display_result').value = result/100;
}
function reverse() {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  document.getElementById('display_result').value = result*-1;
}
function square() {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  document.getElementById('display_result').value = Math.sqrt(result);
}
function multiple(num) {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  document.getElementById('display_result').value = Math.pow(result, num);
}
function e_multiple() {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  document.getElementById('display_result').value = Math.pow(2.71828182845, result);
}
function ten_multiple() {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  document.getElementById('display_result').value = Math.pow(10, result);
}
function two_multiple() {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  document.getElementById('display_result').value = Math.pow(2, result);
}
function factorial() {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  if(result == 0) return false;
  var result2 = 1;
  for(var i = 2;i <= result;i++) result2 = result2 * i;
  document.getElementById('display_result').value = result2;
}
function div_x() {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  document.getElementById('display_result').value = 1/result;
}
//n이 0이면 기본, 1이면 역수
function addsin(n) {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  if(n) document.getElementById('display_result').value = 1/Math.sin(result);
  else document.getElementById('display_result').value = Math.sin(result);
}
function addcos(n) {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  if(n) document.getElementById('display_result').value = 1/Math.cos(result);
  else document.getElementById('display_result').value = Math.cos(result);
}
function addtan(n) {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  if(n) document.getElementById('display_result').value = 1/Math.tan(result);
  else document.getElementById('display_result').value = Math.tan(result);
}
function addsinh(n) {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  if(n) document.getElementById('display_result').value = 1/Math.sinh(result);
  else document.getElementById('display_result').value = Math.sinh(result);
}
function addcosh(n) {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  if(n) document.getElementById('display_result').value = 1/Math.cosh(result);
  else document.getElementById('display_result').value = Math.cosh(result);
}
function addtanh(n) {
  var display = document.getElementById('display_result');
  var result = eval(display.value);
  if(n) document.getElementById('display_result').value = 1/Math.tanh(result);
  else document.getElementById('display_result').value = Math.tanh(result);
}
function calculate() {
  var display = document.getElementById('display_result');
  if(display.value == '') return false;
  var result = eval(display.value);
  document.getElementById('display_result').value = result;
}
function reset() {
  document.getElementById('display_result').value = "0";
}
