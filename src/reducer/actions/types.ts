export interface Action<Type extends string = string, Payload = any> {
  type: Type;
  payload: Payload;
}
