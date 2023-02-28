const initialState={
    id:"",
    userName:"",
    isuserLoggedin:false
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
       case "add_user":
        return {
            ...state, id:action.id
        }
    case "change_name":
        return{
            ...state, userName:action.userName
        }
        default:state
    }
}
export default userReducer;

