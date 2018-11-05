const config = require('../../../config')

const Model = require('validationmodel')

module.exports = new Model({
    duration :  { type: 'Date', required: true },
    type : 'DayType',
    costs : 'Array',
    events : 'Array',
})