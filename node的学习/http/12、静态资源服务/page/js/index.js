// 获取所有的td
let tds = document.querySelectorAll('td');
// 遍历
tds.forEach(item => {
    item.onclick = function () {
        this.style.background = '#2195de'
    }
})