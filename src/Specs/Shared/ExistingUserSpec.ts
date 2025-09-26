import { eq } from "drizzle-orm";
import { Users } from "@Database/Schemas/Users";
import { UserSpecification } from "@Specs/Bases/UserSpecification";

export class ExistingUserSpec extends UserSpecification {
  constructor(id: number) {
    super();
    this.withPagination({ page: 1, limit: 1 });
    this.withFiltering(eq(Users.id, id));
  };
};
