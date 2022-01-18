const header = document.querySelector("header")
header.innerHTML = (`<input type="checkbox" class="hamburgermenu">
<div class="header-content">

    <div class="logo">
        <a href="./home.html"><img src="../img/header/logo.png" alt=""></a>
    </div>
    <div class="menu">
        <ul>
            <li><a class="nav-link" href="./home.html"><span>Home</span><img src="../img/header/headermenu.png"
                        alt=""> </a></li>
            <li><a class="nav-link" href="./wines.html"><span>Wines</span><img
                        src="../img/header/headermenu.png" alt=""></a></li>
            <li><a class="nav-link" href="./winemaking.html"><span>Winemaking</span><img
                        src="../img/header/headermenu.png" alt="">
                </a></li>
        </ul>
    </div>
           <form>
                
                <span id="language_flag_am"></span>
                <span id="language_flag_en"></span>
                </form>

                
            
</div>`)




if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "en")
}


const menuText = header.querySelectorAll("ul span")

language_flag_am.addEventListener("click", function () {
    localStorage.setItem("language", "am")
    menuText[0].innerHTML = "Գլխավոր"
    menuText[1].innerHTML = "Տեսակներ"
    menuText[2].innerHTML = "Պատմություն"
})

language_flag_en.addEventListener("click", function () {
    localStorage.setItem("language", "en")
    menuText[0].innerHTML = "Home"
    menuText[1].innerHTML = "Wines"
    menuText[2].innerHTML = "Winemaking"
})

menuLanguage()
function menuLanguage() {
    {

        if (localStorage.getItem("language") == "am") {
            menuText[0].innerHTML = "Գլխավոր"
            menuText[1].innerHTML = "Տեսակներ"
            menuText[2].innerHTML = "Պատմություն"
        }
        else {
            menuText[0].innerHTML = "Home"
            menuText[1].innerHTML = "Wines"
            menuText[2].innerHTML = "Winemaking"
        }
    }
}