// Algoritma Bagian A
function algoritmaBagianA(n){
    let container = ""
    let flag = true
    for(let i = 1; i <= n;i++){
        container += i
        let cekking = i
        flag = true
        while(flag){
            if(cekking - 1 === 0){
                flag = false
                container += "\n"
            }else{
                container += i
                cekking--
            }
        }
    }
    return container
}

// Algoritma Bagian B
function algoritmaBagianB(n){
    let container = ""
    let flag = true
    for(let i = 1; i <= n;i++){
        container += i
        let cekking = i
        flag = true
        while(flag){
            if(cekking - 1 === 0){
                flag = false
                container += "\n"
            }else{
                container += cekking -1
                cekking--
            }
        }
    }
    return container
}


//Algoritma Bagian C
function algoritmaBagianC(n){
    let container = ""
    let cekking = 1
    let flag = true
    for(let i = 1; i <= n;i++){
        for(let j = 1; j <= i;j++){
            container += cekking


            if(cekking === n){
                cekking--
                flag = false
            }else if(cekking === 1 && flag === false){
                cekking++
                flag = true
            }else if(!flag){
                cekking--
            }else if(flag){
                cekking++
            }

            if(j === i){
                
                container += "\n"
                break;
            }
        }
    }
    return container
}


//Algoritma Bagian D
function algoritmaBagianD(n) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
    }

    let value = 1;

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < n; j++) {
                matrix[j][i] = value++;
            }
        } else {
            for (let j = n - 1; j >= 0; j--) {
                matrix[j][i] = value++;
            }
        }
    }


    let result = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += matrix[i][j] + " ";
        }
        result = result.trim() + "\n";
    }

    return result.trim();
}


console.log(algoritmaBagianA(5))
console.log(algoritmaBagianB(5))
console.log(algoritmaBagianC(5))
console.log(algoritmaBagianD(5))