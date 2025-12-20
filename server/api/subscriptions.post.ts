import { eq } from "drizzle-orm";
import { z } from "zod";
import { readValidatedBody } from "h3";
import { db, schema } from "hub:db";

const subscriptionSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, subscriptionSchema.parse);

  const { email } = body;

  const existingSubscription = await db
    .select()
    .from(schema.subscriptions)
    .where(eq(schema.subscriptions.email, email))
    .limit(1);

  if (existingSubscription.length > 0) {
    throw createError({
      statusCode: 200,
      message: "You've been subscribed!",
    });
  }

  const [newSubscription] = await db
    .insert(schema.subscriptions)
    .values({
      email,
      createdAt: new Date(),
    })
    .returning();

  return {
    message: "You've been subscribed!",
  };
});
