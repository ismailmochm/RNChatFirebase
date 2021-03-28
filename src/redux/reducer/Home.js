const initHome = {
    users: [],
    usersKey: [],
}

export const homeReducer = (state=initHome, action) => {
    if(action.type === 'SET_USER') {
        return {
            ...state,
            users: action.value
        }
    }
    if(action.type === 'SET_USERKEY') {
        return {
            ...state,
            usersKey: action.value
        }
    }
    return state;
}

// const initData = {
//     name:'',
//     job:''
// }

// export const userReducer = (state = initData, action) => {
//     if(action.type === "SET_DATA") {
//         return {
//             ...state,
//             name: action.value.name,
//             job: action.value.job
//         }
//     }
//     return state;
// }