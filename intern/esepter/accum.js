let s = "ZpglnRxqenU";
function accum(s) {
    // your code
    let res = "";
    for (let i = 0; i < s.length; i++) {
        res+= s[i].toUpperCase() + s[i].repeat(i).toLowerCase()+"-";
    }
    res = res.substring(0,res.length-1);
    // console.log(res);
    return res;
}

accum(s);
