document.addEventListener("DOMContentLoaded", function(){
    const qContainer = document.getElementById("question-container");
    const que = document.getElementById("question");
    const ansOptions = document.getElementById("answer-options");
    const submitBtn = document.getElementById("submit");
    const qScore = document.getElementById("score");

    let currentQuestionIndex = 0;
    let score = 0;
    const quizData = [
        {
            question: 'What does HTML stands for?',
            options : ['Hyper Text Markup Language', 'Hyper Text', 'Hyperlink Markup Language','Hyper Tags'],
            correctOption : 'Hyper Text Markup Language',
        },
        {
            question: 'What does CSS stands for?',
            options : ['Cascading Sheet', 'Cascading Style Sheet', 'Cascading Store Sheet','Hyper Tags'],
            correctOption : 'Cascading Style Sheet',
        },
        {
            question: 'What does Js stands for?',
            options : ['Java', 'JavaSheet', 'JavaSCript','Json'],
            correctOption : 'JavaSCript',
        },
    ];

    //display questions
    function displayQ(){
     const currentQuestion = quizData[currentQuestionIndex];
     que.textContent = currentQuestion.question;
     ansOptions.innerHTML = "";
     currentQuestion.options.forEach((option,index)=>{
       const li = document.createElement('li');
       li.innerHTML = `<label><input type="radio" name="answer" value="${option}">${option}</label>`;
       ansOptions.appendChild(li);
     });
    }
    // add button listener
    submitBtn.addEventListener("click",function(){
    const slectedAnswer = document.querySelector("input[name='answer']:checked");
    
    if(slectedAnswer){
       const userAnswer = slectedAnswer.value;
       const correctOption = quizData[currentQuestionIndex].correctOption;
    
    if(userAnswer===correctOption){
        score++;
    }
    currentQuestionIndex++;
     if(currentQuestionIndex<quizData.length){
        displayQ();
     }
     else{
        qContainer.style.display="none";
        qScore.textContent = `Your total score is: ${score} out of ${quizData.length}`;
     }
    }
    else{
        alert("Please select an option to proceed next");
    }
    });

    displayQ();
});
