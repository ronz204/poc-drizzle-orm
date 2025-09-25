import { eq } from "drizzle-orm";
import { Users } from "@Schemas/Users";
import { UserSpecification } from "./UserSpecification";

export class ExistingUserSpecification extends UserSpecification {
  constructor(id: number) {
    super();
    this.withPagination({ page: 1, limit: 1 });
    this.withFiltering(eq(Users.id, id));
  };
};
