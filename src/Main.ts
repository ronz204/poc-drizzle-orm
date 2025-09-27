import { Unit } from "@Database/Unit";
import { Drizzle } from "@Database/Drizzle";
import { CreateUserHandler } from "@Handlers/Users/CreateUserHandler";

const unit = new Unit(Drizzle);
const handler = new CreateUserHandler(unit);
await handler.handle({ name: "test", password: "test1234" });
