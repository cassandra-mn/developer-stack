import {prisma} from '../config/database.js';

export async function insert(question: string) {
    await prisma.question.create({data: {question}});
}

export async function get() {
    const questions = await prisma.question.findMany();
    return questions;
}

export async function getById(id: number) {
    const question = await prisma.question.findUnique({where: {id}});
    return question;
}