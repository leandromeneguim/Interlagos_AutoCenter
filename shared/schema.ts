import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  message: text("message").notNull(),
});

export const insertMessageSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
}).extend({
  email: z.string().email(),
  phone: z.string().min(10).max(20)
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
