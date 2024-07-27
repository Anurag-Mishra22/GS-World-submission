import { relations } from "drizzle-orm";
import { date, varchar } from "drizzle-orm/mysql-core";
import {
  integer,
  numeric,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
});

export const insertAccountsSchema = createInsertSchema(accounts);

export const categories = pgTable("categories", {
  id: text("id").primaryKey(),
  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
});

export const accountsRelations = relations(accounts, ({ many }) => ({
  transactions: many(transactions), // one account can have many transactions
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  transactions: many(transactions), // one category can have many transactions
}));

export const insertCategorySchema = createInsertSchema(categories);

export const transactions = pgTable("transactions", {
  id: text("id").primaryKey(),
  amount: integer("amount").notNull(),
  payee: text("payee").notNull(),
  notes: text("notes"),
  date: timestamp("date", { mode: "date" }).notNull(),
  accountId: text("account_id")
    .references(() => accounts.id, {
      onDelete: "cascade",
    })
    .notNull(),
  categoryId: text("category_id").references(() => categories.id, {
    onDelete: "set null",
  }),
});

export const transactionsRelations = relations(transactions, ({ one }) => ({
  account: one(accounts, {
    fields: [transactions.accountId],
    references: [accounts.id],
  }),
  categories: one(categories, {
    fields: [transactions.categoryId],
    references: [categories.id],
  }),
}));

export const insertTransactionSchema = createInsertSchema(transactions, {
  date: z.coerce.date(),
});

export const employees = pgTable("employees", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  dateOfJoining: timestamp("date_of_joining", { mode: "date" }).notNull(),
  contactNo: text("contact_no"),
  email: text("email").unique().notNull(),
  salary: numeric("salary", { scale: 2 }).notNull(),
  identificationMark: text("identification_mark"),
});

export const insertEmployeeSchema = createInsertSchema(employees, {
  dateOfJoining: z.coerce.date(),
});
