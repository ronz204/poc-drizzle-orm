export abstract class BaseException extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  };

  protected static fromStatus(status: number) {
    return class extends this {
      constructor(message: string) {
        super(status, message);
      };
    };
  };
};