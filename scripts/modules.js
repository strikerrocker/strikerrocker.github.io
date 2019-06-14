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
            var titleLine = document.createElement("H3");
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
            //image/Video
            var imageOrVideo
            if (feature["video"] == null || feature["video"] == false) {
                imageOrVideo = document.createElement("IMG");
                var imageAltAtt = document.createAttribute("alt");
                imageAltAtt.value = "Picture representing " + name;
                var picFormat = feature["picFormat"] == null ? ".png" : feature["picFormat"];
                var imageSrcAtt = document.createAttribute("src");
                imageSrcAtt.value = "../assets/vanillatweaks/" + moduleName + "/" + id + picFormat;
                var imageErrorAtt = document.createAttribute("onerror");
                imageErrorAtt.value = "removeImageRegion(this);";
                var imageClassAtt = document.createAttribute("class");
                imageClassAtt.value = "img-thumbnail m-sm-2";
                imageOrVideo.setAttributeNode(imageSrcAtt);
                imageOrVideo.setAttributeNode(imageAltAtt);
                imageOrVideo.setAttributeNode(imageErrorAtt);
                imageOrVideo.setAttributeNode(imageClassAtt);
            } else {
                imageOrVideo = document.createElement("VIDEO");
                var videoWidthAtt = document.createAttribute("width");
                videoWidthAtt.value = 267;
                var videoHeightAtt = document.createAttribute("height");
                videoHeightAtt.value = 267;
                var videoErrorAtt = document.createAttribute("onerror");
                videoErrorAtt.value = "removeImageRegion(this);";
                var videoMouseOverAtt = document.createAttribute("onmouseover");
                videoMouseOverAtt.value = "play(this);";
                var videoMouseOutAtt = document.createAttribute("onmouseout");
                videoMouseOutAtt.value = "pause(this);";
                // imageOrVideo.setAttributeNode(videoHeightAtt);
                imageOrVideo.setAttributeNode(videoWidthAtt);
                imageOrVideo.setAttributeNode(videoErrorAtt);
                imageOrVideo.setAttributeNode(videoMouseOverAtt);
                imageOrVideo.setAttributeNode(videoMouseOutAtt);

                var videoSource = document.createElement("SOURCE");
                var videoSrcAtt = document.createAttribute("src");
                videoSrcAtt.value = "../assets/vanillatweaks/" + moduleName + "/" + id + ".webm";
                var videoTypeAtt = document.createAttribute("TYPE");
                videoTypeAtt.value = "video/webm";
                videoSource.setAttributeNode(videoSrcAtt);
                videoSource.setAttributeNode(videoTypeAtt);

                var videoNotSupported = document.createTextNode("Your browser does not support HTML5 video.");
                imageOrVideo.appendChild(videoNotSupported);
                imageOrVideo.appendChild(videoSource);
            }

            titleLink.appendChild(titleLine);
            descDiv.appendChild(descLine);
            textRegion.appendChild(titleLink);
            textRegion.appendChild(descDiv);
            if (advDesc != null) {
                textRegion.appendChild(moreDescLink);
                textRegion.appendChild(moreDescDiv);
            }
            imageRegion.appendChild(imageOrVideo);
            rowNoGutters.appendChild(imageRegion);
            rowNoGutters.appendChild(textRegion);
            cardBody.appendChild(rowNoGutters);
            cardLight.appendChild(cardBody);
            document.getElementById("card-slot").appendChild(cardLight);
        }
    });
}