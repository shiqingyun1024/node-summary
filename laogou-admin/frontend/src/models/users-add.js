import http from '../utils/http'
export const usersAdd = async (data) =>{
    try{
        let {result:res} = await http({url:'/api/users/',type:'post',data})
        return {res}
    }catch(err){
        console.log(err);
    }
}