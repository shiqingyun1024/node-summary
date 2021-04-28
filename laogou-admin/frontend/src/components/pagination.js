import usersListPageTpl from '../views/users-pages.art'

// 设置当前页
const _setPageActive = (index) => {
    $("#users-page #users-page-list li:not(:first-child,:last-child)")
        .eq(index - 1)
        .addClass('active')
        .siblings()
        .removeClass('active')
}

// 分页函数
const pagination = (data, pageSize, curPage) => {
    const total = data.length;
    const pageCount = Math.ceil(total / pageSize)
    const pageArray = new Array(pageCount)
    const htmlPage = usersListPageTpl({
        pageArray
    })
    $("#users-page").html(htmlPage)
    _setPageActive(curPage)
    _bindEvent(curPage)
}

// 分页事件绑定
const _bindEvent = (curPage) => {
    // 分页事件绑定
    $("#users-page").on('click', '#users-page-list li:not(:first-child,:last-child)', function () {
        const index = $(this).index();
        // _list(index)
        curPage = index
        $('body').trigger('changeCurPage', index)
        _setPageActive(curPage)
    })
    $("#users-page").on('click', '#users-page-list li:first-child', function () {
        if (curPage > 1) {
            curPage--
            _list(curPage)
            _setPageActive(curPage)
        }
    })
    $("#users-page").on('click', '#users-page-list li:last-child', function () {
        if (curPage < Math.ceil(dataList.length / pageSize)) {
            curPage++
            _list(curPage)
            _setPageActive(curPage)
        }
    })
}

export default pagination