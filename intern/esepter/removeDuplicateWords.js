    function removeDuplicateWords (s) {
        // your perfect code...
        let sstr = s.split(" ");
        // console.log(sstr.length);
        let counter = {}
        for (let i = 0; i < sstr.length; i++) {
            if(counter.hasOwnProperty(sstr[i])){
                counter[sstr[i]]++;
            }
            else{
                counter[sstr[i]] = 0;
            }
        }
        let res_arr=Object.keys(counter);
        let res = "";
        for (let i = 0; i < res_arr.length; i++) {
            res+=res_arr[i]+" ";
        }
        console.log(res.substring(0,res.length-1));
    }

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');
