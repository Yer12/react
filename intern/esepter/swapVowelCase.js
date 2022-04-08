function swapVowelCase(str) {
    // your code here
    let sstr="";
    const vowels = ['a','o','e','i','u'];
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            sstr+=str[i].toUpperCase();
            
        }
        else{
            sstr+=str[i];
        }
    }
    return sstr;
    // console.log(sstr);
}
swapVowelCase("C is not a vowel");
