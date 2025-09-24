import { Notes } from "@Schemas/Notes";
import { eq, asc, desc } from "drizzle-orm";

import type { PgSelect } from "drizzle-orm/pg-core";
import { Specification } from "@Interfaces/Specification";

export class NoteSpec extends Specification {
  constructor(query: PgSelect) {super(query)};

  public static OrderByIdAsc = () => asc(Notes.id);
  public static OrderByIdDesc = () => desc(Notes.id);

  public static PredicateById = (id: number) => eq(Notes.id, id);
};
