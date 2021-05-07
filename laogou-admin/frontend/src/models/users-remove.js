export const usersRemove = (id)=>{
    return $.ajax({
        url: '/api/users/',
        type: 'delete',
        headers: {
            'X-Access-Token': localStorage.getItem('lg-token') || ""
        },
        data: {
            id
        },
        success(res) {
            return res
        }
    })
}