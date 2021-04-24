const bcrypt = require('bcrypt');

exports.hash = (myPlaintextPassword)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
                if(err){
                    reject(err)
                }
                resolve(hash);
            });
        });
    })
}

// 对比密码的方法
exports.compare = (myPlaintextPassword, hash)=>{
    console.log(myPlaintextPassword);
    console.log(hash);
    return new Promise((resolve,reject)=>{
        bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
            console.log(123);
            console.log(result);
            resolve(result)
            // result == true
        });
    })
}