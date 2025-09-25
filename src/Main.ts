import { Users } from "@Schemas/Users";
import { Drizzle } from "@Database/Drizzle";
import { UserRepository } from "@Repos/UserRepository";
import { ExistingUserSpecification } from "@Specs/ExistingUserSpecification";

const repo = new UserRepository(Drizzle);
const spec = new ExistingUserSpecification(1);

const records = await repo.select(spec);
console.log(records[0]?.name);
