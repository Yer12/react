function generateRange(min, max, step){
    let a = [];
    for (let i = min; i <= max; i+=step) {
        a.push(i);
        // console.log(i)
    }
    // console.log(a);
    return a;
}

generateRange(2, 10, 2);
