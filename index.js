var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.date();
    currentTime.setTimezone("Europe/London");
    callback(null, {
        statusCode: '200',
        body: 'The time in London is: ' + currentTime.toString(),
    })

};
