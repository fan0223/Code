//               預設狀態:0 , 傳入動作
const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }

}

export default reducer;