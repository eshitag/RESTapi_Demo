const fs = require("fs");

let logUser = (username) => {
    fs.readFile('./names.txt', 'utf8', function (err, content) {
        if (content.includes(username)) {
            console.log(username)
        } else {
            fs.appendFile('./names.txt', ', ' + username, function (err) {
                if (!err) {
                    console.log('username added')
                }
            })
        }
    })
};
logUser("Uno");
