export const dataFetchPost = (state = [], action) => {

    console.log('action :', action)

    switch (action.type) {
        case "POST_SUCCESS":
            console.log("POST_SUCCESS")
            console.log(action.postData)
            return action.postData
        case "POST_FAILD":
            return action.message
        case "GET_DATAPOST_REQUESTED":
            console.log('GET_DATAPOST_REQUESTED')
            return []
        default:
            return state;
    }
}