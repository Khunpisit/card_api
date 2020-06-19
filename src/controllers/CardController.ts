import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Card } from "../entity/Card";

class CardController{

static listAll = async (req: Request, res: Response) => {
  //Get cards from database
  const cardRepository = getRepository(Card);
  const cards = await cardRepository.find({
    select: ["id", "name", "status", "content", "category", "author"] 
  });

  res.send(cards);
};

static getOneById = async (req: Request, res: Response) => {
  //Get the ID from the url
  const id: number = req.params.id;

  const cardRepository = getRepository(Card);
  try {
    const card = await cardRepository.findOneOrFail(id, {
      select: ["id", "name", "status", "content", "category", "author"]
    });
  } catch (error) {
    res.status(404).send("Card not found");
  }
};

static newCard = async (req: Request, res: Response) => {
  //Get parameters from the body
  let {name, status, content, category, author} = req.body;
  let card = new Card();
  card.name = name;
  card.status = status;
  card.content = content;
  card.category = category;
  card.author = author;

  //Validade if the parameters are ok
  const errors = await validate(card);
  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }


  //Try to save. If fails, the username is already in use
  const cardRepository = getRepository(Card);
  try {
    await cardRepository.save(card);
  } catch (e) {
    res.status(409).send("card already in use");
    return;
  }

  //If all ok, send 201 response
  res.status(201).send("Card created");
};

static editCard = async (req: Request, res: Response) => {
  //Get the ID from the url
  const id = req.params.id;

  //Get values from the body
  const {name, status, content, category, author} = req.body;

  const cardRepository = getRepository(Card);
  let card;
  try {
    card = await cardRepository.findOneOrFail(id);
  } catch (error) {
    //If not found, send a 404 response
    res.status(404).send("Card not found");
    return;
  }

  //Validate the new values on model
  card.name = name;
  card.status = status;
  card.content = content;
  card.category = category;
  card.author = author;
  const errors = await validate(card);
  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }

  //Try to safe, if fails, that means card already in use
  try {
    await cardRepository.save(card);
  } catch (e) {
    res.status(409).send("card already in use");
    return;
  }

  res.status(200).send();
};

static deleteCard = async (req: Request, res: Response) => {
  //Get the ID from the url
  const id = req.params.id;

  const cardRepository = getRepository(Card);
  let card: Card;
  try {
    card = await cardRepository.findOneOrFail(id);
  } catch (error) {
    res.status(404).send("Card not found");
    return;
  }
  cardRepository.delete(id);

  res.status(200).send();
};
};

export default CardController;