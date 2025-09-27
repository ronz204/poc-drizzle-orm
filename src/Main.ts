import { Unit } from "@Database/Unit";
import { Drizzle } from "@Database/Drizzle";
import { ExistingUserSpec } from "@Specs/Shared/ExistingUserSpec";

const uow = new Unit(Drizzle);
const spec = new ExistingUserSpec({ id: 1 });

const records = await uow.user.select(spec);
console.log(records[0]?.name);
