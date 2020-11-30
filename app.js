// importing packages
var readlineSync = require ("readline-sync");

// Initialization
var name = readlineSync.question("what is your name ");
console.log("Hi "+ name );
var score = 0;
var highscore = 2;

// gameplay
    function quiz(question,answer)
{
        var yourans = readlineSync.question(question);
        var myans = answer;
    if(yourans.toUpperCase() === myans.toUpperCase())
        { console.log("correct!");
        score = score + 1;}
    else
        {console.log("wrong!");
        score = score - 1;}

    } 
    
    
    // questions
    var questions = [
        {question : "where do i live?\n",
        ans : "Aurangabad"},
        
        {question : "What is my favourite food?\n",
        ans : "Pavbhaji"},

        {question : "when is my birthday?\n",
        ans : "November"},

        {question : "which movies do i like the most?\n",
        ans : "Aciton"}
    ];
    
    for (let i=0;i<questions.length;i++)
    {
        var currentquestion = questions[i];
        quiz(currentquestion.question,currentquestion.ans)
    }
        console.log ("--------------------------------------------------------------------");
    // scores
    console.log("Final scores");
    console.log("scores =",score);
    
    if(highscore < score)
        {
            console.log('Congrats!You know me well!!');
        }

    else
        {
            console.log("Better luck next time!");
        }