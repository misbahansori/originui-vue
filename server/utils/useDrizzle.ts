import * as schema from "../db/schema";

export const tables = schema;

export type Subscription = typeof schema.subscriptions.$inferInsert;
