import { BaseException } from "./BaseException";

export class LogicException extends BaseException {
  public static readonly NotFound = this.fromStatus(404);
  public static readonly Redundancy = this.fromStatus(500);
};
