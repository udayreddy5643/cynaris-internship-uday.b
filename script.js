// Week 1 Day 3 - JavaScript ES6+

// ES5 style
var user = {
    name: "Uday",
    role: "Full Stack Intern"
};

var message = "Hello, " + user.name + "! You are a " + user.role + ".";

console.log(message);


// ES6+ arrow function
const greetUser = (name) => {
    return `Welcome, ${name}!`;
};

console.log(greetUser(user.name));


// Object destructuring
const { name, role } = user;

console.log(`Name: ${name}`);
console.log(`Role: ${role}`);


// Array destructuring
const skills = ["HTML", "CSS", "JavaScript"];

const [firstSkill, secondSkill, thirdSkill] = skills;

console.log(firstSkill);
console.log(secondSkill);
console.log(thirdSkill);
// Array methods: filter(), map(), reduce()

const developers = [
    { name: "Uday", role: "Frontend", experience: 1 },
    { name: "Rahul", role: "Backend", experience: 3 },
    { name: "Priya", role: "Full Stack", experience: 2 },
    { name: "Arjun", role: "Frontend", experience: 4 }
];

// filter() - get developers with 2+ years of experience
const experiencedDevelopers = developers.filter(
    (developer) => developer.experience >= 2
);

console.log("Experienced developers:", experiencedDevelopers);


// map() - get only developer names
const developerNames = developers.map(
    (developer) => developer.name
);

console.log("Developer names:", developerNames);


// reduce() - calculate total years of experience
const totalExperience = developers.reduce(
    (total, developer) => total + developer.experience,
    0
);

console.log("Total experience:", totalExperience);
// Interactive component using an event listener

const skillsButton = document.getElementById("skillsButton");
const skillsOutput = document.getElementById("skillsOutput");

skillsButton.addEventListener("click", () => {
    const skills = ["HTML5", "CSS3", "JavaScript", "Git & GitHub"];

    skillsOutput.textContent = `My skills: ${skills.join(", ")}`;
});