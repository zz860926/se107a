const _ = module.exports = {}

_.tail = function(array){
    clist = []
    for(i=1;i<array.length;i++){
        clist.push(array[i])
    }
    return clist
}
