const body = document.body;
const aboutSection = document.querySelector("#about-section");
const skillsSection = document.querySelector("#skills-section");
const greyContainer = document.querySelector("#grey-container");
const projectInfo = document.querySelectorAll(".project-info");
const darkModeSwitch = document.querySelector(".theme-checkbox");

const texts = [
    { text: "Miguel", elementId: "first-h1" },
    { text: "Calixto", elementId: "second-h1" },
    { text: "Desenvolvedor de software", elementId: "main-text-p" }
];
const speed = 80;
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (textIndex >= texts.length) return;

    const { text, elementId } = texts[textIndex];
    const element = document.getElementById(elementId);

    if (charIndex < text.length) {
        element.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        textIndex++;
        charIndex = 0;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    typeWriter();
};

darkModeSwitch.addEventListener("change", () =>  {
    body.classList.toggle("dark-mode");
    aboutSection.classList.toggle("dark-mode");
    skillsSection.classList.toggle("dark-mode2");
    greyContainer.classList.toggle("dark-mode");
    
    projectInfo.forEach(i => {
        i.classList.toggle("dark-mode2");
    });
})




