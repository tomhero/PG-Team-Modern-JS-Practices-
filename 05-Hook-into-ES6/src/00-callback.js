function isUserTooYoung(id, callback) {
    openDatabase(function (db) {
        getCollection(db, 'users', function (col) {
            find(col, {
                'id': id
            }, function (result) {
                result.filter(function (user) {
                    callback(user.age < cutoffAge);
                });
            });
        });
    });
}

function isUserTooYoung(id) {
    return openDatabase() // returns a promise
        .then(function (db) {
            return getCollection(db, 'users');
        })
        .then(function (col) {
            return find(col, {
                'id': id
            });
        })
        .then(function (user) {
            return user.age < cutoffAge;
        })
}

isUserTooYoung(2)
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally(() => cleanSomething())

// TODO: change to ES6 syntax