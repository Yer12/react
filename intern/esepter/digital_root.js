function digital_root(n) {
    let s=0;
    let nStr = n.toString();
    for (let i = 0; i < nStr.length; i++) {
        if(nStr.length>1){
            s+=Number(nStr[i]);
        }
    }
    if(s.toString().length>1){
        n=s;
        digital_root(n);
    }
    else{
        console.log(Number(s));
        // return s;/
    }
    // console.log(Number(-22))
}
digital_root(22);
digital_root(456);
