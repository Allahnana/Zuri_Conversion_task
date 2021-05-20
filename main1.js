function checkYuGiOh(x){
    let output = []
    if(isNaN(x)){
        return `invalid parameter ${z}`
    } else {
        for(let y = 1; b <= x; b++){
            let input = []
            if(y % 2 == 0){
                inputVal.push(`Yu`)
            }
            if(y % 3 == 0){
                inputVal.push(`Gi`)
            }
            if(y % 5 == 0){
                inputVal.push(`Oh`)
            }
            if(inputVal.length > 0){
                output.push(saveValue.join(`-`))
            } else {
                output.push(b)
            }

        }

        return output
    }


}