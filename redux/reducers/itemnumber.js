export const itemnumber=(state=12,action)=>{
switch (action.type) {
    case "itemShow":
        return action.paylod

    default:
        return state ;
}
}