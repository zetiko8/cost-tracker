const config = require('../../../config')

const Model = require('validationmodel')

module.exports = new Model({
    id : { type : 'Number', required : true },
    duration :  { type: 'Date', required: true },
    type : 'EventType',
    costs : 'Array',
    events : 'Array',
})