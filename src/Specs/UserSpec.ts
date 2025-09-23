import { Users } from "@Schemas/Users";
import { eq, asc, desc } from "drizzle-orm";
import { Specification } from "./Specification";

export class UserSpec extends Specification {
  public static OrderByIdAsc = () => asc(Users.id);
  public static OrderByIdDesc = () => desc(Users.id);

  public static PredicateById = (id: number) => eq(Users.id, id);
  public static PredicateByName = (name: string) => eq(Users.name, name);
};
