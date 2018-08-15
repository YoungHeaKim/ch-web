function clock() {
  const date = new Date();

  // date에서 시간 분 초
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  // 초의 각도
  const secDegree = sec * 6;

  // 시간을 오후 오전으로 나누기 위해 12를 빼준다.  
  if ( hours > 12 ) hours = hours - 12;

  // 시간의 각도 계산
  const hoursDegree = ( hours * 30 ) + ( min / 2 );

  // 시침의 각도를 정수로 변환 해주어야 한다.
  hoursDegree = parseInt(hoursDegree);

  // 분침의 각도
  const minDegree = min * 6;

  // 시침, 분침, 초침의 각도를 계산한 값으로 변경
  /* IE 10+, Firefox */
  document.getElementById("hour").style.transform = "rotate(" + dh + "deg)";
  document.getElementById("minute").style.transform = "rotate(" + dm + "deg)";

  /* IE 9 */
  document.getElementById("hour").style.MsTransform = "rotate(" + dh + "deg)";
  document.getElementById("minute").style.MsTransform = "rotate(" + dm + "deg)";

  /* Opera, Chrome, Safari */
  document.getElementById("hour").style.WebkitTransform = "rotate(" + dh + "deg)";
  document.getElementById("minute").style.WebkitTransform = "rotate(" + dm + "deg)";

  // 사각형 꼭지점 별로 회전
  const changeClock = minDegree;
  const clockBg = document.getElementById('clockBg');

  // 사각형 꼭지점별로 회전
  if (changeClock >= 45 && changeClock <= 134) {
    clockBg.style.transform = "rotate(" + 90 + "deg)";
    clockBg.style.MsTransform = "rotate(" + 90 + "deg)";
    clockBg.style.WebkitTransform = "rotate(" + 90 + "deg)";
  } else if (changeClock >= 135 && changeClock <= 224) {
    clockBg.style.transform = "rotate(" + 0 + "deg)";
    clockBg.style.MsTransform = "rotate(" + 0 + "deg)";
    clockBg.style.WebkitTransform = "rotate(" + 0 + "deg)";
  } else if (changeClock >= 225 && changeClock <= 315) {
    clockBg.style.transform = "rotate(" + 90 + "deg)";
    clockBg.style.MsTransform = "rotate(" + 90 + "deg)";
    clockBg.style.WebkitTransform = "rotate(" + 90 + "deg)";
  } else {
    clockBg.style.transform = "rotate(" + 0 + "deg)";
    clockBg.style.MsTransform = "rotate(" + 0 + "deg)";
    clockBg.style.WebkitTransform = "rotate(" + 0 + "deg)";
  }

  // 오전과 오후 구분
  const clockHours = date.getHours();

  const round = document.getElementById('round');
  const minute = document.getElementById('minute');

  if (clockHours >= 6 && clockHours < 18) {
    $('#clockBg').attr('src', function (index, attr) {
      return attr.replace('icon-box-n', 'icon-box');
    });
    $('#round').attr('src', function (index, attr) {
      return attr.replace('icon-round-n.svg', 'icon-minute.svg');
    });
    $('#minute').attr('src', function (index, attr) {
      return attr.replace('icon-minute-n.svg', 'icon-minute.svg');
    });
  } else {
    $('#clockBg').attr('src', function (index, attr) {
      return attr.replace('icon-box.svg', 'icon-box-n.svg');
    });
    $('#round').attr('src', function (index, attr) {
      return attr.replace('icon-round.svg', 'icon-round-n.svg');
    });
    $('#minute').attr('src', function (index, attr) {
      return attr.replace('icon-minute.svg', 'icon-minute-n.svg');
    });
  }
}

// 매 1초마다 함수 digital()을 호출하도록 타이머 생성
let timer = setInterval( function () { clock(); }, 1000);