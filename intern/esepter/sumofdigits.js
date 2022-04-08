function sum(digits) {
    let s=0;
    let sStr = "";
    let nStr = digits.toString();
    let res;
    if(digits===NaN){
        console.log("");
    }
    else{
        if(nStr.length === 1){
            sStr += nStr + " = "+ nStr;
            console.log(sStr);
            // return sStr;
        }
        else {
            for (let i = 0; i < nStr.length; i++) {

                if(nStr.length>1){
                    sStr+=nStr[i]+" + ";
                    s+=Number(nStr[i]);
                }
            }
            res = sStr.substring(0, sStr.length - 2)
            res+= "= "+s;
            // return res;
            console.log(res);
        }
    }




}

sum();
