export const PageNumber =(state=1,action)=>{
switch (action.type) {
    case "next_Page":
        return state+1
    case "Prev_Pge":
return state-1
 case "number" :
     return action.paylod
    default:
        return state
}
}