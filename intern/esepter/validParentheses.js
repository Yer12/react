function validParentheses(parens){
    console.log(parens);
    let counter = 0;
    for (let i = 0; i < parens.length; i++) {
        if(counter<0){
            break
        }
        else{
            if(parens[i]==="("){
                counter++;
            }
            else{
                counter--;
            }
        }
    }
    if(counter===0){
        // console.log(true);
        return true;
    }
    else{
        return false
        // console.log(false);
    }
}

validParentheses(")()()()(");
validParentheses(")(()))");
validParentheses("(())((()())())");
