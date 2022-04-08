let walk = ['n','s','n','s','n','s','n','s','n','s'];
let walk2 = ['n','n','n','s','n','s','n','a','n','s'];
let walk3 = ['w','e','n','n','n','s','s','n','s','s'];
let walk4 = ['e', 'w', 'e', 'w', 'n', 's', 's', 'e', 'n', 'w'];
let walk5 = ['e', 'w', 'e', 'w', 'e', 's', 'n', 's', 'e', 'w'];
let walk6 = ['e','e','e','e','w','w','s','s','s','s',];
function isValidWalk(walk) {
    const walkEl = ['e', 'w','n', 's' ];
    let counter = {
        'n': 0,
        's': 0,
        'w': 0,
        'e': 0,
    };
    if(walk.length===10){
        for (let i = 0; i < walk.length; i++) {
            // console.log(walkEl.indexOf(walk[i]))
            counter[walk[i]] += 1;

        }
        if(counter["s"]===counter["n"] &&
            counter["e"]===counter["w"] &&
            (counter["s"] !== 0 &&
                counter["n"] !== 0) ||
            (counter["e"] !== 0 && counter["w"] !== 0)){
            return true
            // console.log(true)
        }
        else {
            return false
            // console.log(false)
        }
    }
    else{
        return false
        // console.log(false)
    }
    // console.log(counter)
}



isValidWalk(walk6);
