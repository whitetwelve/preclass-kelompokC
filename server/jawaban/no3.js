let result = "\n"

function segitigaTerbalik(x) {
    for(let i = 0; i < x; i++){
        for(let space = 0; space < i; space++){
            result += " ";
        }
        
        for (let y = x; y>i; y--) {
            result += " +";
        }
        result += "\n"
    }
    return result
}

console.log(segitigaTerbalik(5))