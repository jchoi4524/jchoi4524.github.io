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
            showOneSponsor(elem, "https://mk1yoyos.com/", "sponsors/mk1.png", "MK1 Yoyos", 150*scale);
            break;
        case 6:
            showOneSponsor(elem, "https://onedropyoyos.com/", "sponsors/onedrop.png", "One Drop Yoyos", 220*scale);
            break;
        case 7:
            showOneSponsor(elem, "https://freshlydirty.com/", "sponsors/FreshlyDirty.png", "Freshly Dirty", 130*scale);
            break;
        case 8:
            showOneSponsor(elem, "https://polyformyoyos.com", "sponsors/polyform_round.png", "Polyform", 130*scale);
            break;
        case 9:
            showOneSponsor(elem, "https://sochicompany.com/", "sponsors/sochi.png", "sochi", 170*scale);
            break;
        case 10:
            showOneSponsor(elem, "https://www.c3yoyodesign.com/", "sponsors/C3.png", "C3 yoyo design", 250*scale);
            break;
        case 11:
            showOneSponsor(elem, "https://yoyoexpert.com/", "sponsors/yoyoexpert.png", "YoYoExpert", 200*scale);
            break;
    }
}

function loadSponsors(id, scale, per_row = 4) {
    var elem = document.getElementById(id);
    
    loadOneSponsor(0, elem, scale);
    br(elem);
    
    numSponsors = 11;
    order = genRandArray(numSponsors);
    for (i = 0; i < numSponsors; i++) {
        loadOneSponsor(order[i] + 1, elem, scale);
        if (((i + 1) % per_row) == 0) {
            br(elem);
        }
    }

}
