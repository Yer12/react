let song = "AWUBBWUBC";
let song2= "AWUBWUBWUBBWUBWUBWUBC";
function songDecoder(song){
    // ...
    let replacing = "";
    let res;
    for (let i = 0; i < song.length; i++) {
        if(song.substring(i,i+3)==="WUB"){
            replacing+=song.substring(i,i+3)
        }
        res.replace(replacing," ");
    }
    console.log(res);
}

songDecoder(song2);
