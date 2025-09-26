import { Drizzle } from "@Database/Drizzle";
import { Users } from "@Database/Schemas/Users";
import { Specification } from "@Specs/Specification";

export class UserSpecification extends Specification {
  constructor() {
    super(Drizzle.select().from(Users).$dynamic());
  };
};
