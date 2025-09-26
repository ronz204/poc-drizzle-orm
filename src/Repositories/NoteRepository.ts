import { eq } from "drizzle-orm";
import { Notes } from "@Database/Schemas/Notes";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { NoteSpecification } from "@Specs/Bases/NoteSpecification";

type InsertInput = typeof Notes.$inferInsert;
type UpdateInput = Partial<InsertInput>;

export class NoteRepository {
  constructor(private db: NodePgDatabase) { };

  public async select(spec: NoteSpecification) {
    return await spec.build().execute();
  };

  public async insert(data: InsertInput) {
    const query = this.db.insert(Notes).values(data);
    return await query.returning({ id: Notes.id }).execute();
  };

  public async delete(id: number) {
    const query = this.db.delete(Notes).where(eq(Notes.id, id));
    return await query.returning({ id: Notes.id }).execute();
  };

  public async update(id: number, data: UpdateInput) {
    const query = this.db.update(Notes).set(data).where(eq(Notes.id, id));
    return await query.returning({ id: Notes.id }).execute();
  };
};
