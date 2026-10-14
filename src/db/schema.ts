import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const rescueOffers = pgTable("rescue_offers", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  providerName: text("provider_name").notNull(),
  providerType: text("provider_type").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  city: text("city").notNull(),
  pickupArea: text("pickup_area").notNull(),
  offerType: text("offer_type").notNull(),
  discountPercent: integer("discount_percent"),
  quantity: text("quantity").notNull().default("1 bolsa"),
  contact: text("contact").notNull().default(""),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  isReserved: boolean("is_reserved").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type RescueOffer = typeof rescueOffers.$inferSelect;
export type NewRescueOffer = typeof rescueOffers.$inferInsert;

