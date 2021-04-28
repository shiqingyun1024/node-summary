class Page{
    constructor(){
        this.pageSize = 10
        this.curPage = 1
    }
    setCurPage(curPage){
        this.curPage = curPage;
    }
}

export default new Page()