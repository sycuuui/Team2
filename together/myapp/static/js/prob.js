//정답 비교는 js 에서 템플릿 변수를 받아와서 그 값과 value 값을 비교하면 되는데 받아오는 방법을 모르겠다!
//구글링 해도 받아와지지 않는다!

//버튼을 누르게 된 요소가 오답이면 오답 modal
//태극기 카운트 위해
var answerScore = 0;
var flagcnt= 0;
var click = 1;
document.getElementById("qcount").innerHTML =
  "독립운동 관련 문제 " + click + "번";

// function clickCount() {

//   click++;
//   console.log(click);
// }

function next() {
  var q = document.querySelector(".qbox");
  q.innerHTML = qnaList[0].q;
}
//quizanswer 가져오기
var quizAnswer = document.getElementById("quizAnswer").innerHTML;
console.log(quizAnswer);

//1.modal창 만들기 -> 성공했을때 실패했을때 함수 두개 다 만들기
//2. timer 10초설정
//3. timer가 0초(-1초)가 됐을 때 실패창이 뜨게하는 방식
//4. 문제를 선택(클릭)했을때 timer을 멈추게하고
//5. 오답일 시 오답 modal창과 main 화면과 이어지는 버튼 생성
//6. 정답일 시 다음 문제로 넘어가게 하기
//7. 10번 문제도 정답일 시에 태극기 count +=1 하고 정답 modal창 생성
var c;

//태극기 카운트 위해
var flagcnt = 0;
//문제 숫자 세기
var qcount = 1;



/*1. 모달창 띄우기
-> 구글링 하면 버튼 누르면 모달창이 실행되게 하는데 버튼 누르는 동작을
특정 상황(정답/오답/시간초과)이 발생했을 때 실행하는걸로 바꿔야함
일단 따로 만들어서 관리 -> 정답/오답 가리는 함수 만들고 추가해야할듯*/

/*2. timer 10초 설정*/
var count = 10;
var counter = setInterval(timer, 1000);

function timer() {
  count--;
  //문제 선택을 완료했을때의 조건도 추가해야됨 다른 if로 추가
  //밑에 추후에 else if로 변경
  if (count < 0) {
    clearInterval(counter);

    document.getElementById("timer").innerHTML = "Time Over";
    //문제 선택을 안했다면 오답창이 뜨게 하는 이벤트 추가.
    if (document.getElementById("timer").innerHTML == "Time Over") {
      //시간초과 modal 생성
      console.log("시간초과!");
      clearInterval(counter);
      document.querySelector(".modalTime").classList.remove("hidden");
    }

    return;
  }

  document.getElementById("timer").innerHTML = count;
}

//4. 문제 선택시 timer 멈추게하기? -> 이건 위에서 ㄱㄱ
//5.6. 문제가 정답인지 오답인지 확인하게 하기 각 경우마다 해당 modal창 생성
//7. 10번 문제가 정답일 시 -> if (10번 문제 && 정답)완료 modal창 생성 -> modal 창을 총 3개(정답/오답/완료)

// if(qcount<10&&버튼을 누르게 된 요소가 정답과 같으면) 정답 modal + qcount++

$(".answerbtn").click(function () {
  click++;
  console.log("click"+click);
  if ($(this).attr("value") == quizAnswer) {
    // 정답일 때 이벤트
 
    console.log("answerscore"+answerScore);
    console.log("정답!");
    clearInterval(counter);
    if (click < 11) {
      //단순 정답창
      document.getElementById("OXtext").innerHTML = "정답입니다.";
      document.getElementById("OXimage").src = "https://ifh.cc/g/Fg1FWQ.png";
      document.getElementById("modal-container").classList.toggle("opaque");
      document.getElementById("modal-container").classList.toggle("unstaged");
      flagcnt++;
      
    } else if (click == 11) {
      //최종정답창
      document.getElementsByClassName(".userflagnum").innerHTML="+"+flagcnt;
      document.querySelector(".modalResult").classList.remove("hiddenResult");

    }
  } else if ($(this).attr("value") != quizAnswer) {
    // 오답일 때 이벤트
    console.log("오답!");
    clearInterval(counter);
    document.getElementById("modal-contents").style.backgroundColor = "#D9C08C";
    document.getElementById("OXtext").innerHTML = "오답입니다.";
    document.getElementById("OXimage").src = "https://ifh.cc/g/BmLabp.png";
    document.getElementById("modal-container").classList.toggle("opaque");
    document.getElementById("modal-container").classList.toggle("unstaged");
  }
});

$(".page-link").click(function() {
  document.getElementById("modal-container").classList.toggle("opaque");
  document.getElementById("modal-container").classList.toggle("unstaged");
  click = click;
  console.log("flag:"+flagcnt);
  document.getElementById("qcount").innerHTML =
   "독립운동 관련 문제 " + click + "번";
 if(click==11){
     document.querySelector(".modalResult").classList.remove("hiddenResult");
    
 }
 });

//if(qcount == 10 &&정답이면) 최종 modal창

// var univflagcnt = univflagcnt + flagcnt;
//document.getElementById("userflagunm").innerHTML="+"+flagcnt;