Array.from(document.getElementsByClassName("element")).forEach(getDataForElement);

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
    xmlHttp.send(null);
}

function fillInfoForResponse(element, response) {
    console.log(response);
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