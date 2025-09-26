import { Drizzle } from "@Database/Drizzle";
import { Notes } from "@Database/Schemas/Notes";
import { Specification } from "@Specs/Specification";

export class NoteSpecification extends Specification {
  constructor() {
    super(Drizzle.select().from(Notes).$dynamic());
  };
};
