import { SQL } from "drizzle-orm";
import type { PgSelect } from "drizzle-orm/pg-core";

export abstract class Specification {
  protected offset: number = 0;
  protected limit: number = 10;

  constructor(protected query: PgSelect) {};

  public withFiltering(prdicate: SQL) {
    this.query.where(prdicate);
  };

  public withSorting(direction: SQL) {
    this.query.orderBy(direction);
  };

  public withPagination() {
    this.query.offset(this.offset);
    this.query.limit(this.limit);
  };
};
