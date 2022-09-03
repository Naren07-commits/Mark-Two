var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What's Your Name? ");

console.log("Welcome " + userName + " to the World of Naruto !!");

console.log("Disclamer: Just type option, don't act smart");

var questionBank = [
  {
    question: `1) What is the name of Kakashi's smallest Ninken? 
  a.Urushi
  b.Shiba
  c.Pakun
  d.Bangkok `,

    answer: `c`,
  },
  {
    question: `2) What is the village where Naruto lives called? 
  a.Sunagakure
  b.Kyuubigakure
  c.Uzamagakure
  d.Konohagakure `,

    answer: `d`,
  },
  {
    question: `3)Which of these is Not a memeber of the Nara clan? 
  a.Jiraiya
  b.Yoshino
  c.Shikaku
  d.Ensui`,

    answer: `a`,
  },
  {
    question: `4)Which of these people has been Hokage the most? 
  a.Hashirama Senju
  b.Kakashi Hatake
  c.Hiruzen Sarutobi
  d.Tsunade`,

    answer: `c`,
  },
  {
    question: `5)Who has not been considered for Hokage? 
  a.Shikamaru
  b.Danzo
  c.Sakura
  d.Jiraiya`,

    answer: `c`,
  },
  {
    question: `6)Which famed clan was completely massacred? 
  a.Uchicha
  b.Hyuuga
  c.Uzamaki
  d.Nara`,

    answer: `a`,
  },
  {
    question: `7)Which ninja cannot do ninjutsu? 
  a.TenTen
  b.Might Guy
  c.Kakashi
  d.Rock Lee`,

    answer: `d`,
  },
  {
    question: `8)What piece of jewelery do the Akatsuki wear? 
  a.Rings
  b.Nose RINGS
  c.Tommy
  d.Bangkok`,

    answer: `a`,
  },
  {
    question: `9)Which sword did Suigetsu originally wield? 
  a.Sameheda
  b.Nuibari
  c.Kubikiribocho
  d.Shibuki`,

    answer: `c`,
  },
  {
    question: `10)What does Gaaras's tattoo mean? 
  a.Orphan
  b.Love
  c.Monster
  d.Hate`,

    answer: `b`,
  },
];

for (var i = 0; i < questionBank.length; i++) {
  var currentQuestionBank = questionBank[i];

  play(currentQuestionBank.question, currentQuestionBank.answer);
}

function play(myQuestion, myAnswer) {
  var userAnswer = readlineSync.question(myQuestion);

  if (userAnswer == myAnswer) {
    console.log("Right !!!");
    score = score + 1;
    console.log("Your current score is:", score);
  } else {
    console.log("Wrong !!!");
    score = score - 1;
    console.log("Your current score is:", score);
  }
}

var totalScore = score;
if (totalScore > 7) {
  console.log("Waah Bete Moj Kar di !!! Your Total Score is:" + totalScore);
  console.log();
} else if (totalScore > 4) {
  console.log(
    "Keep it up, one day you will succeed !!! Your Total Score is:" + totalScore
  );
} else {
  console.log(
    "Chulu bhaar pani dubb mar jao !! Your Total Score is:" + totalScore
  );
}
