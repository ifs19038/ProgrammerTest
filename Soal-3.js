function removeThree(n){
    let container = []
    for(let i = 0; i < n.length; i++){
        if(n[i]%3 !== 0){
            container.push(n[i])
        }
    }

    let result = container.sort((a,b)=>a-b)

    return result;
}

let arr = [12,9,13,6,10,4,7,2]

console.log("n = ", removeThree(arr))