import Action from './Action';
export default interface ActionWithPayload<Type, Payload = any> extends Action<Type> {
    payload: Payload;
}
