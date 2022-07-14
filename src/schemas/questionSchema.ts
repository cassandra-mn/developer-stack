import Joi from "joi";
import {Question} from '@prisma/client';

export const questionSchema = Joi.object<Question>({
  question: Joi.string().required()
});
