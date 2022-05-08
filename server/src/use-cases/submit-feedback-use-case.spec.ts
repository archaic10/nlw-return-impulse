import { SubmitFeedbackUseCase } from './submit-feedback-use-case';
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail:sendMailSpy}
    );
describe('Submit feedback', ()=>{
    it('should be able to submit a feedback ', async ()=>{
        

        await expect(submitFeedbackUseCase.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png:base64'
        })).resolves.not.toThrow()
        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })
    it('should not be able to submit a feedback without type ', async ()=>{
        

        await expect(submitFeedbackUseCase.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png:base64'
        })).rejects.toThrow()
    })
    it('should not be able to submit a feedback without comment ', async ()=>{
        

        await expect(submitFeedbackUseCase.execute({
            type: 'example comment',
            comment: '',
            screenshot: 'data:image/png:base64'
        })).rejects.toThrow()
    })
    it('should not be able to submit a feedback with screenshot invalid ', async ()=>{
        

        await expect(submitFeedbackUseCase.execute({
            type: 'example comment',
            comment: 'example comment',
            screenshot: 'test.png'
        })).rejects.toThrow()
    })
})