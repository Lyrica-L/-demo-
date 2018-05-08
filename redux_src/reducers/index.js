export default (state=0,action)=>{
    switch(action.type){
        case 'add':
            return ++state;
        case 'minus':
            return --state;
        default:
            return state;
    }
}