//GLOBALS
var qcontainer; // Reference to the question container.

//FUNCTIONS
function onload() {
    qcontainer = document.getElementById("QuestionContainer");
    generateQuestions();

    
}


// Displays all questions on screen.
function generateQuestions() {
    let i = 0;
    questions.forEach((question)=>{
        let elem = createQuestionElement(question, ++i);
        
        qcontainer.appendChild(elem);
    });
}

function createQuestionElement(string,index) {
    let question = document.createElement("div");
    question.className = "question";
    question.onclick = ()=>{
        question.querySelector("input").click();
    };
    question.on
    question.tabIndex = index;

    let checkbox = document.createElement("div");
    checkbox.className = "question_checkbox";
    
    let input = document.createElement("input");
    input.type = "checkbox";
    input.tabIndex = -1;
    input.id = "box" + index
    let box = document.createElement("span");
    box.className = "checkbox"
    box.onclick = "document.getElementById(\"box" + index + "\").checked = true"
    checkbox.appendChild(input);
    checkbox.appendChild(box);


    let content = document.createElement("div");
    content.className = "question_content";
    let words = document.createElement("p");
    words.innerHTML = `${index}. ${string}?`;
    content.appendChild(words);

    question.appendChild(checkbox);
    question.appendChild(content);

    return question;
}

function calculateQuestions() {
    let checks = document.getElementsByClassName("question_checkbox");
    checks = Array.from(checks);
    var score = 100;

    checks.forEach((checkboxContainer)=>{
        if (checkboxContainer.children[0].checked) score--;
    });

    return score;
}
function getResultOnScore(s) {
    r = null;
    for(var i = 0; i < results.length; i++) {
        cond = results[i].range
        if (cond[0] <= s &&  s <= cond[1]) {r = {title: results[i].title, interpretation: results[i].description}; break;}
    }
    return r
}



function submit() {
    displayResults(calculateQuestions());
}
function displayResults(score) {
    document.getElementById("Overlay").classList.remove("state-hidden");
    document.getElementById("Overlay").classList.add("state-displayed");
    document.getElementById("ResultsContainer").classList.remove("state-hidden");
    document.getElementById("ResultsContainer").classList.add("state-displayed");
    document.getElementById("results_score").innerHTML = score;

    result = getResultOnScore(score)
    console.log(result)
    document.getElementById("results_title").innerHTML = result.title;
    document.getElementById("results_interpretation").innerHTML = result.interpretation;
    
    // Calculate color!
    // document.getElementById("results_score_container").style = score;
}
function hideResults() {
    document.getElementById("Overlay").classList.remove("state-displayed");
    document.getElementById("Overlay").classList.add("state-hidden");
    document.getElementById("ResultsContainer").classList.remove("state-displayed");
    document.getElementById("ResultsContainer").classList.add("state-hidden");
}

function hideDisclaimer() {
    document.getElementById("OverlayDisc").classList.remove("state-displayed");
    document.getElementById("OverlayDisc").classList.add("state-hidden");
    document.getElementById("DisclaimerContainer").classList.remove("state-displayed");
    document.getElementById("DisclaimerContainer").classList.add("state-hidden");
}