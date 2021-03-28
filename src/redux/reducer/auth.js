const initialRegister = {
    name: '',
    email: '',
    handphone:'',    
    password:'',
}

export const registerReducer = (state = initialRegister, action) => {
    if (action.type === "SET_REGISTER") {
        return {
            ...state,
            email: action.value.email,
            handphone: action.value.handphone,
            password: action.value.password,
            uid: action.value.uid
        }
    }
    return state;
}

const initialLogin = {
    email: '',
    password: ''
}

export const loginReducer = (state = initialLogin, action) => {
    if (action.type === "SET_LOGIN") {
        return {
            ...state,
            email: action.value.email,
            password: action.value.password
        }
    }
    return state;
}