function digPow(n, p){
    let num = 0;
    for (let i = 0; i < n.toString().length; i++) {
        num += Number(n.toString()[i])**(p+i);
    }
    // console.log(num/n);
    //
    if(Number(Number.isInteger(num/n))){
        // return -1
        console.log(num/n)
    }
    else{
        console.log(-1)
    }
    // console.log(Number.isInteger(0.14130434782608695));
}

digPow(89, 1);
digPow(92, 1);
digPow(695, 2)
digPow(46288, 3)
