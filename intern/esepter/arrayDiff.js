function arrayDiff(a, b) {
    a = a.filter(function (value, index, array) {
        return array.indexOf(value) === index;
    });
    for (let i = 0; i < Math.max(a.length,b.length); i++) {
        let index = a.indexOf(b[i]);
        if (index > -1) {
            a.splice(index, 1);
        }
        // if(a.includes(b[i])){
        //     if ( a[i] === b[i]) {
        //         console.log(a[i]+", "+b[i]+" i: "+i)
        //         a.splice(i, 1);
        //     }
        // }

    }

    console.log(a);
//     return a;
}

arrayDiff([1,2,2], [2])
arrayDiff([1,2,2], [1])
// arrayDiff([1,2,3], [1,2])
// arrayDiff([], [4,5]);
// arrayDiff([3,4], [3]);
// arrayDiff([1,8,2], []);
