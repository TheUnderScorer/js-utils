export default interface Action<Type> {
    type: Type;
    payload?: any;
}
