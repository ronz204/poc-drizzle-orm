import { Users } from "@Schemas/Users";
import { Drizzle } from "@Database/Drizzle";
import { Specification } from "./Specification";

export class UserSpecification extends Specification {
  constructor() {
    super(Drizzle.select().from(Users).$dynamic());
  };
};
