const language_flag_am = document.getElementById("language_flag_am")
const language_flag_en = document.getElementById("language_flag_en")
const language = document.getElementById("language")

if (localStorage.getItem("language") == "en") {
    language_flag_en.style.transform = "rotateY(180deg)"
    language_flag_am.style.transform = "rotateY(360deg)"
} else {
    language_flag_am.style.transform = "rotateY(180deg)"
    language_flag_en.style.transform = "rotateY(360deg)"
}

language_flag_en.addEventListener("click", function () {
    localStorage.setItem("language", "en")
    language_flag_en.style.transform = "rotateY(180deg)"
    language_flag_am.style.transform = "rotateY(360deg)"
})

language_flag_am.addEventListener("click", function () {
    localStorage.setItem("language", "am")
    language_flag_am.style.transform = "rotateY(180deg)"
    language_flag_en.style.transform = "rotateY(360deg)"
})

if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "en")
}