
//feature 0 (already here)


const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
            
    });
};

complimentBtn.addEventListener('click', getCompliment)



//feature 1

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

fortuneBtn.addEventListener('click', getFortune)

//feature 2

const goalBtn = document.getElementById("goalButton")

const getGoal = () => {
    axios.get("http://localhost:4000/api/goal/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

goalBtn.addEventListener('click', getGoal)


//feature 3

const adviceBtn = document.getElementById("adviceButton")

const getAdvice = () => {
    axios.get("http://localhost:4000/api/advice/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

adviceBtn.addEventListener('click', getAdvice)


//feature 4

const encouragementBtn = document.getElementById("encouragementButton")

const getEncouragement = () => {
    axios.get("http://localhost:4000/api/encouragement/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

encouragementBtn.addEventListener('click', getEncouragement)


//feature 5

let advice = document.querySelector('#advice')

let bodyObj = {
    desc: advice.value,

}

createHouse(bodyObj)
