function next() {
  var q = document.querySelector(".qbox");
  q.innerHTML = qnaList[0].q;
}

//1.modal창 만들기 -> 성공했을때 실패했을때 함수 두개 다 만들기
//2. timer 10초설정
//3. timer가 0초(-1초)가 됐을 때 실패창이 뜨게하는 방식
//4. 문제를 선택(클릭)했을때 timer을 멈추게하고
//5. 오답일 시 오답 modal창과 main 화면과 이어지는 버튼 생성
//6. 정답일 시 다음 문제로 넘어가게 하기
//7. 10번 문제도 정답일 시에 태극기 count +=1 하고 정답 modal창 생성

//태극기 카운트 위해
var flagcnt = 0;
//문제 숫자 세기
var qcount = 1;

//랜덤 문제 선택 임시 수정부탁이용
var qnum = parseInt(Math.random() * 5 + 1);

//임시 퀴즈 목록
const quizinfo = [
  {
    question: "문제 설명1",
    questionImg: ["", "", ""], //넣어야 하는 이미지들
    answerChoice: ["1-1", "1-2", "1-3"],
    answerIndex: 2, //일단 답이 1-2라고 설정해보자 answerChoice[i-1]
  },
  {
    question: "문제 설명2",
    questionImg: ["", "", ""],
    answerChoice: ["2-1", "2-2", "2-3"],
    answerIndex: 1,
  },
  {
    question: "문제 설명3",
    questionImg: ["", "", ""],
    answerChoice: ["3-1", "3-2", "3-3"],
    answerIndex: 2,
  },
  {
    question: "문제 설명4",
    questionImg: ["", "", ""],
    answerChoice: ["4-1", "4-2", "4-3"],
    answerIndex: 3,
  },
  {
    question: "문제 설명5",
    questionImg: ["", "", ""],
    answerChoice: ["5-1", "5-2", "5-3"],
    answerIndex: 1,
  },
];

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
      //오답 modal 생성
      console.log("오답!");
      clearInterval(counter);
      document.getElementById("OXtext").innerHTML = "시간초과!";
      document.getElementById("OXimage").src = "staticimgXimage.png";
      document.getElementById("modal-container").classList.toggle("opaque");
      document.getElementById("modal-container").classList.toggle("unstaged");
    }

    return;
  }

  document.getElementById("timer").innerHTML = count;
}

//4. 문제 선택시 timer 멈추게하기? -> 이건 위에서 ㄱㄱ
//5.6. 문제가 정답인지 오답인지 확인하게 하기 각 경우마다 해당 modal창 생성
//7. 10번 문제가 정답일 시 -> if (10번 문제 && 정답)완료 modal창 생성 -> modal 창을 총 3개(정답/오답/완료)

//문제 만들기 빡세다! 살려줘!
document.getElementById("qcount").innerHTML = `독립운동 관련 문제 ${qcount} 번`;

document.getElementById("question").innerHTML = quizinfo[qnum - 1].question;

//document.getElementById("questionImg").src = "";

document.getElementById("answer1").innerHTML =
  quizinfo[qnum - 1].answerChoice[0];
document.getElementById("answer2").innerHTML =
  quizinfo[qnum - 1].answerChoice[1];
document.getElementById("answer3").innerHTML =
  quizinfo[qnum - 1].answerChoice[2];

// if(qcount<10&&버튼을 누르게 된 요소가 정답과 같으면) 정답 modal + qcount++
var answerScore =0;
$(".answerbtn").click(function () {
  if ($(this).attr("value") == quizinfo[qnum - 1].answerIndex) {
    // 정답일 때 이벤트
    answerScore++;//정답일때 변수+1
    console.log(answerScore);    
    console.log("정답!");
    clearInterval(counter);
    if (qcount < 10) {
      //단순 정답창
      document.getElementById("OXtext").innerHTML = "정답입니다.";
      document.getElementById("OXimage").src = "https://ifh.cc/g/Fg1FWQ.png";
      document.getElementById("modal-container").classList.toggle("opaque");
      document.getElementById("modal-container").classList.toggle("unstaged");
      qcount++;
    } else if (qcount == 10) {
      //최종정답창
    }
  } else if ($(this).attr("value") != quizinfo[qnum - 1].answerIndex) {
    // 오답일 때 이벤트
    console.log("오답!");
    clearInterval(counter);
    document.getElementById("OXtext").innerHTML = "오답입니다.";
    document.getElementById("OXimage").src = "https://ifh.cc/g/BmLabp.png";
    document.getElementById("modal-container").classList.toggle("opaque");
    document.getElementById("modal-container").classList.toggle("unstaged");
  }
});

//if(qcount == 10 &&정답이면) 최종 modal창

//버튼을 누르게 된 요소가 오답이면 오답 modal
var click = 0;
      function clickCount(){
        click++;
        console.log(click);
      }
