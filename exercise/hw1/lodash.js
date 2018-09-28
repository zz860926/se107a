const _ = module.exports = {}

_.tail = function(array){
    clist = []
    for(i=1;i<array.length;i++){
        clist.push(array[i])
    }
    return clist
}

_.reverse = function(array){
    clist = []
    clist = array.reverse()
    return clist
} 

_.join = function(array,a){
    clist = ''
    clist = array.join(a)
    return clist
}