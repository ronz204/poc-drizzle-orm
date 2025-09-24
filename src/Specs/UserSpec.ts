import { Users } from "@Schemas/Users";
import { eq, asc, desc } from "drizzle-orm";

import type { PgSelect } from "drizzle-orm/pg-core";
import { Specification } from "@Interfaces/Specification";

export class UserSpec extends Specification {
  constructor(query: PgSelect) {super(query)};

  public static OrderByIdAsc = () => asc(Users.id);
  public static OrderByIdDesc = () => desc(Users.id);

  public static OrderByNameAsc = () => asc(Users.name);
  public static OrderByNameDesc = () => desc(Users.name);

  public static PredicateById = (id: number) => eq(Users.id, id);
  public static PredicateByName = (name: string) => eq(Users.name, name);
};
