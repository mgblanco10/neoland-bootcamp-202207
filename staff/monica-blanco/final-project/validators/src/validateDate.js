function validateDate(date) {
    if  (isNaN(date.getTime())) throw new TypeError('date is not valid')
}
module.exports = validateDate

