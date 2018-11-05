const config = require('../../../config')

const Model = require('validationmodel')

module.exports = new Model({
    id : { type : 'Number', required : true },
    name : { type : 'String', required : true },
    description : 'String'
})