var color = require('chalk');
var takeinput = require("readline-sync");
var score = 0;

var quizScores = [
  {
    Name: "Binal",
    Score: 89
  },
  {
    Name: "Avni",
    Score: 55
  },
  {
    Name: "Kapil",
    Score: 60
  },
  {
    Name: "Drashti",
    Score: 75
  },
  {
    Name: "Shruti",
    Score: 85
  },
  {
    Name: "Sagar",
    Score: 23
  },
  {
    Name: "Vishwa",
    Score: 75
  },
  {
    Name: "Akash",
    Score: 45
  }
];

var questions = [
  {
    que: "Did all the kids in the Stranger Things are friends in real life? ",
    answer: true
  },
  {
    que: "Over 1000 boys and 2000 girls were auditioned for the show? ",
    answer: false
  },
  {
    que: "Will there be season 4 of Stranger Things?",
    answer: true
  },
  {
    que: "Hawkins, Indiana is a real place?",
    answer: false
  },
  {
    que: "Did Will Byers disappeared?",
    answer:true,
  },
  {
    que: "Where is Stranger Thing set? ",
    answer:2,
    options:["Iowa", "Indiana", "Iliinois", "North West China"]
  },
  {
    que: "Which of these isn't a name for Eleven? ",
    answer:4,
    options:["El", "Eleanor", "The Wierdo", "Davey"]
  },
  {
    que: "What kind of superpowers does Eleven have? ",
    answer:2,
    options:["She can fly", "She can control things with her mind", "She can turn things invisble", "She can stick postage stamps on exactly straight, first try"]
  },
  {
    que: "Joyce Byers is a ",
    answer:1,
    options:["Mum", "Dad", "Granny", "Auntie"] 
  },
  {
    que: "What is Jim's last name? ",
    answer:1,
    options:["Hopper", "Hipster", "Happier", "Hoopshooter"]
  },
  {
    que: "What is the other dimension in Stanger Things called? ",
    answer:2,
    options:["The Back to Front", "The Upside Down", "The Inside Out", "The Topsy Turvy"]
  },
  {
    que: "What Board game is Mike really good at? ",
    answer:4,
    options:["Monopoly", "Scrabble", "Risk", "Dungeons and Dragons"]
  },
  {
    que: "What are Eggos? ",
    answer:2,
    options:["Some sort of wierd cake", "A variety of Spooky fruit", "A kid"]
  },
  {
    que: "Whose pink dress did Eleven wear in the first season? ",
    answer:2,
    options:["Karen", "Nancy", "Erica", "Joyce"]
  },
  {
    que: "Which of these appeared in all of the episodes? ",
    answer:1,
    options:["Jim Hooper", "Eleven", "Dustin Henderson", "Steve Harrington"]
  },
  {
    que: "Who is weraing Michael Myers mask on Halloween? ",
    answer:2,
    options:["Eleven", "Max", "Nancy", "Robin"]
  },
  {
    que: "Who is the fan of My little pony? ",
    answer:3,
    options:["Max", "Eleven", "Erica", "Will"]
  },
  {
    que: "Where was the first place Eleven went after escape? ",
    answer:2,
    options:["Mike's basement", "Benny's Burgers", "Forest", "Jim Hoopers House"]
  },
  {
    que: "Who is Chester? ",
    answer:3,
    options:["Dustin's pet turtle", "Henderson family's cat", "Will's Dog", "Henderson family's kitten"]
  },
  {
    que: "What role did the Duffer Brothers have in the making of 'Stranger Things'?",
    answer:1,
    options:["Wrting", "Casting", "costume design"]
  },
  {
    que: "To prepare the Child actors for their parts, the Duffer Brothers required them to watch which film?",
    answer:3,
    options:["The Goonies", "Star Wars", "Stand By Me"]
  },
  {
    que: "Which role did Shawn Levy have in the show's creation?",
    answer:2,
    options:["casting", "executive producer", "composer"]
  },
  {
    que: "Which of the show's charachter is affected by cleidocranial dysplasia (problems with tooth formation)?",
    answer:3,
    options:["Mike", "Will", "Dustin"]
  },
  {
    que: "The charachter Mike Wheeler is played by which actor?",
    answer:1,
    options:["Finn Wolfhard", "Gaten Matarazao", "Charlie Heaton"]
  }];


function check(obj,i){
  console.log(color.italic.bgMagenta.underline("QUESTION "+(i+1) + ":--"));
  if(i < 5){
    var userAns=takeinput.keyInYNStrict(color.yellow.bold(obj.que));
    console.log(color.cyan.bold("You entered : ") + color.red.bold(userAns? "yes":"no"));
    console.log(color.cyan.bold("Correct answer : ") + color.red.bold(obj.answer));
    if (userAns===obj.answer){
    console.log(color.bgYellow.bold.italic("Whohoo ! You are absolutely right!"));
    score = score+4;
    }else {
    console.log(color.bgRed.bold.italic("Ooof! you are wrong!"));
    score = score-1;
    }
  }
  else{
    console.log(color.yellow.bold.italic(obj.que));
    var userAns = takeinput.keyInSelect(obj.options,color.yellow.bold("Select: "), {cancel: false});
    console.log(color.magenta.bold("You entered: ")+color.bold.cyan(userAns+1));
    console.log(color.red.bold("Correct answer: ") + color.green.bold(obj.options[obj.answer-1]));
    if((userAns+1) === obj.answer) {
    console.log(color.bgGreen.bold.italic("Congratulations! You are right."));
    score = score+4;
    }else{
    console.log(color.bgRed.bold.italic("Ooh! You are wrong!"));
    score = score-1;
    }
  }
  if(i!=23) {
    console.log(color.bgMagenta.bold("YOUR SCORE = ") + color.bold.cyan(score+"\n"));
    console.log(color.redBright("-------------------------------------------"));
  }else{
    console.log(color.bgCyanBright.bold.black.underline.italic("\nThankyou for playing " +userName+"!!"));
    console.log(color.bgMagenta.bold("\nYOUR FINAL SCORE = ") +color.bold.cyanBright(score)+"\n");
  }
}

var userName = takeinput.question(color.bgGreen.black.bold("What's your good name?\n"));
console.log(color.redBright("--------------------------------------------"));
console.log(color.redBright("--------------------------------------------"));
console.log(color.bgMagentaBright.bold.black.underline(" Hello! " + userName+ " Welcome to Stranger Things Quiz!\n"));
console.log(color.redBright("----------------------------------------------"));
console.log(color.redBright("----------------------------------------------"));
console.log(color.bgBlue.bold.underline("RULES: "));
console.log(color.bgMagenta.red.bold.italic("There will be 3 levels in this game."));
console.log(color.bgMagenta.yellow.bold.italic("2. LEVEL-ONE has 4 questions of YES/NO type.\n (LEVEL-ONE full marks = 2*4=8)\n LEVEL-TWO has 15 MCQ questions each which are based on the seasons of Stranger Things.\n (LEVEL-TWO full marks = 8*2=16)\n LEVEL-THREE has 5 MCQ type questions which are based on the backend crew of the series.\n (LEVEL-THREE full marks = 16*2=32"));
console.log(color.bgMagenta.yellow.bold.italic("3. To reach LEVEL-TWO minimum score needed 4/8 in LEVEL-ONE\n To reach LEVEL-THREE minimum score needed 8/16 in LEVEL-TWO"));
console.log(color.bgMagenta.yellow.bold.italic("4. Each correct answer will give you 2 points."));
console.log(color.bgMagenta.yellow.bold.italic("5. Each wrong answer will deduct your 1 point. \n"));
console.log(color.bgWhiteBright.black.bold("ALL THE BEST "+userName+"!\n"));
console.log(color.bgCyan.bold("The quiz Begins!"));

for(var i=0;i<4;i++){
  check(questions[i],i);
}
if (score>=2){
  console.log(color.red.bold.italic("Congrats! You have passed LEVEL-ONE!\n Welcome to LEVEL-TWO"));
  for(var i=4;i<19;i++){
    check(questions[i],i);
  }
}else{
  console.log(color.bgYellow.red.bold("Sorry! you could not clear LEVEL-ONE"));
  console.log(color.cyanBright.bold("\n YOUR FINAL SCORE = ")+color.bold.magentaBright(score)+"\n");
  process.exit()
}
console.log(color.redBright("--------------------------------------------------------"));
if(score>=10){
  console.log(color.red.bold.italic("Congrats! You have passed LEVEL-TWO!\n Welcome to LEVEL-THREE"));
  for(var i=19;i<24;i++){
    check(questions[i],i);
  }
}else{
  console.log(color.bgYellow.red.bold("Sorry! you could not clear LEVEL-TWO"));
  console.log(color.cyanBright.bold("\n YOUR FINAL SCORE = ")+color.bold.magentaBright(score)+"\n");
  process.exit()
}
console.log(color.redBright("--------------------------------------------------------"));

console.log(color.bgWhite.black.bold("LEADER-BOARD:- "));
console.log(color.bold.bgBlue("NAME")+" - "+ color.bold.bgBlue("SCORE"));
  
var flag=0;
for(var i=0;i<quizScores.length;i++){
  if(quizScores[i].Score>score){
    console.log(color.bold.green(quizScores[i].Name)+" - "+color.bold.red(quizScores[i].Score));
  }
  else{
    console.log(color.bold.yellow.italic(userName)+" - " + color.bold.green.italic(score));
    result=1;
    break;
  }
}
if (flag==1){
  while(i<quizScores.length){
    console.log(color.bold.cyan(quizScores[i].Name)+" - "+color.bold.red(quizScores[i].Score));
    i++;
  }
}



