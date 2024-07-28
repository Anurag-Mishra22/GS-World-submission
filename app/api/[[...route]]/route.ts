import { z } from "zod";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import accounts from "./accounts";
import categories from "./categories";
import summary from "./summary";
import transactions from "./transactions";
import employees from "./employees";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app
  .route("/accounts", accounts)
  .route("/categories", categories)
  .route("/summary", summary)
  .route("/transactions", transactions)
  .route("/employees", employees);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
