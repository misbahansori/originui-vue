import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "../database/schema";
import postgres from "postgres";

export const tables = schema;

const client = postgres(process.env.DATABASE_URL as string);

export function useDrizzle() {
  return drizzle(client, { schema });
}

export type Subscription = typeof schema.subscriptions.$inferInsert;
