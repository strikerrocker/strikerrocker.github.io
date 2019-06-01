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
            //more desc link
            var moreLinkDataAtt = document.createAttribute("data-toggle");
            moreLinkDataAtt.value = "collapse";
            var moreLinkHrefAtt = document.createAttribute("href");
            moreLinkHrefAtt.value = "#more_" + id;
            var moreLinkRoleAtt = document.createAttribute("role");
            moreLinkRoleAtt.value = "button";
            var moreLinkAriaExpandAtt = document.createAttribute("aria-expanded");
            moreLinkAriaExpandAtt.value = "false";
            var moreLinkAriaCtrlAtt = document.createAttribute("aria-controls");
            moreLinkAriaCtrlAtt.value = "more_" + id;
            var showMoreNode = document.createTextNode("Show more");
            var moreDescLink = document.createElement("A");
            moreDescLink.setAttributeNode(moreLinkDataAtt);
            moreDescLink.setAttributeNode(moreLinkHrefAtt);
            moreDescLink.setAttributeNode(moreLinkRoleAtt);
            moreDescLink.setAttributeNode(moreLinkAriaExpandAtt);
            moreDescLink.setAttributeNode(moreLinkAriaCtrlAtt);
            moreDescLink.appendChild(showMoreNode);
            //more desc div
            var moreDivClassAtt = document.createAttribute("class");
            moreDivClassAtt.value = "collapse";
            var moreDivIdAtt = document.createAttribute("id");
            moreDivIdAtt.value = "more_" + id;
            var moreDescDiv = document.createElement("DIV");
            moreDescDiv.setAttributeNode(moreDivClassAtt);
            moreDescDiv.setAttributeNode(moreDivIdAtt);
            moreDescDiv.innerHTML = advDesc;
            //image region
            var imageRegionAtt = document.createAttribute("class");
            imageRegionAtt.value = "image-region col-md-3";
            var imageRegion = document.createElement("DIV");
            imageRegion.setAttributeNode(imageRegionAtt);
            //image
            var imageAltAtt = document.createAttribute("alt");
            imageAltAtt.value = "Picture representing " + name;
            var picFormat = feature["picFormat"] == null ? ".png" : feature["picFormat"];
            var imageSrcAtt = document.createAttribute("src");
            imageSrcAtt.value = "../assets/vanillatweaks/" + moduleName + "/" + id + picFormat;
            var image = document.createElement("IMG");
            image.setAttributeNode(imageSrcAtt);
            image.setAttributeNode(imageAltAtt);

            titleLink.appendChild(titleLine);
            descDiv.appendChild(descLine);
            textRegion.appendChild(titleLink);
            textRegion.appendChild(descDiv);
            if (advDesc != null) {
                textRegion.appendChild(moreDescLink);
                textRegion.appendChild(moreDescDiv);
            }
            imageRegion.appendChild(image);
            rowNoGutters.appendChild(imageRegion);
            rowNoGutters.appendChild(textRegion);
            cardBody.appendChild(rowNoGutters);
            cardLight.appendChild(cardBody);
            document.getElementById("card-slot").appendChild(cardLight);
        }
    });
}