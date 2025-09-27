export interface Handler<Input, Output> {
  handle(input: Input): Promise<Output>;
};
