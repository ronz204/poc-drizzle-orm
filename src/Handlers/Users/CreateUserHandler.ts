import type { Handler } from "@Handlers/Handler";
import type { CreateUserCommand } from "./CreateUserSchema";
import type { CreateUserResponse } from "./CreateUserSchema";

import { Unit } from "@Database/Unit";
import { CreateUserSchema } from "./CreateUserSchema";
import { LogicException } from "@Errors/LogicException";
import { ExistingUserSpec } from "@Specs/Shared/ExistingUserSpec";

export class CreateUserHandler implements Handler<CreateUserCommand, CreateUserResponse> {
  constructor(private unit: Unit) {};

  public async handle(command: CreateUserCommand): Promise<CreateUserResponse> {
    const parsed = CreateUserSchema.parse(command);

    const spec = new ExistingUserSpec({ name: parsed.name });
    const existing = await this.unit.user.select(spec);

    if (existing.length) {
      throw new LogicException.Redundancy("User already exists")
    };

    const created = await this.unit.user.insert(parsed);
    return { id: created[0]!.id, name: parsed.name };
  };
};
