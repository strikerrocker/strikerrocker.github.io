function onCheckThemeBox(first, index, lightCSS, darkCSS) {
    if (document.getElementById("themebox").checked) {
        if (document.querySelector('link[href="' + lightCSS + '"]') != null) {
            document.querySelector('link[href="' + lightCSS + '"]').href = darkCSS;
        }
        document.cookie = "dark=true;";
    } else {
        if (document.querySelector('link[href="' + darkCSS + '"]') != null) {
            document.querySelector('link[href="' + darkCSS + '"]').href = lightCSS;
        }
        document.cookie = "dark=false;";

    }
    if (index == true) {
        if (first == true) {
            setTimeout(elementsTheme, 3000);
        } else {
            elementsTheme();
        }
    }
    if (lightCSS == "../styles/vanillatweaks/light.css") {
        var elements = document.getElementsByClassName("card");
        var dark = document.getElementById("themebox").checked;
        Array.from(elements).forEach(element => {
            if (dark == true) {
                element.classList.toggle("bg-light", false);
                element.classList.toggle("bg-dark", true);
            } else {
                element.classList.toggle("bg-light", true);
                element.classList.toggle("bg-dark", false);
            }
        });
    }
}

function elementsTheme() {
    if (document.getElementById("themebox").checked) {
        document.getElementById("discord").src = "https://discordapp.com/widget?id=325065492899299328&theme=dark";
        document.getElementById("github").src = "assets/github_dark.png";
        document.getElementById("twitter").src = "assets/twitter_dark.png";
        if (document.getElementById("twitter-widget-0") != null && document.getElementById("twitter-widget-1") != null) {
            document.getElementById("twitter-widget-0").hidden = true;
            document.getElementById("twitter-widget-1").hidden = false;
        } else {
            setTimeout(elementsTheme, 2000);
        }
    } else {
        document.getElementById("discord").src = "https://discordapp.com/widget?id=325065492899299328&theme=light";
        document.getElementById("github").src = "assets/github_light.png";
        document.getElementById("twitter").src = "assets/twitter_light.png";
        if (document.getElementById("twitter-widget-0") != null && document.getElementById("twitter-widget-1") != null) {
            document.getElementById("twitter-widget-0").hidden = false;
            document.getElementById("twitter-widget-1").hidden = true;
        } else {
            setTimeout(elementsTheme, 2000);
        }
    }
}