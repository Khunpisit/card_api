import { Router } from "express";
  import CardController from "../controllers/CardController";
  import { checkJwt } from "../middlewares/checkJwt";
  import { checkRole } from "../middlewares/checkRole";

  const router = Router();

  //Get all card
  router.get("/", [checkJwt, checkRole(["author"])], CardController.listAll);

  // Get one card
  router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["author"])],
    CardController.getOneById
  );

  //Create a new card
  router.post("/", [checkJwt, checkRole(["author"])], CardController.newCard);

  //Edit one card
  router.put(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["author"])],
    CardController.editCard
  );

  //Delete one card
  router.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["author"])],
    CardController.deleteCard
  );

  export default router;