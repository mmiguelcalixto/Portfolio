const aboutMe = document.querySelector("#about-me")
const skills = document.querySelector("#skills")
const projects = document.querySelector("#projects")
const contact = document.querySelector("#contact")

function scrollToPosition() {
    aboutMe.addEventListener("click", () => {
        scrollTo(0,500)
    })
}


