import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import card from "./card";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/card", card);

export default routes;