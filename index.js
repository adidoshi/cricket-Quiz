var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;

console.log("Are you a fan of " + chalk.green('"CRICKET"') + "," + " this " + chalk.redBright.bold('QUIZ') + " is for you!!")

var userName = readlineSync.question(chalk.yellowBright.bold("What is your name? "));
console.log("--------------------------");

console.log(chalk `Welcome {bold.red ${userName.toUpperCase()}} !!!
{green The quiz has 3 levels -> (Each level 5 questions)}
{bold.magentaBright * Easy (1):} Score min "3" points to qualify for level 2 -
{bold.magentaBright * Hard (2):}  Score extra "3" points in total (6) to qualify for level 3 -
{bold.magentaBright * Expert (3):} You grab the max points, you are the {green "WINNER!".}
{rgb(241, 235, 158).underline Note - You lose 1 point for each wrong answer}`)
var start = readlineSync.question('Hit Enter key to continue.', {
  hideEchoBack: true,
  mask: ''
});
console.log("--------------------------------------------");
console.log(chalk.bold.rgb(214, 33, 33)(" *******   Let's start the QUIZ   ******* "));
console.log("--------------------------------------------");


var questions = [{
    question: `In which year India won the world cup under the captainship of MS Dhoni? 
a. 2007
b. 2015
c. 2011
d. 2019
----------
Choose correct option -> `,
    answer: "c",
  },
  {
    question: `Guess the nickname of the current Indian cricket captain... 
a. captain cool
b. chiku
c. master blaster
d. hitman
-------------------
Choose correct option -> `,
    answer: "b",
  },
  {
    question: `What is the full form of lbw?
a. leg ball wicket
b. leg by wicket
c. leg between wicket
d. leg before wicket
---------------------
Choose correct option -> `,
    answer: "d",
  },
  {
    question: `Against whom did India won Champions Trophy in 2013?
a. South Africa
b. England
c. Australia
d. West-Indies
----------------
Choose correct option -> `,
    answer: "b"
  },
  {
    question: `Which format is played under -> PINK ball cricket
a. T-20 International
b. One Day International (ODI)
c. Test cricket
d. All of the above
----------------------------
Choose correct option -> `,
    answer: "c",
  },
  {
    question: `In how many balls did Yuvraj singh completed his half century when he made the record of "6 sixes in an over"?
a. 13 balls
b. 11 balls
c. 12 balls
d. 14 balls
------------
Choose correct option -> `,
    answer: "c",
  },
  {
    question: `At which stadium was the final test match between India vs Australia played of (Border–Gavaskar Trophy)?
a. Adelaide Oval
b. Melbourne Cricket Ground
c. Sydney Cricket Ground
d. The Gabba
------------------------
Choose correct option -> `,
    answer: "d",
  },
  {
    question: `How many player's are allowed outside 30-yard circle of the ground during the first powerplay in ODI?
a. 4
b. 3
c. 1
d. 2
-----
Choose correct option ->`,
    answer: "d",
  },
  {
    question: `The biennial international test cricket series between Australia and England is called…
a. The Ashes
b. The Trans-Tasman Cup
c. The Sheffield Shield
d. NatWest series
----------------------
Choose correct option -> `,
    answer: "a",
  },
  {
    question: `In …, the cricket rule change- stated that a batsman is not allowed to have a runner?
a. 2010
b. 2009
c. 2011
d. 2013
---------
Choose correct option -> `,
    answer: "c",
  },
  {
    question: `The highest score of Sachin Tendulkar in his international cricket career was?
a. 238
b. 248
c. 216
d. 223
---------
Choose correct option -> `,
    answer: "b",
  },
  {
    question: `According to the latest updates in 2021 who is @top in the ICC Men's ODI Team Rankings?
a. New Zealand
b. Australia
c. India
d. South Africa
-----------------
Choose correct option -> `,
    answer: "a",
  },
  {
    question: `….. is the umpire who is well-known for his distinctive signaling style.
a. Richard Kettleborough
b. Steve Davis
c. Billy Bowden
d. Nigel Llong
---------------------
Choose correct option -> `,
    answer: "c",
  },
  {
    question: `Which Indian player has been inducted into the ICC Hall of Fame in 2018? 
a. Sourav Ganguly
b. Virendra Sehwag
c. Rahul Dravid
d. Sachin Tendulkar
-------------------
Choose correct option -> `,
    answer: "c",
  },
  {
    question: `In which state of India is the "Brabourne stadium" located? 
a. Maharashtra
b. Delhi
c. Kolkata
d. Tamil Nadu
----------------
Choose correct option -> `,
    answer: "a",
  },
];

var highScore = [{
    name: "Aditya",
    score: 15,
  },
  {
    name: "Sanket",
    score: 14,
  },
  {
    name: "Ouneet",
    score: 13,
  }
];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bold.cyanBright("That's right!"));
    score += 1;
    console.log(chalk.bold.cyanBright("Current score: "), score);
    console.log(chalk.bold.yellow("----------------------------------------------"));
  } else {
    console.log(chalk.bold.red("You are wrong"));
    score -= 1;
    console.log(chalk.bold.red("Current score: "), score);
    console.log(chalk.bold.yellow("----------------------------------------------"));
  }
};

function qualified() {
  console.log(chalk.bgYellow(" Great! You are qualified for next round. "));
  console.log(chalk.bold.yellow("----------------------------------------------"));
  console.log(chalk.bold.yellow.underline("Level 2->"));
  for (i = 5; i < 10; i++) {
    play(questions[i].question, questions[i].answer);
  }
}

function notQualified() {
  console.log(chalk.bgRedBright(" Oops! You did not qualified for next level "));
  console.log(chalk.bold.yellow("----------------------------------------------"));
  console.log("Try again!!");
}

for (i = 0; i < 5; i++) {
  play(questions[i].question, questions[i].answer);
}

if (score >= 3) {
  qualified()
}

if (score >= 6) {
  console.log(chalk.bgYellow("Great! You are qualified for next round. "));
  console.log(chalk.bold.yellow("----------------------------------------------"));
  console.log(chalk.bold.yellow.underline("Level 3 ->"));
  for (i = 10; i < 15; i++) {
    play(questions[i].question, questions[i].answer);
  }
} else {
  notQualified()
}

function winner() {
  if (score >= 6) {
    console.log(chalk.black.bgGreen(" Wohoo!! Great...You completed all 3 levels!! "));
  }
}

console.log("Final score: ", score);
winner();
console.log(chalk.bold.yellow("-----------------------"));
console.log("High score so far:");

for (i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name + " : ", highScore[i].score);
}

function hide() {
  console.log(chalk.bold.yellow("----------------------------------------------"));
  console.log("If you beat the score, you will get the congratulations message below");
  console.log(chalk.bold.yellow("----------------------------------------------"));
};

if (score <= 12) {
  hide()
}

function check() {
  for (i = 0; i < highScore.length; i++) {
    if (highScore[i].score === score) {
      console.log(chalk.bgMagenta `Congratulations ${userName.toUpperCase()}!! you are a WINNER! send me a screenshot & I'll update it...`);
    }
  }
}
check();