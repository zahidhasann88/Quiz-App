const quizData = [
  {
    question: 'What technology is used to record cryptocurrency transactions?',
    a: 'Digital Wallet',
    b: 'Blockchain',
    c: 'Mining',
    d: 'Token',
    correct: 'b',
  },{
    question: 'What tool would you use to reduce the digital image size?',
    a: 'Filter',
    b: 'Brush',
    c: 'Rotate',
    d: 'Crop',
    correct: 'a',
  },{
    question: 'Why is Big Data important?',
    a: 'Because it is structured',
    b: 'Because it may be analyzed to reveal patterns and trends',
    c: 'Because of its complexity',
    d: 'Because of its size',
    correct: 'b',
  },{
    question: 'What kind of malware is designed to take advantage of a security hole before it is known?',
    a: 'Zero-day exploit',
    b: 'Virus',
    c: 'Ransomware',
    correct: 'a',
  },{
    question: 'Making a compressed digital archive might produce what type of file format?',
    a: 'PDF',
    b: 'JPEG',
    c: 'ZIP',
    d: 'MP3',
    correct: 'b',
  },{
    question: 'What does acronym FOSS stand for?',
    a: 'Free and Open-Source Software',
    b: 'Full Option Sensor System',
    c: 'Follow-On Support Service',
    d: 'Fiber Optics Science System',
    correct: 'a',
  },{
    question: 'What technology is used to make telephone calls over the Internet possible?',
    a: 'Bluetooth',
    b: 'Ethernet',
    c: 'NFC',
    d: 'VoIP',
    correct: 'd',
  },{
    question: 'Which computer language is the most widely used?',
    a: 'C#',
    b: 'Swift',
    c: 'PHP',
    d: 'Java',
    correct: 'd',
  }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
 
let currentQuiz = 0;
let score = 0; 

loadQuiz();

  function loadQuiz() {
    deselectAnswers(); 
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected() {
  let answer = undefined; 
  
  answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
  
  return answer;
}
function deselectAnswers(){
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}  

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
 
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
 
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
    quiz.innerHTML = `
    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
     
      <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
