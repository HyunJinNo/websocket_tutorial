// 웹소켓 연결
const ws = new WebSocket("ws://localhost:3000");

// send 함수로 메세지 발송
function sendMessage() {
  ws.send(document.getElementById("message").value);
}

// 웹소켓 연결 종료
function webSocketClose() {
  console.log("종료 누름");
  ws.close();
}

// WebSocket의 open 이벤트 핸들러
ws.onopen = function () {
  console.log("클라이언트 접속 완료");
};

// WebSocket의 message 이벤트 핸들러. 서버에서 메세지 수신 시 실행
ws.onmessage = function (event) {
  // Enter 키를 <br /> 태그로 변경
  let message = event.data.replace(/(\r\n|\n|\r)/g, "<br />");
  let element = document.createElement("div"); // div 태그 생성
  element.innerHTML = message; // <div>{메세지}</div>값이 됨. HTML로 파싱
  element.className = "message"; // <div class="message">{메세지}</div>값이 됨.
  document.getElementById("messages").append(element); // messages 요소에 추가
};

// 접속 종료 시 실행
ws.onclose = function (e) {
  console.log("종료");
  document.getElementById("messages").append("서버 접속 종료");
};
