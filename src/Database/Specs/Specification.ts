import { SQL } from "drizzle-orm";
import type { PgSelect } from "drizzle-orm/pg-core";

export class Specification {
  constructor(protected query: PgSelect) {};

  public withPagination(args: { page: number; limit: number; }) {
    this.query.offset((args.page - 1) * args.limit).limit(args.limit);
  };

  public withFiltering(condition: SQL): void {
    this.query.where(condition);
  };

  public withSorting(direction: SQL): void {
    this.query.orderBy(direction);
  };

  public build() {
    return this.query;
  };
};
