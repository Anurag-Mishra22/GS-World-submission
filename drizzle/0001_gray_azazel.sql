CREATE TABLE IF NOT EXISTS "employees" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"role" text NOT NULL,
	"date_of_joining" timestamp NOT NULL,
	"contact_no" text,
	"email" text NOT NULL,
	"salary" numeric NOT NULL,
	"identification_mark" text,
	CONSTRAINT "employees_email_unique" UNIQUE("email")
);
