function anagrams(word, words) {
    let arr = [];
    for (let i = 0; i < words.length; i++) {

        if(word.length===words[i].length){
            if(JSON.stringify(words[i].split('').sort())==JSON.stringify(word.split('').sort())){
                arr.push(words[i]);
            }
        }
    }
    // console.log(arr);
    return arr;
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
