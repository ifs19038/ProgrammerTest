function skipThree(n){
    let container = ""
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 4 === 0){
            container += "OKYES"
        }else if(i % 3 === 0){
            container += "OK"
        }else if(i % 4 === 0){
            container += "YES"
        }else{
            container += i
        }
        container += " "
    }
    return container
}

console.log(skipTree(15))