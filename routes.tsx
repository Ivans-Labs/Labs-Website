/** @jsx femtojsx.h */

import { oak } from "./deps.ts";
import { femtojsx, handleHtml } from "./html.tsx";
import { Counter, HomePage } from "./components.tsx";
import {ToolsPage} from "./tools.tsx";

const router = new oak.Router();
export default router;

router.get("/", handleHtml((_) => <HomePage />));
router.get("/tools", handleHtml((_) => <ToolsPage />));

router.get(
  "/numbers/:value",
  handleHtml((ctx) => <Counter value={parseInt(ctx.params.value)} />),
);

router.get("/numbers/:value/successor", (ctx) => {
  const value = Number(ctx.params.value);

  ctx.response.status = oak.Status.SeeOther;
  ctx.response.headers.set("Location", `/numbers/${value + 1}`);
});
