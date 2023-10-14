export default const horsePicsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HORSE_PICS':
            return action.payload;
        default:
            return state;
    }
}