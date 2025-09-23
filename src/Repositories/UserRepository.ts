import { Users } from "@Schemas/Users";
import { UserSpec } from "@Specs/UserSpec";
import { LibSQLDatabase } from "drizzle-orm/libsql";

type InsertInput = typeof Users.$inferInsert;
type UpdateInput = Partial<InsertInput>;

export class UserRepository {
  constructor(private db: LibSQLDatabase) {};

  public async insert(data: InsertInput) {
    const query = this.db.insert(Users).values(data);
    return await query.returning({ id: Users.id }).execute();
  };

  public async delete(id: number) {
    const query = this.db.delete(Users).where(UserSpec.PredicateById(id));
    return await query.returning({ id: Users.id }).execute();
  };

  public async update(id: number, data: UpdateInput) {
    const query = this.db.update(Users).set(data).where(UserSpec.PredicateById(id));
    return await query.returning({ id: Users.id }).execute();
  };
};
