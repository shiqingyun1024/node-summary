export const usersAdd = (data) =>{
    return $.ajax({
        url: '/api/users/',
        type: 'post',
        headers: {
            'X-Access-Token': localStorage.getItem('lg-token') || ""
        },
        data,
        success(res) {
           return res
        }
    })
}