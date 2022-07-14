import * as answerRepository from '../repositories/answerRepository.js';

export async function create(id: number, answer: string) {
    await answerRepository.insert(id, answer);
}

export async function getById(id: number) {
    const answer = answerRepository.getById(id);
    return answer;
}