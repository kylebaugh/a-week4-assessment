const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json()); // When we want to be able to accept JSON.
app.use(cors());



const ctrl = require('./controller')
app.get('/api/happys', ctrl.getHappys)
app.post(`/api/happys`, ctrl.createHappy)


// app.get("/api/compliment", (req, res) => {
//   const compliments = ["Gee, you're a smart cookie!",
// 					 "Cool shirt!",
// 					 "Your Javascript skills are stellar.",
//   ];

//   let randomIndex = Math.floor(Math.random() * compliments.length);
//   let randomCompliment = compliments[randomIndex];

//   res.status(200).send(randomCompliment);
  
// });

// app.get("/api/fortune", (req, res) => {
//   const fortunes = ["You are bound for glory!",
// 					 "Get on the bus, you'll be glad you did!",
// 					 "You will encounter many great blessings in the days to come",
//   ];

//   let randomIndex = Math.floor(Math.random() * fortunes.length);
//   let randomFortune = fortunes[randomIndex];

//   res.status(200).send(randomFortune);
  
// });

// app.get("/api/joke", (req, res) => {
//   const jokes = [" I went to buy some camo pants but couldn’t find any.",
// 					 "The problem with kleptomaniacs is that they always take things literally.",
// 					 "I used to think I was indecisive. But now I’m not so sure.",
//            "The easiest time to add insult to injury is when you’re signing someone’s cast.",
//   ];

//   let randomIndex = Math.floor(Math.random() * jokes.length);
//   let randomJoke = jokes[randomIndex];

//   res.status(200).send(randomJoke);
  
// });


app.listen(3500, () => console.log("Server running on 3500"));




