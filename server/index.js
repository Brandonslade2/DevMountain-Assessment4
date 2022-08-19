const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());



let { getCompliment, getFortune, getCareerGoal, getAdvice, getEncouragement, sendAdvice } = require('./controller')

app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.get("/api/goal", getCareerGoal)
app.get("/api/advice", getAdvice)
app.get("/api/encouragement", getEncouragement)

app.post("api/", sendAdvice)



app.listen(4000, () => console.log("Server running on 4000"));
