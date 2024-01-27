function showOneSponsor(elem, url, imgsrc, alt, width) {
    var link = document.createElement("a");
    link.target = "_blank";
    link.href = url;

    var img = document.createElement("img");
    img.src = imgsrc;
    img.width = width;
    img.alt = alt;

    elem.appendChild(link).appendChild(img);
}

function br(elem) {
    elem.appendChild(document.createElement("br"));
}
    

function loadSponsors(id, scale) {
	return;
}
