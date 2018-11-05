const config = require('../../../config')

const Model = require('validationmodel')

module.exports = new Model({
    id :  { type: 'Number', required: true },
    description : 'String',
    store : 'String',
    price : { type : 'Number', required: true },
    reason : 'Reason'
})