import * as questionRepository from '../repositories/questionRepository.js';

export async function create(question: string) {
    await questionRepository.insert(question);
}

export async function get() {
    const questions = questionRepository.get();
    return questions;
}

export async function getById(id: number) {
    const question = questionRepository.getById(id);
    return question;
}