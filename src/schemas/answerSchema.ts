import Joi from "joi";
import {Answer} from '@prisma/client';

export const answerSchema = Joi.object<Answer>({
  answer: Joi.string().required()
});
