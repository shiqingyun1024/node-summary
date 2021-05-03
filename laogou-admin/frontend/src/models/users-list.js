export const usersList = () =>{
    return $.ajax({
        url: '/api/users/',
        type: 'get',
        headers:{
            'X-Access-Token':localStorage.getItem('lg-token') || ""
          },
        // async:false,
        success(result) {
            return result
        }
    })
}