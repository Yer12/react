function rgb2(r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    let sstr = "";
    sstr += "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    console.log(sstr.substring(1,sstr.length));
    // return sstr.substring(1,sstr.length);
}

rgb2(0, 0, 0);
rgb2(0, 0, -20);
