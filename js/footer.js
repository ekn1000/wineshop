const footer = document.querySelector("footer")
footer.innerHTML = (`<div id=copyright>
<span>© Wine House - All Rights Reserved 2021</span>
</div>

<div><span>
    <a target="_blank" href="https://beeoncode.com/"> beeoncode.com</a></span>
</div>

<a href="#" class="toTop" title="to top"><img src="../img/totop.png" alt=""></a>`)
const footerText = footer.querySelector("#copyright span")
language_flag_en.addEventListener("click", function () {
    localStorage.setItem("language","am");
    footerText.innerHTML = "© Wine House - Բոլոր իրավունքները պաշտպանված են 2021"
    footerLanguage()
})


language_flag_am.addEventListener("click", function () {
    localStorage.setItem("language","en");
    footerText.innerHTML = "© Wine House - All Rights Reserved 2021"
    footerLanguage()
})

footerLanguage()
function footerLanguage() {
    {
        if (localStorage.getItem("language") == "en") {
            footerText.innerHTML = "© Wine House - All Rights Reserved 2021"
        }
        else {
            footerText.innerHTML = "© Wine House - Բոլոր իրավունքները պաշտպանված են 2021"
        }
    }
}