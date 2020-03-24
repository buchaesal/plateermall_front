import SubCommentApiModel from './SubCommentApiModel';
import SumEvaluationApiModel from './SumEvaluationApiModel';

class CommentApiModel{
    
    goodsCode='';
    uuid = '';
    averageStarPoint=0;
    customerCount=0;

    sumEvaluation = new SumEvaluationApiModel();
    commentList = new SubCommentApiModel();
}

export default CommentApiModel;