import { CommentsInterface } from './comments.interface';

export interface DespAndAnswerInterface {
    id: number;
    questionId: number;
    type: string;
    text: string;
    votePoint: number;
    comments: CommentsInterface;
}
