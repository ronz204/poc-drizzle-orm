import { eq } from "drizzle-orm";
import { Users } from "@Database/Schemas/Users";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { UserSpecification } from "@Specs/UserSpecification";

type InsertInput = typeof Users.$inferInsert;
type UpdateInput = Partial<InsertInput>;

export class UserRepository {
  constructor(private db: NodePgDatabase) {};

  public async select(spec: UserSpecification) {
    return await spec.build().execute();
  };

  public async insert(data: InsertInput) {
    const query = this.db.insert(Users).values(data);
    return await query.returning({ id: Users.id }).execute();
  };

  public async delete(id: number) {
    const query = this.db.delete(Users).where(eq(Users.id, id));
    return await query.returning({ id: Users.id }).execute();
  };

  public async update(id: number, data: UpdateInput) {
    const query = this.db.update(Users).set(data).where(eq(Users.id, id));
    return await query.returning({ id: Users.id }).execute();
  };
};
