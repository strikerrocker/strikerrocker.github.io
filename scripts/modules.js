var homeHTML = "";
var headerHTML = "";
var moduleJson;

function setup(){
    homeHTML = document.getElementById("card-slot").innerHTML;
    headerHTML = document.getElementById("header").innerHTML;
    loadJSON("features.json", function (response) {
        moduleJson = JSON.parse(response);
    });
}

function loadJSON(path, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
}

function removeImageRegion(image) {
    image.onerror = null;
    var imageRegion = image.parentElement;
    imageRegion.parentElement.removeChild(imageRegion);
    console.log("Removed image region because image src=" + image.getAttribute("src") + " was not found.")
}

function pause(video) {
    video.pause();
}

function play(video) {
    if (video.paused)
        video.play();
}

function setupPill(element) {
    document.getElementById("card-slot").innerHTML = null;
    document.title = element.childNodes[0].nodeValue;
    var c = element.parentElement.children;
    var i;
    for (i = 0; i < c.length; i++) {
        if (c[i].classList.contains("active")) {
            c[i].classList.remove("active");
        }
    }
    if (!element.getAttribute("class").includes("active"))
        element.setAttribute("class", element.getAttribute("class") + " active");
    if (element.id == "home") {
        document.getElementById("card-slot").innerHTML = homeHTML;
        document.getElementById("header").innerHTML = headerHTML;
    } else {
        loadModule(element.id);
        document.getElementById("header").classList.remove("splash");
        document.getElementById("header").innerHTML = "";
    }
}

function loadModule(moduleName) {
    var module = moduleJson[moduleName]
    for (i in module) {
        var feature = module[i];
        var id = feature["id"];
        var name = feature["name"];
        var desc = feature["desc"];
        var advDesc = feature["advDesc"];
        var versionString = "<h6>Supported Forge Versions : ";
        var versions = feature["versions"];
        var fabricVersionString = "<h6>Supported Fabric Versions : ";
        var fabric_versions = feature["fabric_versions"];
        for (j in versions) {
            versionString = versionString + "<span class='badge badge-primary'>" + versions[j] + "</span>&ensp;";
        }
        for (j in fabric_versions) {
            fabricVersionString = fabricVersionString + "<span class='badge badge-primary'>" + fabric_versions[j] + "</span>&ensp;";
        }
        versionString = versionString + "</h6>";
        fabricVersionString = fabricVersionString + "</h6>";
        if (fabric_versions.length == 0)
            fabricVersionString = "";
        var cardSlot = document.getElementById("card-slot");
        cardSlot.innerHTML = cardSlot.innerHTML + '<div class="card element bg-light">' +
            '<div class = "card-body p-0" >' +
            '<div class = "row no-gutters" > ' +
            //Image region
            '<div class="image-region col-md-3">' +
            ((feature["video"] == null || feature["video"] == false) ?
                '<img src="../assets/vanillatweaks/' + moduleName + '/' + id + '.png' + '" alt="Picture representing ' + name + '" onerror="removeImageRegion(this);" class=" m-sm-2">' :
                '<video onerror="removeImageRegion(this);" loop="" onmouseover="play(this);" onmouseout="pause(this);" width="267">Your browser does not support HTML5 video.<source src="../assets/vanillatweaks/' + moduleName + '/' + id + '.webm" type="video/webm"></video>'
            ) +
            '</div>' +
            //Text region
            '<div class="text-region col-md-9 p-4">' +
            '<a name="' + id + '"><h3><b>' + name + '</b></h3></a><div name="description"><h6>' + desc + '</h6></div>' +
            (advDesc != null ?
                '<a data-toggle="collapse" href="#more_' + id + '" role="button" aria-expanded="true" aria-controls="more_' + id + '"><h6>Show more</h6></a>' +
                '<div class="collapse" id="more_' + id + '"><h6>' + advDesc + '</h6></div>' :
                '') + versionString + fabricVersionString

        '</div>'
        '</div></div></div>';
        onCheckThemeBox(false, false, '../styles/vanillatweaks/light.css', '../styles/vanillatweaks/dark.css');
    }
}