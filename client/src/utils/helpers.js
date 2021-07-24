const moment = require('moment')

module.exports = {
    format_date: (date) => {
        return moment(date, "x").format('dddd, MMMM Do YYYY, h:mm a')
    },

    format_address: (address) => {
        const newAddress = address.replace(/\+/g, " ");
        return newAddress;
    }
};