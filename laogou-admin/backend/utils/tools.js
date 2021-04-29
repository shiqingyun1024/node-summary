const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

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

exports.sign = (username) =>{
    const privateKey = fs.readFileSync(path.join(__dirname,'../keys/rsa_private_key.pem'))
    const token = jwt.sign({username},privateKey,{algorithm:'RS256'})
    return token
}
exports.verify = (token) =>{
    const publicKey = fs.readFileSync(path.join(__dirname,'../keys/rsa_public_key.pem'))
    const result = jwt.verify(token,publicKey)
    return result
}