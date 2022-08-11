var countSheep = function (num){
    let sheeps = ''
    for (let i=0;i<num;i++){
      sheeps += `${i+1} sheep...`
    }
    return sheeps
}