var homeHTML = "";

function loadHomeString() {
    homeHTML = document.getElementById("card-slot").innerHTML;
}

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
    } else if (element.id == "upcoming") {
        loadJSON("features.json", function(response) {
            document.getElementById("card-slot").innerHTML = JSON.parse(response)["upcoming"];
        });
    } else {
        loadModule(element.id);
    }
}

function loadModule(moduleName) {
    loadJSON("features.json", function(response) {
        var json = JSON.parse(response);
        var module = json[moduleName]
        for (i in module) {
            var feature = module[i];
            var id = feature["id"];
            var name = feature["name"];
            var desc = feature["desc"];
            var advDesc = feature["advDesc"];


            var cardSlot = document.getElementById("card-slot");
            cardSlot.innerHTML = cardSlot.innerHTML + '<div class="card bg-light">' +
                '<div class = "card-body p-0" >' +
                '<div class = "row no-gutters" > ' +
                //Image region
                '<div class="image-region col-md-3">' +
                ((feature["video"] == null || feature["video"] == false) ?
                    '<img src="../assets/vanillatweaks/' + moduleName + '/' + id + '.png' + '" alt="Picture representing ' + name + '" onerror="removeImageRegion(this);" class="img-thumbnail m-sm-2">' :
                    '<video onerror="removeImageRegion(this);" loop="" onmouseover="play(this);" onmouseout="pause(this);" width="267">Your browser does not support HTML5 video.<source src="../assets/vanillatweaks/' + moduleName + '/' + id + '.webm" type="video/webm"></video>'
                ) +
                '</div>' +
                //Text region
                '<div class="text-region col-md-9 p-4">' +
                '<a name="' + id + '"><h3>' + name + '</h3></a><div name="description"><p>' + desc + '</p></div>' +
                (advDesc != null ?
                    '<a data-toggle="collapse" href="#more_' + id + '" role="button" aria-expanded="true" aria-controls="more_' + id + '" class="">Show more</a>' +
                    '<div class="collapse" id="more_' + id + '">' + advDesc + '</div>' :
                    '')
            '</div>'
            '</div></div></div>';
        }
    });
}