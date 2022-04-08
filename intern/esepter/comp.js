a1= [121, 144, 19, 161, 19, 144, 19, 11];
a2= [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
a3=[4, 0, 5, 6, 1, 0, 1, 0, 8, 0, 9, 9, 10, 8, 9, 7, 7, 6, 9, 6, 1, 4, 10];
a4=[1, 100, 36, 16, 81, 0, 81, 64, 1, 36, 49, 0, 0, 81, 25, 81, 1, 64, 1, 36, 100, 16, 49];
function comp(array1, array2) {
    //your code here
    let count = 0;
    if(array1.length===0 || array2.length===0){
        console.log(false)
        // return false
    }
    else{
        if (array1.length === array2.length) {
            for (let i = 0; i < array2.length; i++) {
                // console.log(array2[i]**0.5)
                if (array1.includes(array2[i] ** 0.5)) {
                    count++;
                }
            }
            if (count < array1.length) {
                // return false;
                console.log(false);
            } else {
                console.log(true)
                // return true
            }
        } else {
            console.log(false)
            // return false;
        }
    }
    console.log(array1.sort())
    console.log(array2.map( c => c**0.5).sort());
        console.log(count);
}

comp(a3,a4);
