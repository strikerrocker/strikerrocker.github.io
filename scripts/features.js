var pictureFormats = [".png", ".gif"];

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

function fileExists(path) {
    var http = new XMLHttpRequest();
    http.open('HEAD', path, true);
    http.onreadystatechange = function() {
        if (http.status == 404) {
            console.log("Resource not found " + path)
            return false;
        } else {
            console.log("Resource found for " + path)
            return true;
        }
    }
    http.send(null);
}

function loadModule(moduleName) {
    loadJSON("features.json", function(response) {
        var json = JSON.parse(response);
        var module = json[moduleName]
        for (i in module) {
            var feature = module[i];
            var id = feature["id"];
            var name = feature["name"];
            var desc = feature["description"];
            //card body
            var cardBodyAtt = document.createAttribute("class");
            cardBodyAtt.value = "card-body p-0";
            var cardBody = document.createElement("DIV");
            cardBody.setAttributeNode(cardBodyAtt);
            //card light
            var cardLightAtt = document.createAttribute("class");
            cardLightAtt.value = "card bg-light";
            var cardLight = document.createElement("DIV");
            cardLight.setAttributeNode(cardLightAtt);
            //row no gutter
            var rowAtt = document.createAttribute("class");
            rowAtt.value = "row no-gutters";
            var rowNoGutters = document.createElement("DIV");
            rowNoGutters.setAttributeNode(rowAtt);
            //text region
            var textRegionAtt = document.createAttribute("class");
            textRegionAtt.value = "text-region col-md-9 p-4";
            var textRegion = document.createElement("DIV");
            textRegion.setAttributeNode(textRegionAtt);
            //title
            var titleLinkAtt = document.createAttribute("name");
            titleLinkAtt.value = id;
            var titleLink = document.createElement("A");
            titleLink.setAttributeNode(titleLinkAtt);
            //title
            var titleNode = document.createTextNode(name);
            var titleLine = document.createElement("H4");
            titleLine.appendChild(titleNode);
            //desc div
            var descDivAtt = document.createAttribute("name");
            descDivAtt.value = "description";
            var descDiv = document.createElement("DIV");
            descDiv.setAttributeNode(descDivAtt);
            //desc
            var descLine = document.createElement("P");
            descLine.innerHTML = desc;
            //image region
            var imageRegionAtt = document.createAttribute("class");
            imageRegionAtt.value = "image-region col-md-3";
            var imageRegion = document.createElement("DIV");
            imageRegion.setAttributeNode(imageRegionAtt);
            //image
            var imageAltAtt = document.createAttribute("ALT");
            imageAltAtt.value = "Picture representing " + name;
            var picFormat;
            for (x in pictureFormats) {
                if (fileExists("../assets/vanillatweaks/" + moduleName + "/" + id + pictureFormats[x])) {
                    picFormat = pictureFormats[x];
                    break;
                }
            }
            if (picFormat == null) picFormat = ".png";
            var imageSrcAtt = document.createAttribute("src");
            imageSrcAtt.value = "../assets/vanillatweaks/" + moduleName + "/" + id + picFormat;
            var image = document.createElement("IMG");
            image.setAttributeNode(imageSrcAtt);
            image.setAttributeNode(imageAltAtt);

            titleLink.appendChild(titleLine);
            descDiv.appendChild(descLine);
            textRegion.appendChild(titleLink);
            textRegion.appendChild(descDiv);
            imageRegion.appendChild(image);
            rowNoGutters.appendChild(imageRegion);
            rowNoGutters.appendChild(textRegion);
            cardBody.appendChild(rowNoGutters);
            cardLight.appendChild(cardBody);
            document.getElementById("card-slot").appendChild(cardLight);
        }
    });
}