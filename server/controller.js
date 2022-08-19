const advice = require("./db.json")


module.exports = {

    //feature 0 (already here)
    getCompliment: (req, res) => {
        compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    //feature 1
    getFortune: (req, res) => {
        const fortunes = [`Resting well is as important as working hard.`, `Success is going from failure to failure without loss of enthusiasm.`, `Well done is better than well said.`, `You have an unusual equipment for success, use it properly.`,`Your dreams are never silly; depend on them to guide you.`]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    //feature 2

    getCareerGoal: (req, res) => {
        const goal = [`Learn what you actually signed up for`, `Persue what interests you`, `Find out if what you are learning will matter in your chosen career`,`Get through this`]

        let randomIndex = Math.floor(Math.random() * goal.length);
        let randomGoal = goal[randomIndex]

        res.status(200).send(randomGoal)
    },

//feature 3

    getAdvice: (req, res) => {
        const advice = [`Use Google`, `Ask your mentor`, `Study with a classmate`,`Use queue`]

        let randomIndex = Math.floor(Math.random() * advice.length);
        let randomAdvice = advice[randomIndex]

        res.status(200).send(randomAdvice)
    },




//feature 4

getEncouragement: (req, res) => {
    const encouragement = [`There's a reason why you signed up for this. This is what you want. Keep it going!`, `This will all be worth it!`, `This is worth your time! Keep it going!`,`You are learning more than you think you are!`]

    let randomIndex = Math.floor(Math.random() * encouragement.length);
    let randomEncouragement = encouragement[randomIndex]

    res.status(200).send(randomEncouragement)
},

//feature 5

sendAdvice: (req, res) => {
    let { sentadvice } = req.body
    let newAdvice = {
        sentadvice: sentadvice
    }
    advice.push(newAdvice)

    res.status(200).send(advice)
}


}
