import { NodeMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import express from 'express';
export const routes = express.Router();

routes.post('/feedbacks', async (req, res)=>{
    const {type, comment, screenshot} = req.body;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository;
    const nodeMailAdapter = new NodeMailAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodeMailAdapter
    );

    await submitFeedbackUseCase.execute({type, comment, screenshot})
    
    return res.status(201).send()
});