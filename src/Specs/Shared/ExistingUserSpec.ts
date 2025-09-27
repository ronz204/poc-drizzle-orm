import { eq } from "drizzle-orm";
import { Users } from "@Database/Schemas/Users";
import { UserSpecification } from "@Specs/Bases/UserSpecification";

interface Params {
  id: number;
};

export class ExistingUserSpec extends UserSpecification {
  constructor(params: Params) {
    super();
    this.withPagination({ page: 1, limit: 1 });
    this.withFiltering(eq(Users.id, params.id));
  };
};
