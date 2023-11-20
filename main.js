window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenScrolled * 100, 100))
    console.log(Math.min(percentOfScreenScrolled * 100, 100))
}

setScrollVar()