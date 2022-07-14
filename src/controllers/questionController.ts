import { Request, Response } from "express";
import * as answerService from "../services/answerService.js";
import * as questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const {question}: {question: string} = req.body;
  await questionService.create(question);
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const {answer}: {answer: string} = req.body;
  const {id} = req.params;
  await answerService.create(parseInt(id), answer);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.get();
  res.status(200).send({questions});
}

export async function getById(req: Request, res: Response) {
  const {id} = req.params;
  const question = await questionService.getById(parseInt(id));
  const answers = await answerService.getById(parseInt(id));

  const response = {
    id: question.id,
    question: question.question,
    answers
  }
  res.status(200).send(response);
}
