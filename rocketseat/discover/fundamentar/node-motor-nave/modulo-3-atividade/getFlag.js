function getFlag(flag){
    let i = 0
    for (const element of process.argv){
        if(element == flag){
            return process.argv[i+1]
        }
        i++
    }
}

module.exports = {getFlag}