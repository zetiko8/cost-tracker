var items /* Circumstance */= [
    {
        id : 1,
    },
    {
        id : 2, 
    },
    {
        id : 3, 
    },
]

module.exports = {
    get (id, callback) {
        for(let i = 0; i<items.length; i++){
            if(items[i].id === id){
                callback(null, JSON.parse(JSON.stringify(items[i])))
                return
            }
        }
        callback(Error('Item not found'))
    },
    add (item, callback) {
        items.push(JSON.parse(JSON.stringify(item)))
        callback(null)
        return
    },
    delete (id, callback) {
        for(let i = 0; i<items.length; i++){
            if(items[i].id === id){
                items.splice(i, 1)
                callback(null)
                return
            }
        }
        callback(Error('Item not found'))
    }
}