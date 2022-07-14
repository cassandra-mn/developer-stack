import {prisma} from '../config/database.js';

export async function insert(id: number, answer: string) {
    await prisma.answer.create({data: {answer, questionId: id}});
}

export async function getById(questionId: number) {
    const answers = await prisma.answer.findMany({where: {questionId}});
    return answers;
}