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
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}


const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log(name, email, message);

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href='mailto:${email}'>${name}</a>
    <span>${message}</span>`;
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.removeChild();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});