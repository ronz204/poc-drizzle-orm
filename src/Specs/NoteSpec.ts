import { Notes } from "@Schemas/Notes";
import { eq, asc, desc } from "drizzle-orm";
import { Specification } from "@Interfaces/Specification";

export class NoteSpec extends Specification {
  public static OrderByIdAsc = () => asc(Notes.id);
  public static OrderByIdDesc = () => desc(Notes.id);

  public static PredicateById = (id: number) => eq(Notes.id, id);
};