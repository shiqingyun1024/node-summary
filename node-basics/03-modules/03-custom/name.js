// 第一步 定义模块
const name = {
    surname:'zhang',
    sayName(){
        console.log(this.surname);
    }
}
const age = {
    age:100
}

// 第二步 暴露模块
module.exports = {name,age};

// 也可以这样暴露模块
exports.name = name;
exports.age = age;
