function loadJSON(path, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
}

function getDataForElement(element, index, array) {
    var id = element.id;
    if (id != "") {
        httpGetAsync(element, element.getAttribute("api"), fillInfoForResponse);
    }
}

function httpGetAsync(element, theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(element, xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send();
}

function fillInfoForResponse(element, response) {
    var downloads = document.querySelectorAll("div#" + element.id + " .element_downloads");
    var title = document.querySelectorAll("div#" + element.id + " .element_text");
    var link = document.querySelectorAll("div#" + element.id + " .element_link");
    var img = document.querySelectorAll("div#" + element.id + " .element_img");
    var obj = JSON.parse(response);
    downloads[0].innerHTML = numberWithCommas(obj.downloads.total) + " Downloads";
    title[0].innerHTML = obj.title;
    link[0].setAttribute("href", obj.urls.curseforge);
    img[0].setAttribute("src", obj.thumbnail.replace("120/120/", "").replace("thumbnails/", ""));
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setupMods() {
    var cardSlot = document.getElementById("card-slot");
    cardSlot.innerHTML = cardSlot.innerHTML + '<h1 id="title">My Mods</h1>';
    loadJSON("mods.json", function(response) {
        var json = JSON.parse(response);
        var modloader = ["forge", "fabric"];
        for (i in modloader) {
            cardSlot.innerHTML = cardSlot.innerHTML + '<h3><u>Mods for ' + modloader[i] + '</u></h3>';
            cardSlot.innerHTML = cardSlot.innerHTML + '<div class="card-deck justify-content-center" id="' + modloader[i] + '"></div>';
            var mods = json[modloader[i]];
            for (j in mods) {
                var mod = mods[j];
                var loader = document.getElementById(modloader[i]);
                loader.innerHTML = loader.innerHTML + '<div class="card element" id="' + mod["id"] + '" api="' + mod["api"] + '">' +
                    '<a class="element_link" href="">' +
                    '<img src="" class="card-img-top element_img" alt="No Connection to CF API">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title element_text"></h5>' +
                    '<div class="element_downloads card-text">? Downloads</div>' +
                    '</div></a></div>';
            }
        }
        Array.from(document.getElementsByClassName("element")).forEach(getDataForElement);
    });
}