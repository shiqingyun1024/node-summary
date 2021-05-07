import http from '../utils/http'
export const usersRemove = async (id)=>{
    try{
        let {result:res} = await http({url:'/api/users/',type:'delete',data:{id}})
        return {res}
    }catch(err){
        console.log(err);
    }
}