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
    
function genRandArray(max) {
    array = new Array();
    for (i = 0; i < max; i++) {
        do {
            num = Math.floor(Math.random() * max);
        } while (array.includes(num));
        array.push(num);
    }
    
    return array;
}

function loadOneSponsor(num, elem, scale) {
    switch (num) {
        case 0:
            showOneSponsor(elem, "https://duncantoys.com/", "sponsors/duncan.png", "Duncan", 350*scale); 
            break;
        case 1:
            showOneSponsor(elem, "https://raincityskills.com/", "sponsors/raincity.png", "Rain City Skills", 130*scale);
            break;
        case 2:
            showOneSponsor(elem, "https://www.layerinfinity.com/", "sponsors/layerinfinity.png", "Layer Infinity", 180*scale);
            break;
        case 3:
            showOneSponsor(elem, "https://www.motionyoyo.com/", "sponsors/motion_yoyo.png", "Motion YoYo", 180*scale);
            break;
        case 4:
            showOneSponsor(elem, "https://www.44emporium.com/", "sponsors/44emporium.png", "44 Emporium", 260*scale);
            break;
        case 5:
            showOneSponsor(elem, "https://mk1yoyos.com/", "sponsors/mk1.png", "MK1 yoyos", 150*scale);
            break;
    }
}

function loadSponsors(id, scale) {
    var elem = document.getElementById(id);
    
    loadOneSponsor(0, elem, scale);
    br(elem);
    
    numSponsors = 5;
    order = genRandArray(numSponsors);
    for (i = 0; i < numSponsors; i++) {
        loadOneSponsor(order[i] + 1, elem, scale);
        if (((i + 1) % 3) == 0) {
            br(elem);
        }
    }

}
