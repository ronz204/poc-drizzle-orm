import { UserRepository } from "@Repos/UserRepository";
import { NoteRepository } from "@Repos/NoteRepository";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";

export class Unit {
  public user: UserRepository;
  public note: NoteRepository;

  constructor(db: NodePgDatabase) {
    this.user = new UserRepository(db);
    this.note = new NoteRepository(db);
  };
};
