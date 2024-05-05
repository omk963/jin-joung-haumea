const body = document.querySelector("body");
let today = new Date();
const thisYear = today.getFullYear();
console.log(thisYear);
const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Jin Joung ${thisYear}`;
console.log(copyright);
footer.appendChild(copyright);
body.appendChild(footer);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "React", "Python"];
const skillsSection = document.querySelector("skills");
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}