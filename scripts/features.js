function loadJSON(path, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

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

            titleLink.appendChild(titleLine);
            descDiv.appendChild(descLine);
            textRegion.appendChild(titleLink);
            textRegion.appendChild(descDiv);
            rowNoGutters.appendChild(textRegion);
            cardBody.appendChild(rowNoGutters);
            cardLight.appendChild(cardBody);
            document.getElementById("card-slot").appendChild(cardLight);
        }
    });
}